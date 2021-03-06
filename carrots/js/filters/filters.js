angular.module('myApp')
//工资过滤器
    .filter('compensation', function (compensation) {
        return function (id) {
            return compensation[id];
        }
    })
    //行业过滤器
    .filter('industryList', function (industryList) {
        return function (id) {
            return industryList[id];
        }
    })
    //融资规模过滤器
    .filter('financing', function (financing) {
        return function (id) {
            return financing[id];
        }
    })
    //薪资水平
    .filter('compensationFilter', function (compensation) {
        return function (id) {
            return compensation[id];
        }
    })
    //学历
    .filter('educationFilter', function (educationType) {
        return function (id) {
            return educationType[id];
        }
    })
    //工作经验
    .filter('experienceFilter', function (experienceType) {
        return function (id) {
            return experienceType[id];
        }
    })
    //地区过滤器
    .filter('region', function (region) {
        return function (id) {
            var location = '';
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