app.controller('ProductsController',
    function ProductsController($scope,dataService){
      var promiseObj=dataService.getProducts();
        promiseObj.then(function(value) { $scope.products=value; });
    }
)