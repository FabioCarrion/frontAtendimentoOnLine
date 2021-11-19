(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("BairroFormController", BairroFormController);

    BairroFormController.$inject = [
        "BairroService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function BairroFormController(
        BairroService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.bairro = {};
        vm.titulo = "Novo Bairro";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                BairroService.findById($routeParams.id).success(function (data) {
                    vm.bairro = data;
                    vm.titulo = "Editando Bairro";
                });
            }
        }

        function salvar() {
            BairroService.save(vm.bairro).success(function () {
                $location.path("/bairro");
                alert("Bairro cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();