angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc, $location) {
    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'anthonyprograms',
                body: $scope.postBody
            }).success(function (post) {
                $scope.postBody = null
            })
        }
    }
    $scope.memberPosts = function (username) {
        var user = username
        console.log(user)
        $location.path('/users/' + username)
        PostsSvc.fetchSingleUser(username)
        .success(function (posts) {
            $scope.userPosts = posts
            console.log(posts)
        })
    }

    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
    })
    $scope.$on('ws:new_post', function (_, post) {
        $scope.$apply(function () {
            $scope.posts.unshift(post)
        })
    })
})
