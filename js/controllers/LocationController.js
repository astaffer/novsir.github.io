app.controller('LocationController',
    function LocationController($scope,dataService){
      var promiseObj=dataService.getLocation();
        promiseObj.then(function(value) { $scope.location=value; });
        var contObj =dataService.getContacts();
      contObj.then(function(value) { $scope.contacts=value; });
      
    }
)