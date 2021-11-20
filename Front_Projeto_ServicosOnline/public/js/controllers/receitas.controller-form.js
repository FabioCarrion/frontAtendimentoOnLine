(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ReceitaFormController", ReceitaFormController);

    ReceitaFormController.$inject = [
        "ReceitaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ReceitaFormController(
        ReceitaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.Receita = {};
        vm.titulo = "Nova Receita";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                ReceitaService.findById($routeParams.id).success(function (data) {
                    vm.receita = data;
                    vm.titulo = "Editando Receita";
                });
            }
        }

        function salvar() {
            ReceitaService.save(vm.receita).success(function () {
                $location.path("/receita");
                alert("Receita cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();