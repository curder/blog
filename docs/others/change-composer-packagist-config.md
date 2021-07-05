# 修改Composer镜像下载地址

## 查看配置

```bash
composer config -l -g # 全局配置
composer config -g repo.packagist # 项目配置
```

## 修改配置

> 镜像地址有：`https://php.cnpkg.org`、`https://packagist.phpcomposer.com` 和 `https://packagist.laravel-china.org` 等可供选择，这里以`php.cnpkg.org`配置为例。

* 全局配置

```bash
composer config -g repos.packagist composer https://php.cnpkg.org
```

* 单独项目配置

```bash
composer config repo.packagist composer https://php.cnpkg.org
```

* 关闭全局配置

```bash
composer config -g --unset repos.packagist
```

## 还原配置

```bash
composer config -g repo.packagist composer https://packagist.org
```

## 参考链接

* [Composer / Packagist 中国全量镜像](https://php.cnpkg.org/)
* [Packagist / Composer 中国全量镜像](https://pkg.phpcomposer.com/)
