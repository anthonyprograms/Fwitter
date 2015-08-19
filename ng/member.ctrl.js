angular.module('app')
.controller('MemberCtrl', function ($scope, $http) {
    $scope.memberPosts = function (member) {
        console.log(member)
    }
})
