app.controller('ProductController',
    function ProductController($scope,dataService,$routeParams){
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) { $scope.detail=value.items[$routeParams.id]; });
    }
)