angular.module('myApp')
    .controller('deskCtrl', function ($scope, $rootScope, $http,requestSvc){
        $(window).scrollTop(0);
        var vm = this;
        //banner
        requestSvc.homeBanner({type: 1,size: 8})
            .then(function (res) {
            if (res.data.code === 0) {
                vm.bannersList = res.data.data.articleList;
                $(document).ready(function () {
                    // Activate Carousel
                    $("#banner").carousel({interval: 3000});
                    $("#banner").mouseover(function () {
                        $("#banner").carousel("pause");
                    });
                    $("#banner").mouseout(function () {
                        $("#banner").carousel('cycle');
                    });
                    $(".left").click(function () {
                        $("#banner").carousel("prev");
                    });
                    $(".right").click(function () {
                        $("#banner").carousel("next");
                    });
                })
            }});

        requestSvc.careerBanner({size: 20})
            .then(function (res) {
                if (res.data.code === 0) {
                    var bannerListArray = res.data.data;
                    var newBannerListArray = [];
                    var bannerArr = [];
                    num=Math.ceil(20/bannerListArray.length);
                    for (i = 0; i < num; i++) {
                        newBannerListArray=bannerListArray.concat(bannerListArray);
                    }
                    for (i = 0; i < 5; i++) {
                        bannerArr[i] = newBannerListArray.slice(0, 4);
                        newBannerListArray.splice(0, 4)
                    }
                    vm.positionList = bannerArr;
                    // Activate Carousel
                    $("#process").carousel({interval: 3000});
                    $("#process").mouseover(function () {
                        $("#process").carousel("pause");
                    });
                    $("#process").mouseout(function () {
                        $("#process").carousel('cycle');
                    });
                    $(".left").click(function () {
                        $("#process").carousel("prev");
                    });
                    $(".right").click(function () {
                        $("#process").carousel("next");
                    });
                }
            })
    });