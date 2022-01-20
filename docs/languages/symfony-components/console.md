# Console 命令

Console 组件允许创建 command-line 命令。console（控制台）命令可以用于任何反复执行的任务，比如 cron-jobs，imports（导入），或其他批处理工作。

示例创建一个 CreateUserCommand 命令。

[GitHub 实例代码库 - curder/symfony-components](https://github.com/curder/symfony-components/tree/console)

## 安装前的准备

```bash
mkdir symfony-components # 创建目录
cd symfony-components # 进入到工作目录 

composer init # 初始化 Composer 信息

mkdir src/ # 创建源代码目录
```

`composer.json` 文件如下：

```json {13-17}
{
  "name": "curder/symfony-components",
  "description": "Discover Symfony Components",
  "authors": [
    {
      "name": "curder",
      "email": "q.curder@gmail.com"
    }
  ],
  "require": {
    "php": ">=7.2.5",
  },
  "autoload": {
    "psr-4": {
      "Curder\\": "src/"
    }
  }
}

```

## 安装

```bash
composer require symfony/console @stable
```

> 如果在 `Symfony` 应用程序之外安装这个组件，必须在代码中包含 `vendor/autoload.php` 文件来启用 Composer 提供的类的自动加载机制。

## 创建一个Console程序

首先，需要建立一个 PHP 脚本来定义控制台程序，在项目的根目录下，建立 `demo` 文件：

```php {12}
#!/usr/bin/env php

<?php

require __DIR__.'/vendor/autoload.php';

use Symfony\Component\Console\Application;

$app = new Application('Symfony Console', '0.1.0'); // 定义项目名称和版本

// 注册命令
$app->add(new CreateUserCommand);

$app->run();
```

## 创建命令

命令通过类来定义，这里定义为 `CreateUserCommand` 类。类的定义遵循如下结构：

```php
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
 
class CreateUserCommand extends Command
{
    protected function configure()
    {
        // ...
    }
 
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // ...
    }
}
```

## 配置命令

### 配置名称和描述

```php {4-6}
// ...
protected function configure()
{
    $this->setName('user:create') // 设置命令名称
         ->setDescription('Create new user') // 命令简短描述
         ->setHelp('This command allows you to create users...') // 运行命令时使用 "--help" 选项时的完整命令描述
//         ->addOption('is_admin', InputArgument::OPTIONAL, InputOption::VALUE_NONE, 'It\'s admin user.')
//         ->setDefinition([
//             new InputArgument('username', InputArgument::REQUIRED, 'The username of the user.'),
//             new InputOption('is_admin', InputArgument::OPTIONAL, InputOption::VALUE_NONE, 'It\'s admin user.'),
//         ])
         ;
}
```

### 配置用户输入

```php {8}
use Symfony\Component\Console\Input\InputArgument;
 
// ...
protected function configure()
{
    $this
        // 配置一个必须参数，如果是可选参数 InputArgument::OPTIONAL，如果是数组参数 InputArgument::IS_ARRAY
        ->addArgument('username', InputArgument::REQUIRED, 'The username of the user.')
        // ...
    ;
}
```

### 配置输出

```php
public function execute(InputInterface $input, OutputInterface $output)
{
    $output->writeln([
        'User Creator',
        '============',
        '',
    ]);
 
    // retrieve the argument value using getArgument()
    // 使用 getArgument() 取出参数值
    $output->writeln('Username: <info>'.$input->getArgument('username') . '</info>');
        
    return self::SUCCESS;
}
```

### 执行命令

```bash
./demo user:create Curder
User Creator
============

Username: Curder
```

## 单元测试

### 前置准备

#### 安装 phpunit/phpunit

```bash
composer require --dev phpunit/phpunit
```

#### 配置 phpunit xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="vendor/autoload.php"
         cacheResult ="false"
         colors="true">
    <testsuites>
        <testsuite name="Tests">
            <directory>tests</directory>
        </testsuite>
    </testsuites>
</phpunit>
```

### 断言输出

```php
    /** @test */
    public function it_should_run_user_create_command(): void
    {
        $command_name = 'user:create';
        // Set up your Application with your command.
        $application = new \Symfony\Component\Console\Application();
        // Here's where you would inject any mocked dependencies as needed.
        $application->add(new CreateUserCommand());
        $foundCommand = $application->find($command_name);
        $tester = new \Symfony\Component\Console\Tester\CommandTester($foundCommand);
        
        // './demo user:create Curder'
        $code = $tester->execute([
            'command' => $command_name,
            'username' => 'Curder',
        ]);

        $output = $tester->getDisplay();

        $assertStringContainsString('Username: Curder', $output);
        $assertEquals(\Symfony\Component\Console\Command\Command::SUCCESS, $code);
    }
```

### 测试参数必选

```php
    /** @test */
    public function it_has_require_user_name_argument(): void
    {
        $this->expectException(\Symfony\Component\Console\Exception\RuntimeException::class);
        $this->expectErrorMessage('Not enough arguments (missing: "username")');

        $command_name = 'user:create';
        // Set up your Application with your command.
        $application = new \Symfony\Component\Console\Application();
        // Here's where you would inject any mocked dependencies as needed.
        $application->add(new CreateUserCommand());
        $foundCommand = $application->find($command_name);
        $tester = new \Symfony\Component\Console\Tester\CommandTester($foundCommand);
        
        // Execute the command. This example would be the equivalent of
        // './demo user:create'
        $tester->execute([
            'command' => $command_name,
        ]);
    }
```

## 参考

- [The Console Component 文档](https://symfony.com/doc/current/components/console.html)
- [curder/symfony-components](https://github.com/curder/symfony-components/tree/console)
