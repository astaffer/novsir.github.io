app.factory('dataService', function($http, $q){
    return{
        getProducts: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\products.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.products);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        },
        getAbout: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\about.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.about);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        },
        getActions: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\actions.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.actions);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
        ,
        getOrder: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\order.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.order);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
        ,
        getLocation: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\location.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.location);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
        ,
        getPricelist: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\pricelist.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.pricelist);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        } ,
        getContacts: function(){
            var deferred = $q.defer();
            $http({method: 'GET', url: '\js\\json\\contacts.json'}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.contacts);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
    }
})