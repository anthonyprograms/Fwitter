describe('posts.svc', function ($http) {
    beforeEach(module('app'))
    var PostsSvc, $httpBackend

    beforeEach(inject(function (_PostsSvc_, _$httpBackend_) {
        PostsSvc = _PostsSvc_
        $httpBackend = _$httpBackend_
    }))

    afterEach(function () {
        $httpBackend.flush()
    })

    describe('#fetch', function () {
        beforeEach(function () {
            $httpBackend.expect('GET', '/api/posts')
            .respond([
                {username: 'anthony', body: 'first post'},
                {username: 'anthony', body: 'second post'}
            ])
        })

        it('gets 2 posts', function () {
            PostsSvc.fetch().success(function (posts) {
                expect(posts).to.have.length(2)
            })
        })
    })
})

describe('posts.ctrl', function () {
    beforeEach(module('app'))
    var $scope

    var mockPostsSvc = {}
    beforeEach(inject(function ($q) {
        mockPostsSvc.fetch = function () {
            var deferred = $q.defer()
            deferred.resolve([
                {username: 'anthony', body: 'first post'},
                {username: 'anthony', body: 'second post'}
            ])
            return deferred.promise
        }
    }))

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new()
        $controller('PostsCtrl', {
            $scope: $scope,
            PostsSvc: mockPostsSvc
        })
    }))

    it('loads posts from the service', function () {
        $scope.$digest()
        expect($scope.posts).to.have.length(2)
    })
})
