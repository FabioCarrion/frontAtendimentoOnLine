(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("LogradouroFormController", LogradouroFormController);

    LogradouroFormController.$inject = [
        "LogradouroService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function LogradouroFormController(
        LogradouroService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.logradouro = {};
        vm.titulo = "Novo Logradouro";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                LogradouroService.findById($routeParams.id).success(function (data) {
                    vm.logradouro = data;
                    vm.titulo = "Editando Logradouro";
                });
            }
        }

        function salvar() {
            LogradouroService.save(vm.logradouro).success(function () {
                $location.path("/logradouro");
                alert("Logradouro cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();