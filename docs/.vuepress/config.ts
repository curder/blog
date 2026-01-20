import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  title: "编程学习",
  description: "编程学习点滴",
  theme: defaultTheme({
    repo: "https://github.com/curder/blog",
    docsRepo: "https://github.com/curder/blog",
    docsDir: "docs",
    docsBranch: "master",
    lastUpdatedText: "更新时间",
    contributorsText: "贡献者",
    editLinkText: "编辑当前页面",
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "编程相关",
        children: [
          "/languages/laravel/",
          "/languages/wordpress/",
          "/languages/go/",
          "/languages/javascript/",
          "/languages/vue/",
          "/languages/symfony-components/",
        ],
      },
      {
        text: "操作系统",
        children: ["/os/centos/centos7/", "/os/ubuntu/", "/os/mac-os/"],
      },
      {
        text: "工具",
        children: [
          "/tools/sublime/",
          "/tools/phpstorm/",
          "/tools/valet/",
          "/tools/vagrant/",
          "/tools/google-developer-tools/",
          "/tools/openresty/",
        ],
      },
      { text: "其他", children: ["/others/"] },
      {
        text: "📖📚",
        children: [
          {
            text: "Setup mac for developer",
            link: "https://curder.github.io/setup-mac-for-developer/",
          },
          {
            text: "Laravel study",
            link: "https://curder.github.io/laravel-study/",
          },
        ],
      },
    ],
    sidebar: {
      "/languages/laravel/": [
        {
          text: "Laravel",
          children: [
            "/languages/laravel/creating-helpers-function.md",
            "/languages/laravel/eloquent-tips-tricks.md",
            "/languages/laravel/laravel-project-initialize-readme-template.md",
            "/languages/laravel/laravel5-confirmation-box-to-delete-records-from-mysql-database-example.md",
            "/languages/laravel/prepare-project-by-laravel-adminlte-vue-js.md",
            "/languages/laravel/sort-by-mysql-json-field-value-in-laravel.md",
            "/languages/laravel/use-laravel-sms-to-build-sms-verification-code-to-send-verification-module.md",
            "/languages/laravel/using-lazy-loading-to-optimize-laravel-eloquent-queries.md",
            "/languages/laravel/using-pjax-for-page-acceleration-in-the-laravel-app.md",
          ],
        },
        {
          text: "Api",
          children: [
            "/languages/laravel/api/first-impressions-on-laravel-api-resources.md",
            "/languages/laravel/api/hiding-api-fields-dynamically-laravel-5-5.md",
            "/languages/laravel/api/reusable-api-resource-with-nested-relationship-laravel-5-5.md",
          ],
        },
        {
          text: "Packages",
          children: [
            "/languages/laravel/packages/using-laravel-query-cache-package-to-optimize-laravel-eloquent-queries.md",
          ],
        },
        {
          text: "Testing",
          children: [
            "/languages/laravel/testing/simple-tdd-in-laravel-with-11-steps.md",
          ],
        },
        {
          text: "Nova",
          children: [
            "/languages/laravel/nova/01-how-to-installation-laravel-nove.md",
            "/languages/laravel/nova/02-how-to-defining-resources-use-laravel-nova.md",
            "/languages/laravel/nova/03-how-to-defining-more-fields-use-laravel-nova.md",
            "/languages/laravel/nova/04-how-to-use-resources-relationships-in-laravel-nova.md",
            "/languages/laravel/nova/05-how-to-use-resources-vilidation-in-laravel-nova.md",
            "/languages/laravel/nova/06-how-to-defining-resources-authorization-in-laravel-nova.md",
            "/languages/laravel/nova/07-how-to-use-resources-searching-in-laravel-nova.md",
            "/languages/laravel/nova/08-how-to-use-filters-in-laravel-nova.md",
            "/languages/laravel/nova/09-how-to-use-resources-lenses-in-laravel-nova.md",
          ],
        },
        {
          text: "Livewire",
          children: [
            "/languages/laravel/livewire/how-to-install-livewire.md",
            "/languages/laravel/livewire/how-to-use-events.md",
            "/languages/laravel/livewire/how-to-use-lifecycle-hooks.md",
            "/languages/laravel/livewire/how-to-use-properties.md",
          ],
        },
      ],
      "/languages/wordpress/": [
        {
          text: "WordPress",
          children: ["/languages/wordpress/create_theme.md"],
        },
      ],
      "/languages/go/": [
        {
          text: "Go",
          children: [
            "/languages/go/how-to-install-go-lang-on-centos-7.md",
            "/languages/go/how-to-install-go-lang-on-mac-osx.md",
          ],
        },
      ],
      "/languages/javascript/": [
        {
          text: "Javascript",
          children: [
            "/languages/javascript/ajax-file-upload-using-jquery-plugin-impleupload-js.md",
            "/languages/javascript/change-the-default-file-select-box-styles-of-the-bootstrap-framework-using-bootstrap-filestyle.md",
          ],
        },
        {
          text: "Webpack2",
          children: [
            "/languages/javascript/webpack2/automatically-separate-css-to-independent-file.md",
            "/languages/javascript/webpack2/configure-multi-page-compilation.md",
            "/languages/javascript/webpack2/configure-webpack-and-command-shortcuts.md",
            "/languages/javascript/webpack2/configuring-eslint-to-implement-code-specification-autotest.md",
            "/languages/javascript/webpack2/file-compression.md",
            "/languages/javascript/webpack2/generating-source-code-for-sourcemap.md",
            "/languages/javascript/webpack2/introduce-and-install.md",
            "/languages/javascript/webpack2/loading-css-related-configuration.md",
            "/languages/javascript/webpack2/separate-project-code-and-component-code.md",
            "/languages/javascript/webpack2/statistical-analysis-of-packaging-process-using-visual-charts.md",
            "/languages/javascript/webpack2/webpack-dev-server-complete-code-change-automatically-refresh-the-browser.md",
          ],
        },
      ],
      "/languages/vue/": [
        {
          text: "Vue",
          children: [
            "/languages/vue/how-to-deployment-vue-project-to-github-pages.md",
            "/languages/vue/refactoring-code-with-mixins.md",
          ],
        },
        {
          text: "Vee Validate",
          children: [
            "/languages/vue/vee-validate/how-does-vee-validate-start-the-verification-when-the-mouse-is-removed.md",
            "/languages/vue/vee-validate/how-to-install-vee-validate-plugin.md",
            "/languages/vue/vee-validate/how-to-use-vee-validate-data-binding-in-vue.md",
            "/languages/vue/vee-validate/how-to-use-vee-validate-plugin-show-chinese-message.md",
            "/languages/vue/vee-validate/how-to-use-vee-validate-throw-the-first-error-message-and-foucs-the-first-field.md",
            "/languages/vue/vee-validate/how-to-use-vee-validate-to-customize-error-message.md",
            "/languages/vue/vee-validate/how-to-use-vee-validate-to-customize-validation-rules.md",
          ],
        },
      ],
      "/languages/symfony-components/": [
        {
          text: "Symfony 组件",
          children: [
            "/languages/symfony-components/console.md",
            "/languages/symfony-components/finder.md",
            "/languages/symfony-components/var-dumper.md",
          ],
        },
      ],
      "/os/centos": [
        {
          text: "CentOS7",
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
          ],
        },
      ],
      "/os/ubuntu": [
        {
          text: "Ubuntu",
          children: [
            "/os/ubuntu/automatically-deploy-laravel-applications-deployer-ubuntu.md",
            "/os/ubuntu/ubuntu-quickly-build-lnmp-environment.md",
            "/os/ubuntu/ubuntu-server-initialization.md",
          ],
        },
      ],
      "/os/mac-os": [
        {
          text: "Mac OS",
          children: [
            "/os/mac-os/change-homebrew-source.md",
            "/os/mac-os/clear-dns-cache-command.md",
            "/os/mac-os/debugging-web-sites-with-ios-simulator-on-macosx.md",
            "/os/mac-os/fast-creation-of-large-files-under-mac-osx.md",
            "/os/mac-os/install-and-use-the-node-version-management-tools-nvm-and-smart-npm-under-mac.md",
          ],
        },
      ],

      "/tools/": [
        {
          text: "Tools",
          children: [
            "/tools/how-to-be-free-on-all-major-platforms-over-the-fire-wall.md",
            "/tools/how-to-configure-ssi-support-in-nginx-or-apache-server.md",
            "/tools/how-to-copy-text-into-vim.md",
          ],
        },
        {
          text: "Sublime Text",
          children: [
            "/tools/sublime/change_sidebar_label_font_size.md",
            "/tools/sublime/other-plugins.md",
            "/tools/sublime/sublime-create-files-or-directories-faster.md",
            "/tools/sublime/sublime-custom-code-snippet.md",
            "/tools/sublime/sublime-emmet-quickly-write-html-and-css.md",
            "/tools/sublime/sublime-html-css-js-prettify-plugin.md",
            "/tools/sublime/sublime-linter-detect-your-php-code-and-fix-it.md",
            "/tools/sublime/sublime-plugin-git-gutter-code-difference-management.md",
            "/tools/sublime/sublime-project-management-project-manager-plugin.md",
            "/tools/sublime/sublime-sublimelinter-and-sublimelinter-contrib-eslint-plugin.md",
            "/tools/sublime/sublime-text-3-fast-generation-of-doc-blockr-annotations.md",
            "/tools/sublime/sublime-text-3-install-eslint-package-check-js-grammar.md",
            "/tools/sublime/sublime-text-3-installation-and-use-package-control-package-management.md",
            "/tools/sublime/sublime-text-3-keymap.md",
            "/tools/sublime/sublime-text-3-revert.md",
            "/tools/sublime/sublime-text-3-theme-and-editor-configuration.md",
            "/tools/sublime/sublime-text-companion-plugin-for-php.md",
            "/tools/sublime/sublime-text-side-bar-enhancements-plugin.md",
          ],
        },
        {
          text: "PHPStorm",
          children: [
            "/tools/phpstorm/configuration-themes-and-colors.md",
            "/tools/phpstorm/how-to-use-phpstorm-configures-php-code-sniffer-and-php-cs-fixer-to-support-psr2-specification.md",
            "/tools/phpstorm/ignore-some-errors.md",
            "/tools/phpstorm/install-and-simple-configure.md",
            "/tools/phpstorm/keymap.md",
            "/tools/phpstorm/path-aliases-for-imports-in-phpstorm.md",
            "/tools/phpstorm/terminal.md",
          ],
        },
        {
          text: "Git",
          children: [
            "/tools/git/get-sparse-checkout-the-repository-specified-directory-or-file.md",
            "/tools/git/git-command-list.md",
            "/tools/git/git-remember-username-and-password.md",
            "/tools/git/merge-files-or-folders-from-other-branches.md",
            "/tools/git/remote-repository-pull.md",
            "/tools/git/remote-repository-update.md",
            "/tools/git/some-of-the-branches-are-commit.md",
            "/tools/git/ssh-server-to-use-keyless-login-on-git-server.md",
          ],
        },
        {
          text: "Atom",
          children: ["/tools/atom/normal.md"],
        },
        {
          text: "Google Developer Tools",
          children: [
            "/tools/google-developer-tools/check-element-style-box-model.md",
            "/tools/google-developer-tools/console.md",
            "/tools/google-developer-tools/debug-window-switching.md",
            "/tools/google-developer-tools/edit-source-files-and-sync-to-local-files.md",
            "/tools/google-developer-tools/how-to-keep-the-state-of-the-element.md",
            "/tools/google-developer-tools/how-to-make-browsers-block-requests-for-certain-resources.md",
            "/tools/google-developer-tools/how-to-search-all-the-resources-under-the-site.md",
            "/tools/google-developer-tools/monitoring-of-element-status-changes.md",
            "/tools/google-developer-tools/quick-debugging-and-modification-of-styles.md",
            "/tools/google-developer-tools/quick-debugging-techniques-for-page-elements.md",
            "/tools/google-developer-tools/quickly-switch-between-pc-and-mobile-phone-mode.md",
            "/tools/google-developer-tools/see-the-final-style-of-the-element.md",
            "/tools/google-developer-tools/view-packed-css-and-js-files.md",
          ],
        },
        {
          text: "Vagrant",
          children: [
            "/tools/vagrant/mac-installation-using-vagrant-and-lanmp-environment-to-build.md",
            "/tools/vagrant/mac-installation-vagrant.md",
            "/tools/vagrant/vagrant-common-commands.md",
            "/tools/vagrant/vagrant-port-forwarding-and-file-sharing.md",
          ],
        },
        {
          text: "Valet",
          children: [
            "/tools/valet/valet-install.md",
            "/tools/valet/valet-support-thinkphp-3.md",
            "/tools/valet/valet-support-thinkphp-5.md",
          ],
        },
        {
          text: "Homestead",
          children: ["/tools/homestead/how-to-install-php-redis-extension.md"],
        },
        {
          text: "Docker",
          children: [
            "/tools/docker/how-to-install-docker.md",
            "/tools/docker/installing-gitlab-services-using-docker-compose.md",
          ],
        },
        {
          text: "OpenResty",
          children: [
            "/tools/openresty/get-and-set-url-params.md",
            "/tools/openresty/get-request-body.md",
            "/tools/openresty/get-request-headers.md",
            "/tools/openresty/get-response-headers.md",
            "/tools/openresty/hello-world.md",
            "/tools/openresty/log-response.md",
            "/tools/openresty/response-json-format.md",
            "/tools/openresty/response.md",
            "/tools/openresty/work-with-location.md",
          ],
        },
      ],

      "/others": [
        {
          text: "",
          children: [
            "/others/transfer-files-between-computers-via-wireguard",
            "/others/after-logging-in-to-the-remote-host-through-ssh-enter-the-specified-directory-or-execute-the-command",
            "/others/synchronize-partial-files-or-directories-with-rsync",
            "/others/use-scp-order-download-or-upload-files-and-directories",
            "/others/use-docker-deploy-gogs",
            "/others/requesting-the-lets-encrypt-wildcard-https-certificate",
            "/others/configure-lets-encrypt-to-implement-site-ssl",
            "/others/use-ssh-copy-id-to-establish-trust-with-a-remote-linux-server",
            "/others/linux-prevents-root-users-from-directly-logging-in-to-ssh-and-modifying-the-default-port",
            "/others/change-composer-packagist-config",
            {
              text: "安装和使用Oh-My-Zsh",
              link: "/others/install-and-use-oh-my-zsh",
              children: [
                {
                  text: "Oh-My-Zsh常用插件",
                  link: "/others/oh-my-zsh-common-plugins",
                  children: [
                    "/others/how-to-use-autojump-plugin",
                    "/others/how-to-use-zsh-autosuggestion-plugin",
                    "/others/how-to-use-zsh-syntax-highlighting-plugin",
                  ],
                },
              ],
            },
            "/others/nine-nine-multiplication-table-in-each-programming-language",
          ],
        },
      ],
    },
  }),
});
