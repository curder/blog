## 修改Composer镜像下载地址

* 全局配置

```
composer config -g repos.packagist composer https://php.cnpkg.org
```

* 单独项目配置

```
composer config repo.packagist composer https://php.cnpkg.org
```

* 关闭全局配置

```
composer config -g --unset repos.packagist
```

## 查看

```
composer config -l -g # 全局配置
composer config -g repo.packagist # 项目配置
```

## 还原

```
composer config -g repo.packagist composer https://packagist.org
```


## 参考链接

* [Composer / Packagist 中国全量镜像](https://php.cnpkg.org/)
* [Packagist / Composer 中国全量镜像](https://pkg.phpcomposer.com/)
