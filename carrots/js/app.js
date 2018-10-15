angular.module('myApp', ['ui.router', 'ui.bootstrap', 'oc.lazyLoad','ngAnimate'])
//全局配置
    .config(lazyLoad)
    .config(httpRequestHead)
    .config(router)
    //WEB程序启动初始化(事件监听$on，模态框封装，全局作用域$rootScope)
    .run(function ($rootScope, $uibModal, $transitions, $state) {
        //监听路由变化清本地存储
        $transitions.onSuccess({}, function () {
            if (!$state.includes('home.searchHead.positionSearch')) {
                sessionStorage.removeItem('jobOptions')
            }
            if (!$state.includes('home.recommend')) {
                sessionStorage.removeItem('recommend')
            }
            if (!$state.includes('home.newest')) {
                sessionStorage.removeItem('newest')
            }
            if (!$state.includes('home.companyDetail')) {
                sessionStorage.removeItem('storeOptions');
                sessionStorage.removeItem('status')
            }
        });

        //我感兴趣——模态框
        $rootScope.interests = function () {
            var modalInstance = $uibModal.open({
                ariaDescribedBy: 'modal-body',
                templateUrl: 'pages/uibModal.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.close = function () {
                        $uibModalInstance.close();
                    };
                }
            });
            modalInstance.result.then(function () {
            });
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
        },
            {
                name: 'other',
                files: [
                    'js/directives/otherOccupations/otherOccupations.js'
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
    $urlRouterProvider.otherwise('/desk');
    $stateProvider
    //公共上下导航栏
        .state('home', {
            url: '',
            templateUrl: 'pages/home.html',
            abstract: true,// true 表明此状态不能被显性激活，只能被子状态隐性激活
            controller: 'homeCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/home.css',
                    'css/public.css',
                    'js/controllers/homeCtrl.js',
                    'js/directives/jobPicture/jobPicture.js',
                    'js/directives/jobPicture/jobPicture.css'
                ])
            },
            cache: false
        })
        //首页
        .state('home.desk', {
            url: '/desk',
            templateUrl: 'pages/desk.html',
            controller: 'deskCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/deskCtrl.js',
                    'css/desk.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        //找职位主页
        .state('home.findJobs', {
            url: '/findJobs',
            templateUrl: 'pages/findJobs.html',
            controller: 'findJobsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findJobsCtrl.js',
                    'css/findJobs.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        //找职位搜索头
        .state('home.searchHead', {
            url: '/searchHead',
            templateUrl: 'pages/searchHead.html',
            controller: '',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/searchHead.css',
                    'css/public.css',
                    'pagination',
                ])
            },
            cache: false
        })
        //找职位公司搜索页
        .state('home.searchHead.companySearch', {
            url: '/companySearch?page&industry&financing&city&size&name',
            templateUrl: 'pages/companySearch.html',
            controller: 'companySearchCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/companySearchCtrl.js',
                    'css/companySearch.css',
                    'css/public.css',
                ])
            },
            cache: false
        })
        //找职位职位搜索页
        .state('home.searchHead.positionSearch', {
            url: '/positionSearch?page&size&name&id&subId&recommend',
            templateUrl: 'pages/positionSearch.html',
            controller: 'positionSearchCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/positionSearchCtrl.js',
                    'css/positionSearch.css',
                    'css/public.css',
                    'other'
                ])
            },
            cache: false
        })
        //找职位推荐职位
        .state('home.recommend', {
            url: '/recommend?page&size&name&id&subId',
            templateUrl: 'pages/recommend.html',
            controller: 'recommendCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/recommendCtrl.js',
                    'css/positionSearch.css',
                    'css/public.css',
                    'pagination',
                    'other'
                ])
            },
            cache: false
        })
        //找职位最新职位
        .state('home.newest', {
            url: '/newest?page&size&name&id&subId',
            templateUrl: 'pages/newest.html',
            controller: 'newestCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/newestCtrl.js',
                    'css/positionSearch.css',
                    'css/public.css',
                    'pagination',
                    'other'
                ])
            },
            cache: false
        })
        //在招职位点击详情
        .state('home.searchHead.biddingJob', {
            url: 'biddingJob?id&page&size',
            templateUrl: 'pages/biddingJob.html',
            controller: '',
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/biddingJob.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        //公司点击详情
        .state('home.companyDetail', {
            url: '/companyDetail?id',
            templateUrl: 'pages/companyDetail.html',
            controller: 'companyDetailCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/companyDetailCtrl.js',
                    'css/companyDetail.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        // 职位点击详情
        .state('home.jobDetails', {
            url: '/jobDetails?id',
            templateUrl: 'pages/jobDetails.html',
            controller: 'jobDetailsCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/jobDetailsCtrl.js',
                    'css/jobDetails.css',
                    'css/uibModal.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        .state('home.findElites', {
            url: '/findElites',
            templateUrl: 'pages/findElites.html',
            controller: 'findElitesCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/findElitesCtrl.js',
                    'css/findElites.css',
                    'css/public.css'
                ])
            },
            cache: false
        })
        //找精英公司搜索页
        .state('home.companyList', {
            url: '/companyList?page&industry&financing&city&size',
            templateUrl: 'pages/companyList.html',
            controller: 'companyListCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/companyListCtrl.js',
                    'css/companyList.css',
                    'css/public.css',
                    'pagination'
                ])
            },
            cache: false
        })
        //关于我们
        .state('home.about', {
            url: '/about?status',
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl as vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/aboutCtrl.js',
                    'css/about.css',
                    'css/public.css'
                ])
            },
            cache: false
        })

}

