app.controller('PricelistController',
    function PricelistController($scope,dataService){
      var promiseObj=dataService.getPricelist();
        promiseObj.then(function(value) { $scope.pricelist=value; });
    }
)