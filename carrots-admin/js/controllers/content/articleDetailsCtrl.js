angular.module('myApp').controller('articleDetailsCtrl',
    function (FileUploader, $state, $rootScope, bannerTypes, industryList, statusBtn, requestSvc, commonUtil) {
        let vm = this;
        //下拉选框常量
        vm.bannerTypes = bannerTypes;
        vm.industryList = industryList;
        //按钮状态常量
        vm.statusBtn = statusBtn;
        //编辑页渲染
        if ($state.params.id) {
            vm.detailsTitle = '编辑Article';
            requestSvc.getOneArticle($state.params.id).then(function (res) {
                if (res.data.code === 0) {
                    vm.data = res.data.data.article;
                    vm.data.type = String(vm.data.type);
                    vm.data.industry = String(vm.data.industry);
                }
            })
        }
        else {
            vm.detailsTitle = '新增Article';
        }
        //上线或草稿
        vm.submitChange = function (btnKey) {
            //新增页
            if (!$state.params.id) {
                vm.data.status = btnKey === '0' ? 2 : 1;//根据按钮类型改状态
                requestSvc.addArticle(vm.data).then(
                    commonUtil.doubleState1(btnKey, '0', '上线', '存稿', 'home.article'),
                    commonUtil.doubleState2(btnKey, '0', '上线', '存稿'))
            }
            //编辑页
            else {
                vm.data.status = btnKey === '0' ? 2 : 1;//根据按钮类型改状态
                vm.data.createAt = Number(new Date());//获取当前时间并转为时间戳
                requestSvc.editArticle($state.params.id, vm.data).then(
                    commonUtil.doubleState1(btnKey, '0', '上线', '存稿', 'home.article'),
                    commonUtil.doubleState2(btnKey, '0', '上线', '存稿'))
            }
        };
    });