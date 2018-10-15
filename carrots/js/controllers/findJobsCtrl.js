angular.module('myApp').controller('findJobsCtrl', function ($state, findJobs, requestSvc,$rootScope) {
    $(window).scrollTop(0);
    var vm = this;
    vm.experienceJobs = findJobs.experienceJobs;
    vm.researchJobs = findJobs.researchJobs;
    vm.dataJobs = findJobs.dataJobs;
    //获取banner轮播图
    requestSvc.getBannerList({type: 1, size: 4})
        .then(function (res) {
            if (res.data.code === 0) {
                vm.slides = res.data.data.articleList;
            }
        });
    //获取推荐职位
    requestSvc.getJobList({recommend: 1, size: 8})
        .then(function (res) {
            if (res.data.code === 0) {
                vm.recommendJob = res.data.data
            }
        });
    //获取最新职位
    requestSvc.getJobList({recommend: 0, size: 8})
        .then(function (res) {
            if (res.data.code === 0) {
                vm.newestJob = res.data.data
            }
        });
    //切换推荐和最新
    vm.changeSelect = function (status) {
        if (!status) {
            vm.selected = !vm.selected
        }
    };
    //获取最新认证公司
    requestSvc.getCompanyList({approvedStatus: 1, size: 4})
        .then(function (res) {
            if (res.data.code === 0) {
                vm.certificationCompany = res.data.data;
                //获取公司在招职位
                vm.jobs = [];
                angular.forEach(vm.certificationCompany, function (item, index) {
                    requestSvc.getJobList({companyId: item.id})
                        .then(function (res) {
                            if (res.data.code === 0) {
                                vm.jobs[index] = res.data.data.slice(0, 3);
                            }
                        });
                });
            }
        });
    //获取普通公司
    requestSvc.getCompanyList({approvedStatus: 0, size: 8})
        .then(function (res) {
            if (res.data.code === 0) {
                vm.commonCompany = res.data.data
            }
        });
    //竖向轮播配置
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        autoplay: true,
        observer: true,//修改swiper自己或子元素时，自动更新swiper
        observeParents: true,//修改swiper的父元素时，自动更新swiper
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
    };
    mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.start();
    }

});