angular.module('myApp')
//公司行业
    .filter('industryList', function (industryList) {
        return function (id) {
            return industryList[id];
        }
    })
    //地区过滤器
    .filter('region', function (region) {
        return function (id) {
            let location = '';
            if (String(id).length === 2) {//省级
                angular.forEach(region, function (item, key) {
                    if (key === id) {
                        location = item.name;
                    }
                });

            }
            else if (String(id).slice(4) === '00') {//市级
                angular.forEach(region, function (item, key) {
                    if (String(key) === String(id).slice(0, 2)) {
                        angular.forEach(item.children, function (item, key) {
                            if (key === id) {
                                location = item.name;
                            }
                        })
                    }
                })
            }
            else {//县级
                angular.forEach(region, function (item, key) {
                    if (String(key) === String(id).slice(0, 2)) {
                        angular.forEach(item.children, function (item, key) {
                            if (String(key).slice(0, 4) === String(id).slice(0, 4)) {
                                angular.forEach(item.children, function (item, key) {
                                    if (key === id) {
                                        location = item.name;
                                    }
                                })
                            }
                        })
                    }
                })
            }
            return location;
        }
    })
    //融资规模过滤器
    .filter('financing', function (financing) {
        return function (id) {
            return financing[id];
        }
    })
    //认证状态过滤器
    .filter('approved', function (approved) {
        return function (id) {
            return approved[id];
        }
    })
    //操作认证状态过滤器
    .filter('operationApproved', function (operationApproved) {
        return function (id) {
            return operationApproved[id];
        }
    })
    //冻结状态过滤器
    .filter('freezed', function (freezed) {
        return function (id) {
            return freezed[id];
        }
    })
    //操作冻结状态过滤器
    .filter('operationFreezed', function (operationFreezed) {
        return function (id) {
            return operationFreezed[id];
        }
    })
    //文件大小单位转换
    .filter('KB', function () {
        return function (fileSize) {
            return (fileSize / 1024).toFixed(2) + 'KB';
        }
    })
    //薪资
    .filter('compensation', function (compensation) {
        return function (id) {
            return compensation[id];
        }
    })
    //学历要求
    .filter('education', function (education) {
        return function (id) {
            return education[id];
        }
    })
    //工作经验
    .filter('experience', function (experience) {
        return function (id) {
            return experience[id];
        }
    })
    //公司状态
    .filter('status', function (status) {
        return function (id) {
            return status[id];
        }
    })
    //操作公司状态
    .filter('operationStatus', function (operationStatus) {
        return function (id) {
            return operationStatus[id];
        }
    })
    //职位类别
    .filter('category', function (categoryData) {
        return function (id) {
            return categoryData[id - 1].name;
        }
    })
    //banner类型
    .filter('bannerTypes', function (bannerTypes) {
        return function (id) {
            return bannerTypes[id];
        }
    })
    //文章状态
    .filter('lineStatus', function (lineStatus) {
        return function (id) {
            return lineStatus[id];
        }
    })
    //操作文章状态
    .filter('operationLineStatus', function (operationLineStatus) {
        return function (id) {
            return operationLineStatus[id];
        }
    });
