angular.module('MyApp')
    .controller('LoginCtrl', function($scope, $rootScope, $location, $window, $auth) {
    
        $scope.login = function() {

            if($scope.user.email==="admin@admin.com" && $scope.user.password ==="admin"){
                $window.localStorage.administrador = true;
            }else{
                $window.localStorage.administrador = false;
                delete $window.localStorage.administrador;
            }

            $location.path('/home');
            $window.localStorage.autenticado = true;
        };


    });
 