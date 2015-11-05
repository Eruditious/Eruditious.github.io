app.controller('mainCtrl',  function($scope, $http) {

  $scope.loadBlogPosts = function () {
   $http.get("https://www.blogger.com/feeds/8869642774266215191/posts/default?alt=json&max-results=10")
     .then(function(response) {
       console.log(response);
       $scope.blogdata = response;
     });
  }

    
  

});
