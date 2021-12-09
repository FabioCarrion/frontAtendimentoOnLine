(function() {
    'use strict';

    angular
        .module('MyApp')
        .factory('LogradouroService', LogradouroService);

    LogradouroService.$inject = ['$http', '$window', '$rootScope'];

    function LogradouroService($http, $window, $rootScope) {
        var service = {
            find: find,
            findById: findById,
            save: save,
            remove: remove
        };

        var URL = 'https://servicoonline.herokuapp.com/api/logradouros';

        return service;

        


        function find(query) {
            return $http.get(URL, {
                params: {
                    filter: JSON.stringify(query)
                }
            });
        }

        function findById(id) {
            return $http.get(URL + '/' + id);
        }

        function save(record) {

            if (record.id) {
                return $http.put(URL + '/' + record.id, record);
            } else {
                return $http.post(URL, record);
            }
        }

        function remove(id) {
            return $http.delete(URL + '/' + id);
        }
    }
})();