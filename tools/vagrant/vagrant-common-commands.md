## Vagrant常用命令


命令 | 简单说明
---- | ---
`vagrant init [options] [name [url]]` | 初始化box的操作
`vagrant up [options] [name or id]` | 启动虚拟机的操作
`vagrant ssh [options] [name or id] [-- extra ssh args]` | 登录虚拟机的操作
`vagrant box add [options] <name, url, or path>`| 添加box的操作
`vagrant box remove <name>` | 删除某个box
`vagrant box list` | 查看box列表
`vagrant box remove`| 删除相应的box
`vagrant destroy [options] [name or id]`| 停止当前正在运行的虚拟机并销毁所有创建的资源
`vagrant halt [options] [name or id]`| 关闭虚拟机
`vagrant package [options] [name or id]`| 打包命令，可以把当前的运行的虚拟机环境进行打包
`vagrant reload [vm-name]`| 重新启动虚拟机，主要用于重新载入配置文件
`vagrant suspend [name or id]` | 挂起当前虚拟机
`vagrant resume [vm-name]` | 恢复被挂起的状态
`vagrant ssh-config [options] [name or id]` | 输出用于ssh连接的一些信息
`vagrant status [name or id]` | 获取当前虚拟机的状态


