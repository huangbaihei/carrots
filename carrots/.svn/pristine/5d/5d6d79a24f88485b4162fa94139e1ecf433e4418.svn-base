angular.module('myApp')
    .factory('requestSvc', ['$http', 'path', function ($http, path) {
        return {
            /*首页模块*/
            homeBanner: function (params) {
                return $http.get(path.homeBanner_url(), {params: params})
            },
            careerBanner: function (params) {
                return $http.get(path.careerBanner_url(), {params: params})
            },
            /*找职位模块*/

            //获取banner列表
            getBannerList: function (params) {
                return $http.get(path.getBannerList_url(), {params: params});
            },
            //获取职位列表
            getJobList: function (params) {
                return $http.get(path.getJobList_url(), {params: params})
            },
            // 职位搜索
            getSearchJob: function (params) {
                return $http.get(path.searchJob_url(), {params: params});
            },
            //获取公司列表
            getCompanyList: function (params) {
                return $http.get(path.getCompanyList_url(), {params: params})
            },
            //获取单个公司详情
            getCompanyDetils: function (id) {
                return $http.get(path.companyDetails_url(id));
            },
            //获取某个公司的职位列表
            getJobsDetail: function (id) {
                return $http.get(path.getJobList_url(id));
            },
            //获取单个职位列表
            jobsDetail: function (id) {
                return $http.get(path.jobsDetail_url(id));
            },
            /*找精英模块*/

            /*关于我们模块*/

        }
    }]);


