angular.module('myApp').controller('companyDetailsCtrl',
    function (FileUploader, financing, industryList, requestSvc, $timeout, $state, $rootScope, commonUtil) {
        let vm = this;
        //多选框的常量
        vm.financing = financing;
        //将行业列表处理成数组便于多选插件使用
        vm.industryList = [];
        angular.forEach(industryList, function (val, key) {
            vm.industryList.push({num: key, name: val})
        });
        //构造请求数据格式
        vm.data = {company: {}, industryList: [], productList: [{}], tagList: []};
        //添加标签
        vm.addTag = function () {
            if (!vm.tag) {
                vm.tagTips = '标签内容为空';
            }
            else if (vm.data.tagList[0]) {
                let check = vm.data.tagList.some(function (item) {
                    return vm.tag === item.tag;
                });
                if (check) {
                    vm.tagTips = '标签内容重复'
                }
                else {
                    vm.data.tagList.push({tag: vm.tag});
                    vm.tag = '';
                }
            }
            else {
                vm.data.tagList.push({tag: vm.tag});
                vm.tag = '';
            }
            $timeout(function () {
                vm.tagTips = ''
            }, 3000);
        };
        //删除标签
        vm.deleteTag = function (index) {
            vm.data.tagList.splice(index, 1)
        };
        //保存
        vm.save = function () {
            //处理行业多选框的数据
            angular.forEach(vm.selectIndustry, function (item) {
                vm.data.industryList.push({industry: item.num});
            });
            //如果没选标签需要将标签数组去除，不然服务器会报错
            if (!vm.data.tagList[0]) {
                delete vm.data.tagList;
            }
            //新增页
            if (!$state.params.id) {
                requestSvc.addCompany(vm.data).then(
                    commonUtil.singleState1('新增', 'home.company'),
                    commonUtil.singleState2('新增'))
            }
            //编辑页
            else {
                requestSvc.editCompany($state.params.id, vm.data).then(
                    commonUtil.singleState1('修改', 'home.company'),
                    commonUtil.singleState2('修改'))
            }
        };
        //获取公司详情渲染编辑页
        if ($state.params.id) {
            requestSvc.getCompanyDetails($state.params.id).then(function (res) {
                if (res.data.code === 0) {
                    let data = res.data.data;
                    vm.data.company = data.company;
                    vm.data.company.approved = String(vm.data.company.approved);
                    vm.data.company.financing = String(vm.data.company.financing);
                    vm.data.productList = data.productList[0] ? data.productList : [{}];
                    vm.data.tagList = data.tagList[0] ? data.tagList : [];
                    angular.forEach(data.industryList, function (x) {
                        angular.forEach(vm.industryList, function (y) {
                            if (String(x.industry) === y.num) {
                                y.ticked = true;
                            }
                        })
                    })
                }
            })
        }
    });