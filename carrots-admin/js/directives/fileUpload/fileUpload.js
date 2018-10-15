angular.module('myApp').directive('fileUpload', function (FileUploader, requestSvc) {
    return {
        restrict: 'EA',
        templateUrl: 'js/directives/fileUpload/fileUpload.html',
        replace: true,
        scope: {//创建了一个该指令的作用域
            imgUrl:'='
        },
        controller: function ($scope) {
            FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
                return true;//true表示能重复上传同一张图片
            };
            //创建一个FileUploader实例，必须要在controller中
            $scope.uploader = requestSvc.uploadImg(FileUploader);
        },
        link: function (scope) {
            scope.uploader.onSuccessItem = function (fileItem, response, status) {
                if (status === 200) {
                    scope.imgUrl = response.data.url;
                }
            };
            scope.deleteImg = function () {
                scope.imgUrl='';
            }
        }
    }
});