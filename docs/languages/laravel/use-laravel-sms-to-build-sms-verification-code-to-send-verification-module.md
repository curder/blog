# 使用 laravel-sms 构建短信验证码发送校验模块

项目中经常要使用发送短信功能，验证用户的手机号的正确性。比如：短信注册或者通过手机号码找回密码等功能。

这里使用[Laravel5.6](https://laravel.com/docs/5.6)、[laravel-sms2.6](https://github.com/toplan/laravel-sms)，中间件使用`api`验证，短信发送使用`Aliyun`驱动作为演示。

## 安装laravel-sms

进入到laravel的项目根目录下，运行下面的composer命令安装`laravel-sms`。

```bash
composer require toplan/laravel-sms
```

## 配置laravel-sms

在 `config/app.php` 文件的 `providers` 数组中添加

```php
'providers' => [
    /*
     * Package Service Providers...
     */
    Toplan\PhpSms\PhpSmsServiceProvider::class,
    Toplan\Sms\SmsManagerServiceProvider::class,
],
```

并在 `aliases` 数组里添加

```php
'PhpSms' => Toplan\PhpSms\Facades\Sms::class,
'SmsManager' => Toplan\Sms\Facades\SmsManager::class,
```

运行下面的命令生成配置文件

```bash
php artisan vendor:publish --provider="Toplan\PhpSms\PhpSmsServiceProvider"
php artisan vendor:publish --provider="Toplan\Sms\SmsManagerServiceProvider"
```

命令运行成功后，在 `config` 文件夹中生成两个配置文件：`phpsms.php` 和 `laravel-sms.php`。其中 `phpsms.php` 中可以配置代理器信息及均衡调度方案， `laravel-sms.php`
中可以配置验证码的发送与验证方案。

同时会向 `database\migrations` 中复制 `2015_12_21_111514_create_sms_table.php` 文件，用于生成 `laravel_sms` 表。该表用于记录发送短信的记录。

### 配置phpsms.php

* 设置 scheme 数组，配置均衡调度方案。

```php
'scheme' => [
    'Aliyun'
],
```

设置 `phpsms.php` 中 `agnets` 数组中aliyun的代理器信息。

```php
/*
 * -----------------------------------
 * Aliyun
 * 阿里云
 * -----------------------------------
 * website:https://www.aliyun.com/product/sms
 * support template sms.
 */
'Aliyun' => [
    'accessKeyId'       => env('SMS_ALIYUN_ACCESS_KEY_ID'),
    'accessKeySecret'   => env('SMS_ALIYUN_ACCESS_KEY_SECRET'),
    'signName'          => env('SMS_ALIYUN_SIGN_NAME'),
    'regionId'          => 'cn-shenzhen',
],
```

### 配置 laravel-sms.php

* 设置默认路由

```php
'route' => [
  'enable'     => true, // 方便调试，上线后选择关闭
  'prefix'     => 'laravel-sms',
  'middleware' => ['api'], // 修改为api中间件
],
```

* 设置请求间隔，单位为秒

```php
'interval' => 60,
```

* 设置号码验证规则

```php
 'validation' => [
    'phone' => [
        'isMobile'    => true,
        'enable'      => true,
        'default'     => 'unique_phone',
        'staticRules' => [
          'unique_phone'     => 'required|zh_mobile|unique:users,phone', // 默认验证规则
          'register_unique_phone'     => 'required|zh_mobile|unique:users,phone', // 注册
          'reset_password_exists_phone' => 'required|zh_mobile|exists:users,phone', // 重置密码
        ],
    ],
],
```

* 设置验证码规则

```php
'code' => [
  'length'        => 6,  //验证码长度
  'validMinutes'  => 10,  //验证码有效时间长度，单位为分钟
  'repeatIfValid' => true,  //验证码有效期内是否重复使用
  'maxAttempts'   => 0,  //验证码最大尝试验证次数，0 或负数则不启用
],
```

* 设置验证码内容短信

```php
'content'    => \Toplan\Sms\SmsManager::closure(function ($code, $minutes, $input) {
    return "您的验证码是：{$code} （{$minutes}分钟内有效，如非本人操作，请忽略）";
}),
```

* 开启数据库日志

```php
'dbLogs' => 'ture',
```

> 开发环境建议开启。需要提前运行 `php artisan migrate` 生成 `laravel_sms` 表。

## API 实现

在 `app/Http/Traits` 下新建 `SmsCode.php`，并在里面实现验证码发送和校验功能。这样其他类可以随时调用，提高代码的复用性。

### 发送和检验

发送前需要对手机号进行校验，包括：

* `validateSendable()` ：验证是否满足发送间隔

* `validateFields()` ：验证数据合法性

通过验证后，再使用 `requestVerifySms()` 发送验证码。

使用laravel-sms拓展包提供的内置检验规则实现校验。

具体代码如下：

```php
<?php

namespace App\Http\Traits;

use Toplan\Sms\Facades\SmsManager;
use Illuminate\Support\Facades\Validator;

trait SmsCode
{
    /**
     * 发送验证码
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendSmsCode()
    {
        $result = SmsManager::validateSendable();
        if (!$result['success']) {
            return response()->json($result);
        }

        $result = SmsManager::validateFields();
        if (!$result['success']) {
            return response()->json($result);
        }

        $result = SmsManager::requestVerifySms();
        if (!$result['success']) {
            return response()->json($result);
        }

        return response()->json($result);
    }

    /**
     * 校验验证码
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateSmsCode()
    {
        //验证数据
        $validator = Validator::make(request()->all(), [
            'phone_number' => 'required|confirm_mobile_not_change|confirm_rule:phone_required',
            'sms_code'     => 'required|verify_code',
        ]);

        if ($validator->fails()) {
            //验证失败后建议清空存储的发送状态，防止用户重复试错
            SmsManager::forgetState();
            return response()->json($validator->errors());
        }
    }
}
```

## 添加路由和控制器代码

### 添加路由

打开`routes/api.php`文件，添加两条路由：

```php
Route::post('/sms/send-code', 'Api\SmsController@sendSmsCode');
Route::post('/sms/validate-code', 'Api\SmsController@validateSmsCode');
```

### 修改控制器

建议使用`php artisan make:controller Api/SmsController`新建一个控制器，并引入上面编写的trait。

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Traits\SmsCode;
use App\Http\Controllers\Controller;

class SmsController extends Controller
{
    use SmsCode;
}
```

## 本地化语言

在 `laravel-sms.php` 中提供了部分提示信息的自定义。想要将剩余部分的提示信息转换为本地语言，需要另行处理。

首先确保 `config/app.php` 中的语言设置正确为 `zh-CN`。

```php
'locale' => 'zh_cn',
```

然后在 `resources\lang\zh-CN` 文件夹下新建 `validation.php`，并填入本地化信息

```php
return [
  'required'  => '缺少:attribute参数',

  'zh_mobile'                 => '非标准的中国大陆手机号',
  'confirm_mobile_not_change' => '提交的手机号已变更',
  'verify_code'               => '验证码不合法或无效',

  'attributes' => [
    'phone_number' => '手机号',
    'sms_code'   => '验证码',
  ],
];
```

## 前端资源

这里的前端资源使用扩展包提供的`laravel-sms.js`文件，具体编写使用：

```javascript
require('@common/js/helpers/laravel-sms');

$(function () {
    const phone_rules = {
            register: 'register_unique_phone',
            reset_password: 'reset_password_exists_phone',
        },
        token = $('meta[name="csrf-token"]').attr('content'),
        interval = 60,
        requestUrl = '/api/v1/sms/send-code',
        phone_value = () => $("#phone").val(),
        language = {
            sending: '短信发送中...',
            failed: '请求失败，请重试',
            resendable: '{{seconds}} 秒后再次发送'
        },
        notifyCallback = (msg, type) => {
            if (type === 'sms_sent_success') {
                toastr.success(msg);
            } else {
                toastr.error(msg);
            }
        },
        types = { // 短信验证类型，后台通过这个类型发送不用的模版
            register: 'register', // 注册
            reset_password: 'reset_password', // 重置密码
        }
    ;

    // 发送ajax之前在Header头添加Access-Token，参考文档：https://github.com/toplan/laravel-sms#%E6%97%A0%E4%BC%9A%E8%AF%9D%E6%94%AF%E6%8C%81
    $.ajaxSetup({
        beforeSend: (xhr) => {
            xhr.setRequestHeader('Access-Token', phone_value());
        }
    });

    // 注册发送校验短信
    $("#sendRegisterVerifySmsButton").sms({
        //laravel csrf token
        token: token,
        //请求间隔时间
        interval: interval,
        // 请求地址
        requestUrl: requestUrl,
        //语音验证码
        voice: false,
        //请求参数
        requestData: {
            // 手机号
            phone: phone_value,
            // 手机号的检测规则，与配置文件中配置保持一致
            phone_rule: phone_rules.register,
            // 短信类型
            type: types.register,
        },
        //消息展示方式(默认为alert)
        notify: notifyCallback,

        //语言包
        language: language
    });

    // 重置密码发送校验短信
    $("#sendResetVerifySmsButton").sms({
        //laravel csrf token
        token: token,
        //请求间隔时间
        interval: interval,
        // 请求地址
        requestUrl: requestUrl,
        //语音验证码
        voice: false,
        //请求参数
        requestData: {
            // 手机号
            phone: phone_value,
            // 手机号的检测规则，与配置文件中配置保持一致
            phone_rule: phone_rules.reset_password,
            // 短信类型
            type: types.reset_password,
        },
        //消息展示方式(默认为alert)
        notify: notifyCallback,

        //语言包
        language: language
    });
});
```

## 测试

接下来配置路由和控制器，测试下功能是否正常。 可以同时打开 `http://domain/laravel-sms/info` 查看验证码短信发送和校验状态。 如果启用了数据库日志，可以在 `laravel_sms`
表中查看短信发送结果的详细信息。

### 发送验证码

```text
# request
{{api_url}}/sms/send-code

# response
{
    "success": true,
    "type": "sms_sent_success",
    "message": "短信验证码发送成功，请注意查收"
}
```

填写正确的手机号接受到验证码。 若验证失败或发送失败，则会返回对应的错误信息。

### 校验验证码

```text
# request
{{api_url}}/sms/validate-code

# response
{
    "phone_number": [
        "提交的手机号已变更",
    ],
    "sms_code": [
        "验证码不合法或无效"
    ]
}
```

若通过验证，则无返回。若验证失败，则会返回对应的错误信息。

## 参考地址

* [使用 laravel-sms 构建短信验证码发送校验模块](http://blog.qiji.tech/archives/16318)
