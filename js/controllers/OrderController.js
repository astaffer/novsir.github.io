app.controller('OrderController',
    function OrderController($scope,dataService){
      var promiseObj=dataService.getOrder();
        promiseObj.then(function(value) { $scope.order=value; });
        var contObj =dataService.getContacts();
      contObj.then(function(value) { $scope.contacts=value; });
    }
)