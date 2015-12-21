app.controller('ContactsController',
    function ContactsController($scope,dataService){
      var promiseObj=dataService.getContacts();
        promiseObj.then(function(value) { $scope.contacts=value; });
    }
)