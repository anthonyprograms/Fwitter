angular.module('app')
.controller('LogoutCtrl', function ($scope) {
    $scope.logout = function () {
        console.log('logout')
        $scope.currentUser = null
    }
})
