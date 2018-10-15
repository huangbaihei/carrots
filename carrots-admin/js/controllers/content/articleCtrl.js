angular.module('myApp').controller('articleCtrl',
    function (bannerTypes, lineStatus, requestSvc, $state, $rootScope, commonUtil) {
        let vm = this;
        //搜索多选框常量
        vm.bannerTypes = bannerTypes;
        vm.lineStatus = lineStatus;
        //获取文章列表
        requestSvc.getArticlelist($state.params).then(function (res) {
            if (res.data.code === 0) {
                let data = res.data.data;
                vm.articleList = data.articleList;
                vm.total = data.total;
                vm.params = $state.params;
                vm.params.size = data.size;
                vm.params.page = $state.params.page || 1;
                //如果url中的参数不是undefined则先将url中的字符串时间戳变为数字格式，然后转化为Date对象，赋值给HTML中绑定的变量
                vm.params.startAt = !$state.params.startAt ? undefined : new Date(Number($state.params.startAt));
                vm.params.endAt = !$state.params.endAt ? undefined : new Date(Number($state.params.endAt) - 86399999);
            }
        });
        //搜索
        vm.search = function () {
            vm.params.startAt = isNaN(Date.parse(vm.params.startAt)) ? undefined : Date.parse(vm.params.startAt);//转换为数字时间戳
            vm.params.endAt = isNaN(Date.parse(vm.params.endAt)) ? undefined : Date.parse(vm.params.endAt) + 86399999;//转换为数字时间戳
            $state.go($state.current, vm.params, {reload: true})
        };
        //清空
        vm.clear = function () {
            angular.forEach(vm.params, function (val, key, object) {
                object[key] = undefined;
            });
            $state.go($state.current, vm.params, {reload: true})
        };
        //删除
        vm.delete = function (id) {
            $rootScope.resultConfirm('删除后该Article图将直接下架并在本地删除', '你确定要执行删除操作吗？', function () {
                    requestSvc.deleteArticle(id).then(
                        commonUtil.singleState1('删除', $state.current),
                        commonUtil.singleState2('删除'))
                }
            )
        };
        //上下线
        vm.changeStatus = function (id, status) {
            $rootScope.resultConfirm(
                status === 1 ? '上线后该图片将在轮播banner中展示' : '下线后该图片将不展示在轮播banner中',
                status === 1 ? '是否执行上线操作？' : '是否执行下线操作？',
                function () {
                    requestSvc.changeArticleStatus(id, status === 1 ? 2 : 1).then(
                        commonUtil.doubleState1(status, 1, '上线', '下线', $state.current),
                        commonUtil.doubleState2(status, 1, '上线', '下线'))
                })
        };
        //取出此时的新增编辑删除权限
        vm.operationPower = JSON.parse(sessionStorage.getItem('operationPower'));
    });