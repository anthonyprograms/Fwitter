angular.module('app')
.controller('RegisterCtrl', function ($scope, UserSvc, $location) {
    $scope.register = function (username, password, retype) {
        if (retype === password) {
            UserSvc.register(username, password)
            .then(function (user) {
                UserSvc.login(username, password)
                .then(function (response) {
                    $scope.$emit('login', response.data)
                    $location.path('/')
                })
            })
        }
    }
})
