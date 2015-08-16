angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope",function(t){t.$on("login",function(n,o){t.currentUser=o})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,n){t.login=function(o,e){n.login(o,e).then(function(n){t.$emit("login",n.data)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,n){t.addPost=function(){t.postBody&&n.create({username:"anthonyprograms",body:t.postBody}).success(function(n){t.posts.unshift(n),t.postBody=null})},n.fetch().success(function(n){t.posts=n})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(n){return t.post("/api/posts",n)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var n=this;n.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},n.login=function(o,e){return t.post("/api/sessions",{username:o,password:e}).then(function(t){return n.token=t.data,n.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiJG9uIiwiXyIsInVzZXIiLCJjdXJyZW50VXNlciIsIlVzZXJTdmMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCIkZW1pdCIsImRhdGEiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJzdWNjZXNzIiwicG9zdCIsInBvc3RzIiwidW5zaGlmdCIsImZldGNoIiwic2VydmljZSIsIiRodHRwIiwidGhpcyIsImdldCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsImhlYWRlcnMiLCJYLUF1dGgiLCJ0b2tlbiIsInZhbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQUEsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxJQUFBLFFBQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUksWUFBQUQsT0NIQU4sUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxVQUFBLFNBQUFDLEVBQUFLLEdBQ0FMLEVBQUFNLE1BQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUMsTUFBQUMsRUFBQUMsR0FDQUMsS0FBQSxTQUFBQyxHQUNBVixFQUFBVyxNQUFBLFFBQUFELEVBQUFFLFlDTEFmLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBYSxHQUNBYixFQUFBYyxRQUFBLFdBQ0FkLEVBQUFlLFVBQ0FGLEVBQUFHLFFBQ0FULFNBQUEsa0JBQ0FVLEtBQUFqQixFQUFBZSxXQUNBRyxRQUFBLFNBQUFDLEdBQ0FuQixFQUFBb0IsTUFBQUMsUUFBQUYsR0FDQW5CLEVBQUFlLFNBQUEsUUFLQUYsRUFBQVMsUUFBQUosUUFBQSxTQUFBRSxHQUNBcEIsRUFBQW9CLE1BQUFBLE9DZkF2QixRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBSCxNQUFBLFdBQ0EsTUFBQUUsR0FBQUUsSUFBQSxlQUVBRCxLQUFBVCxPQUFBLFNBQUFHLEdBQ0EsTUFBQUssR0FBQUwsS0FBQSxhQUFBQSxPQ05BdEIsUUFBQUMsT0FBQSxPQUNBNkIsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQUE5QixXQUFBLFlBQUErQixZQUFBLGVBQ0FELEtBQUEsYUFBQTlCLFdBQUEsZUFBQStCLFlBQUEsa0JBQ0FELEtBQUEsVUFBQTlCLFdBQUEsWUFBQStCLFlBQUEsa0JDTEFqQyxRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLFdBQUEsUUFBQSxTQUFBQyxHQUNBLEdBQUFPLEdBQUFOLElBQ0FNLEdBQUFDLFFBQUEsV0FDQSxNQUFBUixHQUFBRSxJQUFBLGNBQ0FPLFNBQUFDLFNBQUFULEtBQUFVLFVBR0FKLEVBQUF6QixNQUFBLFNBQUFDLEVBQUFDLEdBQ0EsTUFBQWdCLEdBQUFMLEtBQUEsaUJBQ0FaLFNBQUFBLEVBQUFDLFNBQUFBLElBQ0FDLEtBQUEsU0FBQTJCLEdBRUEsTUFEQUwsR0FBQUksTUFBQUMsRUFBQXhCLEtBQ0FtQixFQUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAgICduZ1JvdXRlJ1xuXSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAkc2NvcGUuJG9uKCdsb2dpbicsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcbiAgICB9KVxufSlcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgIH1cbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuICAgICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnYW50aG9ueXByb2dyYW1zJyxcbiAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXG4gICAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICAgIH1cbiAgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnIH0pXG4gICAgLndoZW4oJy9yZWdpc3RlcicsIHtjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJywgdGVtcGxhdGVVcmw6ICdyZWdpc3Rlci5odG1sJyB9KVxuICAgIC53aGVuKCcvbG9naW4nLCB7Y29udHJvbGxlcjogJ0xvZ2luQ3RybCcsIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCcgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XG4gICAgdmFyIHN2YyA9IHRoaXNcbiAgICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS91c2VycycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ1gtQXV0aCc6IHRoaXMudG9rZW4gfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBzdmMudG9rZW4gPSB2YWwuZGF0YVxuICAgICAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcbiAgICAgICAgfSlcbiAgICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9