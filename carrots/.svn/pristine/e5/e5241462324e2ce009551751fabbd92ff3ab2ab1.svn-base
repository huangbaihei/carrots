angular.module('myApp')
//工资过滤器
    .factory('searchSpecies', function (commonUtil) {
        return {
            searchFn: function (single, multiple, params) {
                return function (index, beChosen) {
                    if (index === 0) {
                        multiple = commonUtil.choseUnlimited(single, multiple)
                    } else {
                        multiple = commonUtil.checkBox(single, multiple, index, beChosen);
                        //所有选项都不选的时候重置为不限
                        single[0].choose = single.every(function (item) {
                            return item.choose === false;
                        });
                    }
                    switch (single[1].name) {
                        case "北京":
                            params.city = multiple.length !== 0 ? multiple.join() : undefined;
                            break;
                        case "无需融资":
                            params.financing = multiple.length !== 0 ? multiple.join() : undefined;
                            break;
                        case "移动互联网":
                            params.industry = multiple.length !== 0 ? multiple.join() : undefined;
                            break;
                    }
                }
            }
        }
    });