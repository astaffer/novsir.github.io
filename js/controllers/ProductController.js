app.controller('ProductController',
    function ProductController($scope,dataService,productService,$routeParams){
    
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) {
         $scope.detail =value.items[$routeParams.id];
          var nav = $scope.detail.navigate;
          var promObj=productService.getItems(nav);
          promObj.then(function(value) { $scope.items=value; });
          });
 	 
    
    }
)