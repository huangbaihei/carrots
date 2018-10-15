angular.module("myApp")
    .factory("commonUtil", function ($rootScope, $state) {
        return {
            //新增编辑删除等单状态操作的两个回调
            singleState1: function (operation, url) {
                return function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert(operation + '成功', function () {
                            url === $state.current ? $state.reload(url) : $state.go(url)
                        })
                    }
                    else {
                        $rootScope.alert(res.data.message + '，' + operation + '失败')
                    }
                }
            },
            singleState2: function (operation) {
                return function () {
                    $rootScope.alert('服务器没有反馈，' + operation + '失败')
                }
            },
            //上下架，解冻冻结等双状态操作的两个回调
            doubleState1: function (state, check, operation1, operation2, url) {
                return function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert(
                            state === check ? operation1 + '成功' : operation2 + '成功',
                            function () {
                                url === $state.current ? $state.reload(url) : $state.go(url)
                            })
                    }
                    else {
                        $rootScope.alert(res.data.message + '，' + (state === check ? operation1 + '失败' : operation2 + '失败'))
                    }
                }
            },
            doubleState2: function (state, check, operation1, operation2) {
                return function () {
                    $rootScope.alert('服务器没有反馈，' + (state === check ? operation1 + '失败' : operation2 + '失败'))
                }
            },
        }
    });