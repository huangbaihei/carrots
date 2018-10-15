angular.module('myApp')
    .factory('requestSvc', ['$http', 'path', function ($http, path) {
        return {
            /*登录模块*/
            //登录
            login: function (data) {
                return $http.post(path.login_url(), data)
            },
            //退出
            loginOut: function () {
                return $http.post(path.loginOut_url())
            },

            /*信息管理*/

            //公司信息

            //获取公司列表
            getCompanyList: function (params) {
                return $http.get(path.getCompanyList_url(), {params: params})
            },
            //认证或冻结
            approveOrFreeze: function (data) {
                return $http.put(path.approveOrFreeze_url(), data)
            },
            //删除公司
            companyDelete: function (id) {
                return $http.delete(path.companyDelete_url(id))
            },

            //公司详情

            //上传图片
            uploadImg: function (FileUploader, alias) {
                let param = {url: path.uploadImg_url()};
                if (alias) {
                    angular.extend(param, {alias: alias});
                }
                return new FileUploader(param);
            },
            //新增公司
            addCompany: function (data) {
                return $http({
                    url: path.addCompany_url(),
                    method: "post",
                    headers: {'Content-Type': 'Application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                });
            },
            //获取公司详情
            getCompanyDetails: function (id) {
                return $http.get(path.getCompanyDetails_url(id))
            },
            //编辑公司
            editCompany: function (id, data) {
                return $http({
                    url: path.editCompany_url(id),
                    method: "put",
                    headers: {'Content-Type': 'Application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                });
            },

            //职位信息

            //获取职位列表
            getJobList: function (params) {
                return $http.get(path.getJobList_url(), {params: params})
            },
            //职位上下架
            putJobstatus: function (data) {
                return $http.put(path.putJobstatus_url(), data)
            },
            // 删除职位
            jobDelete: function (id) {
                return $http.delete(path.jobDelete_url(id))
            },

            //职位详情

            //获取公司标签
            getCompanyTags: function (id) {
                return $http.get(path.getCompanyTags_url(id))
            },
            //获取职位详情
            getJobDetails: function (id) {
                return $http.get(path.getJobDetails_url(id))
            },
            //新增职位
            addJob: function (data) {
                return $http({
                    url: path.addJob_url(),
                    method: "post",
                    headers: {'Content-Type': 'Application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                });
            },
            //编辑职位
            editJob: function (data, id) {
                return $http({
                    url: path.editJob_url(id),
                    method: "put",
                    headers: {'Content-Type': 'Application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                });
            },

            /*内容管理*/

            //文章信息

            //按条件获得article列表
            getArticlelist: function (params) {
                return $http.get(path.getArticleList_url(), {params: params})
            },
            //修改article的上架/下架（status）
            changeArticleStatus: function (id, status) {
                return $http.put(path.changeArticleStatus_url(id, status))
            },
            //删除article
            deleteArticle: function (id) {
                return $http.delete(path.deleteArticle_url(id))
            },

            //文章详情

            //获得单个article
            getOneArticle: function (id) {
                return $http.get(path.getOneArticle_url(id))
            },
            //新增article
            addArticle: function (data) {
                return $http.post(path.addArticle_url(), data)
            },
            //编辑article
            editArticle: function (id, data) {
                return $http.put(path.editArticle_url(id), data)
            },


            /*后台管理*/

            //模块管理

            //获取模块id
            getModuleIds: function (params) {
                return $http.get(path.getModuleIds_url(), {params: params})
            },
            //获取模块内容
            getMultiModule: function (params) {
                return $http.get(path.getMultiModule_url(), {params: params})
            },
            //删除模块
            deleteModule: function (id) {
                return $http.delete(path.deleteModule_url(id))
            },
            //新增模块
            addModule: function (data) {
                return $http.post(path.addModule_url(), data)
            },
            //编辑模块
            editModule: function (params, id) {
                return $http.put(path.editModule_url(id), params)
            },

            //用户管理

            //根据用户id获取单个用户信息
            getOneAccount: function (id) {
                return $http.get(path.getOneAccount_url(id))
            },
            //根据角色id获取用户
            getRoleAccount: function (id) {
                return $http.get(path.getRoleAccount_url(id))
            },

            //获取用户id
            getAccountIds: function (params) {
                return $http.get(path.getAccountIds_url(), {params: params})
            },
            //获取部分用户信息
            getMultiAccount: function (params) {
                return $http.get(path.getMultiAccount_url(), {params: params})
            },
            //删除用户
            deleteAccount: function (id) {
                return $http.delete(path.deleteAccount_url(id))
            },
            //新增用户
            addAccount: function (data) {
                return $http.post(path.addAccount_url(), data)
            },
            //编辑用户
            editAccount: function (data, id) {
                return $http.put(path.editAccount_url(id), data)
            },

            //角色管理

            //获取角色id
            getRoleIds: function (params) {
                return $http.get(path.getRoleIds_url(), {params: params})
            },
            //获取角色信息
            getMultiRole: function (params) {
                return $http.get(path.getMultiRole_url(), {params: params})
            },
            //删除角色
            deleteRole: function (id) {
                return $http.delete(path.deleteRole_url(id))
            },
            //新增角色
            addRole: function (data) {
                return $http({
                    method: 'post',
                    url: path.addRole_url(),
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                })
            },
            //获取单个角色信息
            getOneRole: function (id) {
                return $http.get(path.getOneRole_url(id))
            },
            //编辑角色
            editRole: function (data, id) {
                return $http({
                    method: 'put',
                    url: path.editRole_url(id),
                    headers: {'Content-Type': 'application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data) {
                        return data;
                    }
                })
            },

            //修改密码
            changePwd: function (data) {
                return $http.put(path.changePwd_url(), data)
            },
        }
    }]);