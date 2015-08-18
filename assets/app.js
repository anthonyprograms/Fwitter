angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(n,o){t.currentUser=o}),t.logout=function(){t.currentUser=null}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(t,n,o){t.login=function(e,r){n.login(e,r).then(function(n){t.$emit("login",n.data),o.path("/")})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,n){t.addPost=function(){t.postBody&&n.create({username:"anthonyprograms",body:t.postBody}).success(function(n){t.postBody=null})},n.fetch().success(function(n){t.posts=n}),t.$on("ws:new_post",function(n,o){t.$apply(function(){t.posts.unshift(o)})})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(n){return t.post("/api/posts",n)}}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc","$location",function(t,n,o){t.register=function(e,r,s){s===r&&n.register(e,r).then(function(s){n.login(e,r).then(function(n){t.$emit("login",n.data),o.path("/")})})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var n=this;n.getUser=function(){return t.get("/api/users")},n.login=function(o,e){return t.post("/api/sessions",{username:o,password:e}).then(function(o){return n.token=o.data,t.defaults.headers.common["X-Auth"]=o.data,n.getUser()})},n.register=function(o,e){return t.post("/api/users",{username:o,password:e}).then(function(){return n.login(o,e)})}}]),angular.module("app").service("WebSocketSvc",["$rootScope",function(t){function n(){return"https:"===window.location.protocol?"wss://"+window.location.host:"ws://"+window.location.host}var o;this.connect=function(){o=new WebSocket(n()),o.onmessage=function(n){var o=JSON.parse(n.data);t.$broadcast("ws:"+o.topic,o.data)}},this.send=function(t,n){var e=JSON.strigify({topic:t,data:n});o.send(e)}}]).run(["WebSocketSvc",function(t){t.connect()}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyIsIndlYnNvY2tldHMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwibG9nb3V0IiwiVXNlclN2YyIsIiRsb2NhdGlvbiIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsIiRlbWl0IiwiZGF0YSIsInBhdGgiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJzdWNjZXNzIiwicG9zdCIsImZldGNoIiwicG9zdHMiLCIkYXBwbHkiLCJ1bnNoaWZ0Iiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsInJlZ2lzdGVyIiwicmV0eXBlIiwiY29uZmlnIiwiJHJvdXRlUHJvdmlkZXIiLCJ3aGVuIiwidGVtcGxhdGVVcmwiLCJzdmMiLCJnZXRVc2VyIiwidmFsIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCIkcm9vdFNjb3BlIiwid2Vic29ja2V0SG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJvbm1lc3NhZ2UiLCJlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsIiRicm9hZGNhc3QiLCJ0b3BpYyIsInNlbmQiLCJqc29uIiwic3RyaWdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0EsWUNEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLG1CQUFBLFNBQUEsU0FBQUMsR0FD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ZSxLQUFBK0IsS0FBQSxTQUFBRCxFQUFBN0MsR0FDQSxHQUFBK0MsR0FBQUwsS0FBQU0sVUFBQUgsTUFBQUEsRUFBQTdDLEtBQUFBLEdBQ0FvQyxHQUFBVSxLQUFBQyxPQUVBRSxLQUFBLGVBQUEsU0FBQUMsR0FDQUEsRUFBQWIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgICAnbmdSb3V0ZSdcbl0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdBcHBsaWNhdGlvbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgJHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbiAoXywgdXNlcikge1xuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgfSlcbiAgICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSBudWxsXG4gICAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgICAgICAgVXNlclN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgICAgIH0pXG4gICAgfVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFBvc3RzU3ZjKSB7XG4gICAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcbiAgICAgICAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6ICdhbnRob255cHJvZ3JhbXMnLFxuICAgICAgICAgICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuICAgICAgICAgICAgfSkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXG4gICAgfSlcbiAgICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XG4gICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcbiAgICAgICAgfSlcbiAgICB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KVxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjLCAkbG9jYXRpb24pIHtcbiAgICAkc2NvcGUucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkLCByZXR5cGUpIHtcbiAgICAgICAgaWYgKHJldHlwZSA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBVc2VyU3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XG4gICAgJHJvdXRlUHJvdmlkZXJcbiAgICAud2hlbignLycsIHsgY29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsIHRlbXBsYXRlVXJsOiAncG9zdHMuaHRtbCcgfSlcbiAgICAud2hlbignL3JlZ2lzdGVyJywge2NvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnIH0pXG4gICAgLndoZW4oJy9sb2dpbicsIHtjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJyB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcbiAgICB2YXIgc3ZjID0gdGhpc1xuICAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcbiAgICB9XG4gICAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgc3ZjLnRva2VuID0gdmFsLmRhdGFcbiAgICAgICAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHZhbC5kYXRhXG4gICAgICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzdmMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgICAgICAgICB9KVxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuICAgIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbm5lY3Rpb25cbiAgICB0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSlcbiAgICAgICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSlcbiAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmlnaWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KVxuICAgICAgICBjb25uZWN0aW9uLnNlbmQoanNvbilcbiAgICB9XG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xuICAgIFdlYlNvY2tldFN2Yy5jb25uZWN0KClcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=