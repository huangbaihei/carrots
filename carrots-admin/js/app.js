angular.module('myApp',
    ['ui.router', 'ui.bootstrap', 'oc.lazyLoad', 'mgcrea.ngStrap', 'ngCookies', 'angularFileUpload'])
//全局配置
    .config(lazyLoad)
    .config(httpRequestHead)
    .config(router)
    //WEB程序启动初始化(事件监听$on，模态框封装，全局作用域$rootScope)
    .run(function ($rootScope, $modal, $location, $state, $cookies) {
        //路由跳转时检查是否为登录状态
        $rootScope.$on('$stateChangeSuccess', function () {
            if (!$cookies.get('loginStatus') && $location.path() !== "/login") {
                $state.go("login");
            }
            else if ($cookies.get('loginStatus') && $location.path() === "/login") {
                $state.go("home");
            }
        });
        /*封装模态框*/
        //普通操作警告框
        $rootScope.alert = function (content, okFn) {
            let modal = $modal({
                html: true,
                show: false,
                templateUrl: 'pages/templates/alert.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn === 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
        //普通操作提示框
        $rootScope.confirm = function (content, okFn, cancelFn) {
            let modal = $modal({
                html: true,
                show: false,
                templateUrl: 'pages/templates/confirm.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn === 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function () {
                        typeof cancelFn === 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
        //有说明操作后果的提示框
        $rootScope.resultConfirm = function (result, content, okFn, cancelFn) {
            let modal = $modal({
                html: true,
                show: false,
                templateUrl: 'pages/templates/resultConfirm.html',
                controller: function ($scope) {
                    $scope.result = result;
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn === 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function () {
                        typeof cancelFn === 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
    });

//懒加载
function lazyLoad($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: [{
            name: 'pagination',
            files: [
                'js/directives/pagination/pagination.js',
                'js/directives/pagination/pagination.css'
            ]
        }, {
            name: 'selectRegion',
            files: [
                'js/directives/selectRegion/selectRegion.js'
            ]
        }, {
            name: 'multiSelect',
            files: [
                'js/directives/multiSelect/multiSelect.js',
                'js/directives/multiSelect/multiSelect.css',
            ]
        }, {
            name: 'fileUpload',
            files: [
                'js/directives/fileUpload/fileUpload.js',
                'js/directives/fileUpload/fileUpload.html',
            ]
        }, {
            name: 'datePicker',
            files: [
                'js/directives/datePicker/angular-locale_zh-cn.js',
                'js/directives/datePicker/datePicker.js',
                'js/directives/datePicker/datePicker.html',
            ]
        }]
    })
}

//配置请求头和数据序列化
function httpRequestHead($httpProvider) {
    // Set x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    // Set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
}

//路由
function router($stateProvider, $urlRouterProvider) {
    //更改url格式配置为html5，去掉#号（去哈希）
    // $locationProvider.html5Mode(true);
    //封装路由懒加载函数
    let _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    //配置路由
    $urlRouterProvider.otherwise("/login");
    $stateProvider
    /*登录模块*/
    //登录页
        .state('login', {
            url: '/login',
            templateUrl: 'pages/login.html',
            controller: 'loginCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/loginCtrl.js',
                    'css/login.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        //后台首页
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/homeCtrl.js',
                    'css/home.css',
                    'css/public.css'
                ])
            },
            cache: false
        })

        /*信息管理*/

        //公司信息
        .state('home.company', {
            url: '/company?page&size&name&industry&product&financing&approved&freezed&province&city&county',
            templateUrl: 'pages/information/company.html',
            controller: 'companyCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/information/companyCtrl.js',
                        'css/public.css',
                        'pagination',
                        'selectRegion'
                    ])
            },
            cache: false
        })
        //公司详情
        .state('home.companyDetails', {
            url: '/companyDetails?id',
            templateUrl: 'pages/information/companyDetails.html',
            controller: 'companyDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/information/companyDetailsCtrl.js',
                        'css/public.css',
                        'selectRegion',
                        'multiSelect',
                        'fileUpload'
                    ])
            },
            cache: false
        })
        //职位信息
        .state('home.job', {
            url: '/job?page&size&companyName&name&category&education&experience&compensation&status&startAt&endAt&companyId',
            templateUrl: 'pages/information/job.html',
            controller: 'jobCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/information/jobCtrl.js',
                        'css/public.css',
                        'pagination',
                        'datePicker'
                    ])
            },
            cache: false
        })
        //职位详情
        .state('home.jobDetails', {
            url: '/jobDetails?id&companyId&companyName&check',
            templateUrl: 'pages/information/jobDetails.html',
            controller: 'jobDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/information/jobDetailsCtrl.js',
                        'css/public.css',
                    ])
            },
            cache: false
        })

        /*内容管理*/

        //article列表
        .state('home.article', {
            url: '/article?page&size&title&author&type&status&startAt&endAt',
            templateUrl: 'pages/content/article.html',
            controller: 'articleCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/content/articleCtrl.js',
                        'css/public.css',
                        'datePicker',
                        'pagination'
                    ])
            },
            cache: false
        })
        //article详情
        .state('home.articleDetails', {
            url: '/articleDetails?id',
            templateUrl: 'pages/content/articleDetails.html',
            controller: 'articleDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/content/articleDetailsCtrl.js',
                        'css/public.css',
                        'fileUpload'
                    ])
            },
            cache: false
        })


        /*后台管理*/

        //账号管理
        .state('home.account', {
            url: '/account?page&size',
            templateUrl: 'pages/backstage/account.html',
            controller: 'accountCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/accountCtrl.js',
                        'css/public.css',
                        'pagination'
                    ])
            },
            cache: false
        })
        //账号详情
        .state('home.accountDetails', {
            url: '/accountDetails?id',
            templateUrl: 'pages/backstage/accountDetails.html',
            controller: 'accountDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/accountDetailsCtrl.js',
                        'css/public.css',
                    ])
            },
            cache: false
        })
        //角色管理
        .state('home.role', {
            url: '/role?page&size',
            templateUrl: 'pages/backstage/role.html',
            controller: 'roleCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/roleCtrl.js',
                        'css/public.css',
                        'pagination'
                    ])
            },
            cache: false
        })
        //角色详情
        .state('home.roleDetails', {
            url: '/roleDetails?id',
            templateUrl: 'pages/backstage/roleDetails.html',
            controller: 'roleDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/roleDetailsCtrl.js',
                        'css/public.css',
                    ])
            },
            cache: false
        })
        //修改密码
        .state('home.pwd', {
            url: '/pwd',
            templateUrl: 'pages/backstage/password.html',
            controller: 'pwdCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/pwdCtrl.js',
                        'css/public.css'
                    ])
            },
            cache: false
        })
        //模块管理
        .state('home.module', {
            url: '/module?page&size',
            templateUrl: 'pages/backstage/module.html',
            controller: 'moduleCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/moduleCtrl.js',
                        'css/public.css',
                        'pagination'
                    ])
            },
            cache: false
        })
        //模块详情
        .state('home.moduleDetails', {
            url: '/moduleDetails?id',
            templateUrl: 'pages/backstage/moduleDetails.html',
            controller: 'moduleDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    [
                        'js/controllers/backstage/moduleDetailsCtrl.js',
                        'css/public.css',
                    ])
            },
            cache: false
        })
}

