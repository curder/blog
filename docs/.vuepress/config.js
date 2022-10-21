const { defaultTheme } = require('@vuepress/theme-default')
const {readdirSync} = require('fs');

const getFiles = (dir, filteredReadme = true) => {
    return readdirSync(`docs/${dir}`, 'utf-8')
        .filter((f) => filteredReadme ? !f.endsWith('README.md') : true)
        .filter((f) => f.endsWith('.md'))
        .map(f => `/${dir}/${f}`)
}

module.exports = {
    base: "/blog/",
    lang: 'zh-CN',
    title: '编程学习',
    description: '编程学习点滴',
    theme: defaultTheme({
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
            {text: "📖📚", children: [
                { text: 'Setup mac for developer', link: 'https://curder.github.io/setup-mac-for-developer/' },
                { text: 'Laravel study', link: 'https://curder.github.io/laravel-study/' }
            ]},
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
                    ]
                    // children: getFiles('os/centos/centos7'),
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
                    text: 'Others',
                    children: getFiles('others'),
                },
            ],
        },
    }),
}
