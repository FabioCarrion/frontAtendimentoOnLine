(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("DistritoFormController", DistritoFormController);

    DistritoFormController.$inject = [
        "DistritoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function DistritoFormController(
        DistritoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.distrito = {};
        vm.titulo = "Novo Distrito";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                DistritoService.findById($routeParams.id).success(function (data) {
                    vm.distrito = data;
                    vm.titulo = "Editando Distrito";
                });
            }
        }

        function salvar() {
            DistritoService.save(vm.distrito).success(function () {
                $location.path("/distrito");
                alert("Distrito cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();