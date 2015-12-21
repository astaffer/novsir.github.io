app.controller('ActionsController',
    function ActionsController($scope,dataService){
      var promiseObj=dataService.getActions();
        promiseObj.then(function(value) { $scope.actions=value; });
    }
)