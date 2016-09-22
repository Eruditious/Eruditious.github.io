app.controller('mainCtrl',  function($scope, $http) {

  $scope.loadBlogPosts = function () {
   $http.get("https://www.blogger.com/feeds/8869642774266215191/posts/default?alt=json&max-results=10")
     .then(function(response) {
       console.log(response);
       $scope.blogdata = response;
     });
  }
$scope.saveRebates = function(rebates) {
  console.log(rebates);

};
  $scope.getSomeRebates = function () {
  	$.ajax({
  		type: "POST",
  		url: "https://www.rebatebus.com/api/getrebates",
  		data: {"uid": 95, "apikey": "5wwE4pRmR4f9lVLm"},
  		success: function(response, stat) {
  			saveRebates(response);
  		}, error: function(response, stat) {
  			console.log("error retrieving data from Rebate Bus");
  		}
  	});
  }
$scope.getSomeRebates();


});
