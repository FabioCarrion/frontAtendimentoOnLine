(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("PaisFormController", PaisFormController);

    PaisFormController.$inject = [
        "PaisService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function PaisFormController(
        PaisService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.pais = {};
        vm.titulo = "Novo Pais";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                PaisService.findById($routeParams.id).success(function (data) {
                    vm.pais = data;
                    vm.titulo = "Editando Pais";
                });
            }
        }

        function salvar() {
            PaisService.save(vm.pais).success(function () {
                $location.path("/pais");
                alert("País cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();