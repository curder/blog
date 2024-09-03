import {defineUserConfig} from 'vuepress'
import {defaultTheme} from 'vuepress'
import {readdirSync} from "fs";

const getFiles = (dir, filteredReadme = true) => {
    return readdirSync(`docs/${dir}`, 'utf-8')
        .filter((f) => filteredReadme ? !f.endsWith('README.md') : true)
        .filter((f) => f.endsWith('.md'))
        .map(f => `/${dir}/${f}`)
}

export default defineUserConfig({
    base: "/blog/",
    lang: 'zh-CN',
    title: '编程学习',
    description: '编程学习点滴',
    theme: defaultTheme({
        repo: 'https://github.com/curder/blog',
        docsRepo: 'https://github.com/curder/blog',
        docsDir: 'docs',
        docsBranch: 'master',
        lastUpdatedText: '更新时间',
        contributorsText: '贡献者',
        editLinkText: '编辑当前页面',
        navbar: [
            {text: '首页', link: '/'},
            {
                text: '编程相关',
                children: [
                    '/languages/laravel/',
                    '/languages/wordpress/',
                    '/languages/go/',
                    '/languages/javascript/',
                    '/languages/vue/',
                    '/languages/symfony-components/'
                ]
            },
            {text: '操作系统', children: ['/os/centos/centos7/', '/os/ubuntu/', '/os/mac-os/']},
            {
                text: "工具",
                children: [
                    '/tools/sublime/',
                    '/tools/phpstorm/',
                    '/tools/valet/',
                    '/tools/vagrant/',
                    '/tools/google-developer-tools/',
                    '/tools/openresty/',
                ]
            },
            {text: "其他", children: ['/others/']},
            {
                text: "📖📚", children: [
                    {text: 'Setup mac for developer', link: 'https://curder.github.io/setup-mac-for-developer/'},
                    {text: 'Laravel study', link: 'https://curder.github.io/laravel-study/'}
                ]
            },
        ],
        sidebar: {
            '/languages/laravel/': [
                {
                    isGroup: true,
                    text: 'Laravel',
                    children: getFiles('languages/laravel'),
                },
                {
                    isGroup: true,
                    text: 'Api',
                    children: getFiles('languages/laravel/api'),
                },
                {
                    isGroup: true,
                    text: 'Packages',
                    children: getFiles('languages/laravel/packages'),
                },
                {
                    isGroup: true,
                    text: 'Testing',
                    children: getFiles('languages/laravel/testing'),
                },
                {
                    isGroup: true,
                    text: 'Nova',
                    children: getFiles('languages/laravel/nova'),
                },
                {
                    isGroup: true,
                    text: 'Livewire',
                    children: getFiles('languages/laravel/livewire'),
                },
            ],
            '/languages/wordpress/': [
                {
                    isGroup: true,
                    text: 'WordPress',
                    children: getFiles('languages/wordpress'),
                },
            ],
            '/languages/go/': [
                {
                    isGroup: true,
                    text: 'Go',
                    children: getFiles('languages/go'),
                },
            ],
            '/languages/javascript/': [
                {
                    isGroup: true,
                    text: 'Javascript',
                    children: getFiles('languages/javascript'),
                },
                {
                    isGroup: true,
                    text: 'Webpack2',
                    children: getFiles('languages/javascript/webpack2'),
                },
            ],
            '/languages/vue/': [
                {
                    isGroup: true,
                    text: 'Vue',
                    children: getFiles('languages/vue'),
                },
                {
                    isGroup: true,
                    text: 'Vee Validate',
                    children: getFiles('languages/vue/vee-validate'),
                },
            ],
            '/languages/symfony-components/': [
                {
                    isGroup: true,
                    text: 'Symfony 组件',
                    children: getFiles('languages/symfony-components'),
                },
            ],


            '/os/centos': [
                {
                    isGroup: true,
                    text: 'CentOS7',
                    children: [
                        "/os/centos/centos7/centos-7-server-initialization",
                        "/os/centos/centos7/centos-7-install-oh-my-zsh",
                        "/os/centos/centos7/centos-7-lnmp-installation-and-configuration",
                        "/os/centos/centos7/centos-7-uses-yum-way-to-install-and-configure-mysql",
                        "/os/centos/centos7/centos-7-uses-yum-way-to-install-and-configure-nginx",
                        "/os/centos/centos7/centos-7-uses-yum-way-to-install-and-configure-php-fpm",
                        "/os/centos/centos7/centos-7-install-openresty",
                        "/os/centos/centos7/automatically-deploy-laravel-applications-deployer-centos",
                        "/os/centos/centos7/centos-7-install-and-configuration-docker",
                        "/os/centos/centos7/centos-7-install-nginx-proxy-manager",
                        "/os/centos/centos7/centos-7-install-php-extension-swoole",
                        "/os/centos/centos7/centos-uses-scheduled-tasks-to-perform-tasks-every-seconds",
                        "/os/centos/centos7/how-to-create-a-sudo-user-on-centos",
                        "/os/centos/centos7/how-to-install-and-configure-gitlab-ce-on-centos-7",
                        "/os/centos/centos7/how-to-use-firewall-package-in-centos7",
                        "/os/centos/centos7/how-to-use-supervisord-manager-processes",
                        "/os/centos/centos7/installing-configuration-shadowsocks-under-centos-7",
                        "/os/centos/centos7/prevent-remote-linux-hosts-from-automatically-desconnecting-ssh-connections",
                        "/os/centos/centos7/use-the-lua-script-to-process-the-simplified-traditional-conversion-logic-on-the-nginx",
                        "/os/centos/centos7/how-to-add-swap-space-on-centos-7-operating-system.md",
                        "/os/centos/centos7/centos-7-install-node-18x.md",
                    ]
                },
            ],
            '/os/ubuntu': [
                {
                    isGroup: true,
                    text: 'Ubuntu',
                    children: getFiles('os/ubuntu'),
                },
            ],
            '/os/mac-os': [
                {
                    isGroup: true,
                    text: 'Mac OS',
                    children: getFiles('os/mac-os'),
                },
            ],

            '/tools/': [
                {
                    isGroup: true,
                    text: 'Tools',
                    children: getFiles('tools'),
                },
                {
                    isGroup: true,
                    text: 'Sublime Text',
                    children: getFiles('tools/sublime')
                },
                {
                    isGroup: true,
                    text: 'PHPStorm',
                    children: getFiles('tools/phpstorm')
                },
                {
                    isGroup: true,
                    text: 'Git',
                    children: getFiles('tools/git')
                },
                {
                    isGroup: true,
                    text: 'Atom',
                    children: getFiles('tools/atom')
                },
                {
                    isGroup: true,
                    text: 'Google Developer Tools',
                    children: getFiles('tools/google-developer-tools'),
                },
                {
                    isGroup: true,
                    text: 'Vagrant',
                    children: getFiles('tools/vagrant'),
                },
                {
                    isGroup: true,
                    text: 'Valet',
                    children: getFiles('tools/valet')
                },
                {
                    isGroup: true,
                    text: 'Homestead',
                    children: getFiles('tools/homestead')
                },
                {
                    isGroup: true,
                    text: 'Docker',
                    children: getFiles('tools/docker')
                },
                {
                    isGroup: true,
                    text: 'OpenResty',
                    children: getFiles('tools/openresty')
                },
            ],

            '/others': [
                {
                    isGroup: true,
                    text: '',
                    children: [
                        '/others/after-logging-in-to-the-remote-host-through-ssh-enter-the-specified-directory-or-execute-the-command',
                        '/others/synchronize-partial-files-or-directories-with-rsync',
                        '/others/use-scp-order-download-or-upload-files-and-directories',
                        '/others/use-docker-deploy-gogs',
                        '/others/requesting-the-lets-encrypt-wildcard-https-certificate',
                        '/others/configure-lets-encrypt-to-implement-site-ssl',
                        '/others/use-ssh-copy-id-to-establish-trust-with-a-remote-linux-server',
                        '/others/linux-prevents-root-users-from-directly-logging-in-to-ssh-and-modifying-the-default-port',
                        '/others/change-composer-packagist-config',
                        {
                            text: '安装和使用Oh-My-Zsh', link: '/others/install-and-use-oh-my-zsh', children: [
                                {
                                    text: 'Oh-My-Zsh常用插件', link: '/others/oh-my-zsh-common-plugins', children: [
                                        '/others/how-to-use-autojump-plugin',
                                        '/others/how-to-use-zsh-autosuggestion-plugin',
                                        '/others/how-to-use-zsh-syntax-highlighting-plugin',
                                    ]
                                },
                            ]
                        },
                        '/others/nine-nine-multiplication-table-in-eeach-programming-language',
                    ]
                },
            ],
        },
    }),
});
