angular.module('myApp')
    .factory('commonUtil', function () {
        return {
            //刷新搜索栏保持高亮
            keepSelect: function (urlParams, urlArray, Constant, theArray) {
                theArray = [];
                if (urlParams) {
                    urlArray = urlParams.split(',');
                    Constant[0].choose = false;
                    angular.forEach(urlArray, function (theItem) {
                        angular.forEach(Constant, function (item) {
                            if (Number(theItem) === item.id) {
                                item.choose = true;
                                theArray.push(item.id);
                            }
                        })
                    })
                }
                return theArray;
            },
            //搜索栏多选参数，选择不限的时候，取消所有子项
            choseUnlimited: function (Constant, theArray) {
                angular.forEach(Constant, function (item) {
                    item.choose = false;
                });
                Constant[0].choose = true;
                theArray = [];
                return theArray;
            },
            // 搜索栏多选参数
            checkBox: function (Constant, theArray, Index, Choose) {
                theArray = [];
                Constant[0].choose = false;
                Constant[Index].choose = !Choose;
                angular.forEach(Constant, function (item) {
                    if (item.choose === true) {
                        theArray.push(item.id)
                    }
                });
                return theArray;
            },
            //搜索栏清除
            clearAll: function (Array) {
                angular.forEach(Array, function (item) {
                    item.choose = false;
                    Array[0].choose = true;
                })
            },
            //url参数清空
            clearUrl: function (params) {
                angular.forEach(params, function (val, key, object) {
                    object[key] = undefined;
                })
            },
            // 数据判断
            judgeStorage: function (judge, data) {
                let dataCopy = {}, select = {};
                angular.copy(data, dataCopy);
                if (!judge) {
                    select = dataCopy;
                }
                else {
                    select = JSON.parse(judge);
                }
                return select;
            },
            // 判断选中的数量
            selectedNum: function (data) {
                var i = 0;
                data.forEach(function (item) {
                    if (item.choose === true) {
                        i++;
                    }
                });
                return i;
            },
            // 判断需要展开详情的类目
            judgeShow: function (data) {
                for (var j = 0; j < 12; j++) {
                    if (data[j].choose === true) {
                        return j;
                    }
                }
            },
            // 标签多选
            checkbox: function (ind, arr) {
                if (ind === 0) {
                    arr.forEach(function (item) {
                        item.choose = false;
                        arr[0].choose = true
                    });
                } else {
                    arr[ind].choose = !arr[ind].choose;
                    arr[0].choose = arr.every(function (item) {
                        return item.choose === false
                    })
                }
            },
            //单选
            checkboxOne: function (ind, arr) {
                    arr.forEach(function (item) {
                        item.choose = false;
                        arr[ind].choose = true
                    });
            },
            //搜索单选
            radio: function (ind, arr) {
                arr[ind].choose = !arr[ind].choose;
                arr.forEach(function (item, index) {
                    if (index !== ind) {
                        item.choose = false
                    }
                    else if (arr.every(function (item) {
                        return item.choose === false
                    })) {
                        arr[0].choose = true;
                    }
                })
            },
            //数据转数组
            dataConvert: function (data) {
                //转换为字符串
                let dataObj = {};
                let dataName;
                for (dataName in data) {
                    dataObj[dataName] = data[dataName].filter(function (item) {
                        return item.choose === true
                    });
                    dataObj[dataName] = dataObj[dataName].map(function (item) {
                        return item.id
                    });
                    dataObj[dataName] = dataObj[dataName].toString()
                }
                return dataObj;
            }
        }
    });