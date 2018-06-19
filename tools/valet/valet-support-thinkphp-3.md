# 让Valet支持ThinkPHP3

主要通过配置文件重写配置获得ThinkPHP3的支持，配置文件放置在`~/.valet/Drivers/`下，针对ThinkPHP3我们可以使用如下配置文件，文件名命名为`ThinkPHP3ValetDriver.php`：

```
<?php

class ThinkPHP3ValetDriver extends SampleValetDriver
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

        return file_exists($sitePath.'/index.php') &&
               file_exists($sitePath.'/admin_index.php');
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
        if (file_exists($staticFilePath = $sitePath . $uri . 'index.html')) {
            return $staticFilePath;
        } elseif ($this->isActualFile($staticFilePath = $sitePath.$uri)) {
            return $staticFilePath;
        }
        return true;
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
        return $sitePath.'/index.php';
    }
}
```
关于上面的三个方法`serves`、`isStaticFile`和`frontControllerPath`方法的具体介绍可以通过[查看官网](https://laravel.com/docs/5.5/valet#custom-valet-drivers)获得更多帮助。




