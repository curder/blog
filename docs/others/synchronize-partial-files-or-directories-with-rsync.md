# 使用 rsync 同步部分文件或目录

[rsync](https://download.samba.org/pub/rsync/rsync.1)是一个允许本地与本地或本地与远程之间文件的同步工具。

在实际开发中使用 `rsync` 同步文件时可能会遇到如下场景：

1. 排除某些目录或文件
2. 仅同步目录结构 
3. 同步指定目录或文件

## 排除某些目录或者文件

在使用 rsync 同步命令时，允许指定 `--exclude="PATTERN_OR_FILENAME"` 参数支持指定排除的规则或文件名。

默认情况下会同步所有文件，所以如果需求仅仅是需要排除项目下的文件或者目录的话直接使用 `--exclude` 天际匹配规则即可。

需求：同步当前项目的除 `README.md` 文件和 `public` 目录之外的所有目录和文件。

```bash
rsync -av --exclude="README.md" --exclude="public" src_dir/
```

> - 使用 `--exclude` 排除 `README.md` 文件和 `node_modules` 目录的同步
> - 不提供同步的目标文件路径执行命令则仅展示同步的文件列表

## 仅同步目录结构

使用 `--include="PATTERN_OR_FILENAME"` 参数支持指定需要同步的规则或者文件名，配合 `--exclude="PARTTERN_OR_FILENAME"` 则可以限定仅同步目录结构。

比如有时需要创建一个目录，其目标目录层次结构与源目录结构一样，但是不需要目录中的文件，可以使用 `rsync` 命令快速完成：

```bash
# 仅同步 public 目录
rsync -av --include="public" --exclude="*" src_dir/

# 同步多个同级目录 public 和 config
rsync -av --include="public" --include="config" --exclude="*" src_dir/

# 同步 public 和子目录 css 目录
rsync -av --include="public" --include="public/css" --exclude="*" src_dir/
```

## 同步指定目录或者文件

实际开发中更多的使用场景是仅仅同步某些目录以及目录下的所有文件。通过 `--include` 配合 `--exclude` 也能完成更加灵活的过滤规则。

### 同步一级目录

要求：同步项目目录下的 `public` 目录。

```bash
# --exclude="/*" 规则排除了 src_dir/ 目录下，除了 public 目录外所有的文件和子目录
# 递归扫描 public 目录时，因不命中任何排除规则，所有子目录和文件都被默认包含
rsync -av --include="public" --exclude="/*" src_dir/

# --include="public" 匹配 public 目录
# --include="public/**" 匹配 public 目录下所有的子目录和文件的路径。
# 其余所有的路径被 --exclude="*" 匹配并排除。
rsync -av --include="public" --include="public/**" --exclude="*" src_dir/

# --include="public/***" 匹配 public 目录以及其所有子目录和文件
# 其余所有的路径被 --exclude="*" 匹配并排除。
rsync -av --include="public/***" --exclude="*" src_dir/

# 使用修饰符 ! 取反，排除了 public 目录以及其所有子目录和文件路径之外的路径
# 相当于只同步 public 目录下所有的子目录和文件路径
rsync -av -f "-! public/***" src_dir/
```

> 其中 [`-f`](https://download.samba.org/pub/rsync/rsync.1#opt--filter) 参数允许添加多种修饰符，而 `--include` 和 `--exclude` 可以使用 `-f` 参数替代。
> 
> 其中修饰符 `!` 表示对匹配结果进行取反，把匹配成功当做匹配失败，把匹配失败当做匹配成功
> 
> - `--include="public"` 转化为过滤规则为：`-f "+ public"`，其中 `+` 表示包含
>
> - `--exclude="*"` 转化为过滤规则为：`-f "- *"`，其中 `-` 表示排除

### 仅同步多个子目录

要求：仅同步项目目录下的 `public` 和 `config` 所有文件。

```bash
# --exclude="/*" 规则排除了 src_dir/ 目录下，除了 public 和 config 目录外所有的文件和子目录
# 递归扫描 public 目录时，因不命中任何排除规则，所有子目录和文件都被默认包含
rsync -av --include="public" --include="config" --exclude="/*" src_dir/

# --include="public" 匹配 public 目录
# --include="public/**" 匹配 public 目录下所有的子目录和文件的路径
# --include="config" 匹配 config 目录
# --include="config/**" 匹配 config 目录下所有的子目录和文件的路径
# 其余所有的路径被 --exclude="*" 匹配并排除
rsync -av --include="public" --include="public/**" \
      --include="config" --include="config/**" \
      --exclude="*" \
      src_dir/

# --include="public/***" 匹配 public 目录下所有的子目录和文件的路径
# --include="config/***" 匹配 config 目录下所有的子目录和文件的路径
# 其余所有的路径被 --exclude="*" 匹配并排除。
rsync -av --include="public/***" --include="config/***" --exclude="*" src_dir/
```

### 仅同步更深层的子目录

要求：仅同步项目目录下的 `app/Http` 目录下的所有文件。

```bash
# --include="app" 规则包含app
# --include="app/Http/***" 规则包含 app/Http 目录及所有子目录和文件
# 其余路径由 --exclude="*" 排除
rsync -av --include="app" --include="app/Http/***" --exclude="*" src_dir/

# --include="app" 规则包含app
# --include="app/Http/***" 规则包含 app/Http 目录及所有子目录和文件
# --exclude="/*" 规则排除了 src_dir/ 目录下，除了 app 目录外所有的文件和子目录
# --exclude="*/*" 规则排除了 src_dir/ 目录下，除了 app/Http 目录外所有的文件和子目录
rsync -av --include="app" --include="app/Http/***" --exclude="/*" --exclude="*/*" src_dir/

# -f "-! app/***" 规则使用取反，只保留 app 子目录
# --include="app/Http/" 包含 app/Http/ 目录，其余二级子目录由规则 --exclude"/*/*" 排除
rsync -av -f "-! app/***" --include="app/Http/" --exclude="/*/*" src_dir/

# --include="app" 规则包含app
# -f "-! app/Http/***" 使用修饰符 ! 取反，排除了 app/Http 目录以及其所有子目录和文件路径之外的路径
# --exclude="/*" 规则排除了 src_dir/ 目录下，除了 app 目录外所有的文件和子目录
rsync -av --include="app" -f "-! app/Http/***" --exclude="/*" src_dir/
```

### 仅同步多个深层级的子目录

要求：仅同步项目目录下的 `app/Http` 和 `storage/app` 目录下的所有文件。

```bash
# 给深层的子目录的所有父级目录都添加包含规则，然后深层子目录添加 *** 的包含规则，最后是一条排除规则。
rsync -av \ 
      --include="app" --include="app/Http/***" \ 
      --include="storage" --include="storage/app/***" \
      --exclude="*" \
      src_dir/
```

## 参考地址

- [Rsync - pattern matching rules](https://download.samba.org/pub/rsync/rsync.1#PATTERN_MATCHING_RULES)
- [rsync 命令过滤规则入门教程](https://zhuanlan.zhihu.com/p/441161884)
- [rsync include exclude使用 选择指定目录](https://blog.csdn.net/u012076529/article/details/88668772)