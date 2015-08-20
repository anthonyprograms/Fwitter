angular.module('app')
.service('PostsSvc', function ($http) {
    this.fetch = function () {
        return $http.get('/api/posts')
    }
    this.create = function (post) {
        return $http.post('/api/posts', post)
    }
    this.fetchSingleUser = function (username) {
        return $http.get('/api/posts/user', username)
        console.log(username)
    }
})
