angular.module('myApp')
    .factory("path", function () {
        return {
            /*登录模块*/
            //登录
            login_url: function () {
                return '/carrots-admin-ajax/a/login'
            },
            //退出
            loginOut_url: function () {
                return '/carrots-admin-ajax/a/logout'
            },

            /*信息管理*/

            //公司信息

            //获取公司列表
            getCompanyList_url: function () {
                return '/carrots-admin-ajax/a/company/search'
            },
            //认证或冻结
            approveOrFreeze_url: function () {
                return '/carrots-admin-ajax/a/u/company/status/'
            },
            //删除公司
            companyDelete_url: function (id) {
                return '/carrots-admin-ajax/a/u/company/' + id
            },

            //公司详情

            //上传图片
            uploadImg_url: function () {
                return "/carrots-admin-ajax/a/u/img/3"
            },
            //新增公司
            addCompany_url: function () {
                return "/carrots-admin-ajax/a/u/company"
            },
            //获取公司详情
            getCompanyDetails_url: function (id) {
                return '/carrots-admin-ajax/a/company/' + id;
            },
            //编辑公司
            editCompany_url: function (id) {
                return '/carrots-admin-ajax/a/u/company/' + id
            },


            //职位信息


            //获取职位列表
            getJobList_url: function () {
                return '/carrots-admin-ajax/a/profession/search'
            },
            //职位上下架
            putJobstatus_url: function () {
                return '/carrots-admin-ajax/a/u/profession/status'
            },
            // 删除职位
            jobDelete_url: function (id) {
                return '/carrots-admin-ajax/a/u/profession/' + id
            },

            //职位详情

            //获取公司标签
            getCompanyTags_url: function (id) {
                return '/carrots-admin-ajax/a/tags/' + id
            },
            //获取职位详情
            getJobDetails_url: function (id) {
                return '/carrots-admin-ajax/a/profession/' + id
            },
            //新增职位
            addJob_url: function () {
                return '/carrots-admin-ajax/a/u/profession/'
            },
            //编辑职位
            editJob_url: function (id) {
                return '/carrots-admin-ajax/a/u/profession/' + id
            },


            /*内容管理*/

            //文章信息

            //按条件获得article列表
            getArticleList_url: function () {
                return '/carrots-admin-ajax/a/article/search'
            },
            //修改article的上架/下架（status）
            changeArticleStatus_url: function (id, status) {
                return '/carrots-admin-ajax/a/u/article/status?id=' + id + '&status=' + status
            },
            //删除article
            deleteArticle_url: function (id) {
                return '/carrots-admin-ajax/a/u/article/' + id
            },


            //文章详情

            //获得单个article
            getOneArticle_url: function (id) {
                return '/carrots-admin-ajax/a/article/' + id
            },
            //新增article
            addArticle_url: function () {
                return '/carrots-admin-ajax/a/u/article'
            },
            //编辑article
            editArticle_url: function (id) {
                return '/carrots-admin-ajax/a/u/article/' + id
            },


            /*后台管理*/

            //模块管理

            //获取模块id
            getModuleIds_url: function () {
                return '/carrots-admin-ajax/a/u/module/'
            },
            //获取模块内容
            getMultiModule_url: function () {
                return '/carrots-admin-ajax/a/u/multi/module'
            },
            //删除模块
            deleteModule_url: function (id) {
                return '/carrots-admin-ajax/a/u/module/' + id
            },
            //新增模块
            addModule_url: function () {
                return '/carrots-admin-ajax/a/u/module'
            },
            //编辑模块
            editModule_url: function (id) {
                return '/carrots-admin-ajax/a/u/module/' + id
            },

            //用户管理


            //获取单个用户信息
            getOneAccount_url: function (id) {
                return '/carrots-admin-ajax/a/u/manager/' + id
            },
            //获取角色id的用户
            getRoleAccount_url: function (id) {
                return '/carrots-admin-ajax/a/u/role/' + id + '/manager'
            },
            //获取用户id
            getAccountIds_url: function () {
                return '/carrots-admin-ajax/a/u/manager/'
            },
            //获取部分用户信息
            getMultiAccount_url: function () {
                return '/carrots-admin-ajax/a/u/multi/manager'
            },
            //删除用户
            deleteAccount_url: function (id) {
                return '/carrots-admin-ajax/a/u/manager/' + id
            },
            //新增用户
            addAccount_url: function () {
                return '/carrots-admin-ajax/a/u/manager'
            },
            //编辑用户
            editAccount_url: function (id) {
                return '/carrots-admin-ajax/a/u/manager/' + id
            },

            //角色管理

            //获取角色id
            getRoleIds_url: function () {
                return '/carrots-admin-ajax/a/u/role/'
            },
            //获取角色信息
            getMultiRole_url: function () {
                return '/carrots-admin-ajax/a/u/multi/role'
            },
            //删除角色
            deleteRole_url: function (id) {
                return '/carrots-admin-ajax/a/u/role/' + id
            },
            //新增角色
            addRole_url: function () {
                return '/carrots-admin-ajax/a/u/role'
            },
            //获取单个角色信息
            getOneRole_url: function (id) {
                return '/carrots-admin-ajax/a/u/role/' + id
            },
            //编辑角色
            editRole_url: function (id) {
                return '/carrots-admin-ajax/a/u/role/' + id
            },


            //修改密码
            changePwd_url: function () {
                return '/carrots-admin-ajax/a/u/pwd'
            },


        }
    });