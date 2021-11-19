(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("PessoaFormController", PessoaFormController);

    PessoaFormController.$inject = [
        "PessoaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function PessoaFormController(
        PessoaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.pessoa = {};
        vm.titulo = "Novo Contribuinte";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                PessoaService.findById($routeParams.id).success(function (data) {
                    vm.pessoa = data;
                    vm.titulo = "Editando Contribuinte";
                });
            }
        }

        function salvar() {
            PessoaService.save(vm.pessoa).success(function () {
                $location.path("/pessoa");
                alert("Contribuinte cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();