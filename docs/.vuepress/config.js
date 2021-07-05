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
    title: '编程学习记录',
    description: '编程学习点滴',
    themeConfig: {
        navbar: [
            {text: '首页', link: '/'},
            {
                text: '编程相关',
                children: [
                    '/languages/laravel/',
                    '/languages/wordpress/',
                    '/languages/go/',
                    '/languages/javascript/',
                    '/languages/vue/'
                ]
            },
            {text: '操作系统', children: ['/os/centos/', '/os/ubuntu/', '/os/mac-os/']},
            {text: "工具", children: ['/tools/']},
            {text: "其他", children: ['/others/', '/others/']}
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

            '/os/centos': [
                {
                    isGroup: true,
                    text: 'Centos',
                    children: getFiles('os/centos'),
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
        },
    }
}
