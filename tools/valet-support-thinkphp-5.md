# 让Valet支持ThinkPHP

主要通过配置文件重写配置获得ThinkPHP5的支持，配置文件放置在`~/.valet/Drivers/`下，针对ThinkPHP5我们可以使用如下配置文件，文件名命名为`ThinkPHP5ValetDriver.php`：

```
<?php

class ThinkPHP5ValetDriver extends ValetDriver
{
    /**
     * Determine if the driver serves the request.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return bool
     */
    public function serves($sitePath, $siteName, $uri)
    {
        return file_exists($sitePath . '/' . $siteName . '/public/index.php');
    }

    /**
     * Determine if the incoming request is for a static file.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string|false
     */
    public function isStaticFile($sitePath, $siteName, $uri)
    {
        if (file_exists($staticFilePath = $sitePath . '/' . $siteName . '/public' . $uri)) {
            return $staticFilePath;
        }

        return false;
    }

    /**
     * Get the fully resolved path to the application's front controller.
     *
     * @param  string  $sitePath
     * @param  string  $siteName
     * @param  string  $uri
     * @return string
     */
    public function frontControllerPath($sitePath, $siteName, $uri)
    {
        $_SERVER['SCRIPT_FILENAME'] = 'index.php';
        $_SERVER['SCRIPT_NAME'] = '';
        $_SERVER['PHP_SELF'] = '/index.php';
        $_SERVER['PATH_INFO'] = $uri;
        return $sitePath . '/' . $siteName.'/public/index.php';
    }
}
```
关于上面的三个方法`serves`、`isStaticFile`和`frontControllerPath`方法的具体介绍可以通过[查看官网](https://laravel.com/docs/5.6/valet#custom-valet-drivers)获得更多帮助。
