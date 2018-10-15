angular.module('myApp').controller('jobDetailsCtrl',
    function (experience, education, compensation, categoryData, requestSvc, $state, $rootScope) {
        let vm = this;
        //下拉选框常量
        vm.experience = experience;
        vm.education = education;
        vm.compensation = compensation;
        vm.categoryData = categoryData;
        //构造请求数据格式
        vm.data = {profession: {}, tags: []};
        vm.data.profession.companyName = $state.params.companyName;
        vm.data.profession.companyId = $state.params.companyId;
        vm.id = $state.params.id;

        //获取公司标签渲染页面
        requestSvc.getCompanyTags($state.params.companyId).then(function (res) {
            if (res.data.code === 0) {
                //构造标签渲染数组
                vm.tagList = [];
                if (res.data.tags[0]) {
                    vm.tagList = res.data.tags;
                    angular.forEach(vm.tagList, function (x) {
                        x.select = false;
                    })
                }
                //编辑页渲染
                if (vm.id) {
                    requestSvc.getJobDetails(vm.id).then(function (res) {
                        if (res.data.code === 0) {
                            vm.data.profession = res.data.data;
                            angular.forEach(vm.data.profession, function (val, key, object) {
                                if (!isNaN(val)) {
                                    object[key] = val.toString();
                                }
                            });
                            angular.forEach(vm.tagList, function (x) {
                                angular.forEach(res.data.data.tags, function (y) {
                                    if (x.tag === y.tag) {
                                        x.select = true;
                                    }
                                })
                            })
                        }
                    })
                }
            }
        });

        //新增或编辑页的保存
        vm.save = function () {
            //抽出已选的标签数据
            if (vm.tagList[0]) {
                angular.forEach(vm.tagList, function (x) {
                    if (x.select) {
                        vm.data.tags.push({tag: x.tag})
                    }
                });
            }
            //新增页
            if (!vm.id) {
                requestSvc.addJob(vm.data).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('新增成功', function () {
                            vm.goBack();
                        })
                    }
                    else {
                        $rootScope.alert(res.data.message + '，新增失败')
                    }
                }, function () {
                    $rootScope.alert('服务器没有反馈，新增失败')
                })
            }
            //编辑页
            else {
                //编辑页渲染时，vm.data.profession取多了一个tags，发送数据不符合格式
                delete vm.data.profession.tags;
                requestSvc.editJob(vm.data, vm.id).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('修改成功', function () {
                            vm.goBack();
                        })
                    }
                    else {
                        $rootScope.alert(res.data.message + '，修改失败')
                    }
                }, function () {
                    $rootScope.alert('服务器没有反馈，修改失败')
                })
            }
        };
        //回退上个页面
        vm.goBack = function () {
            $state.go('home.job', vm.id && $state.params.check ? '' : {
                companyId: $state.params.companyId,
                companyName: $state.params.companyName
            })
        }
    });