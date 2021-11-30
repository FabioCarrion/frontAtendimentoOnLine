(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.paisesPage = paisesPage;
        vm.distritosPage = distritosPage;
        vm.bairrosPage = bairrosPage;
        vm.logradourosPage = logradourosPage;
        vm.pessoasPage = pessoasPage;
        vm.receitasPage = receitasPage;
        vm.isAdministrador = isAdministrador;

        activate();

        function activate() {
        }

        function isAdministrador (){
            return $window.localStorage.administrador;
        };

        function cidadesPage() {
            $location.path("/cidade");
        }

        function estadosPage() {
            $location.path("/estado");
        }

        function paisesPage() {
            $location.path("/pais");
        }

        function distritosPage() {
            $location.path("/distrito");
        }

        function bairrosPage() {
            $location.path("/bairro");
        }

        function logradourosPage() {
            $location.path("/logradouro");
        }

        function pessoasPage() {
            $location.path("/pessoa");
        }

        function receitasPage() {
            $location.path("/receita");
        }
    }
})();