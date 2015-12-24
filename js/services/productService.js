app.factory('productService', function($http, $q){
    return{
        getItems: function($param){
            var deferred = $q.defer();
            var $url = '/js/json/products/'+$param+'.json'
            $http({method: 'GET', url: $url}).
             success(function(data, status, headers, config) {
                deferred.resolve(data.products);
            }).
            error(function(data, status, headers, config) {
                deferred.reject(status);
            });
             
            return deferred.promise;
        }
    }
})