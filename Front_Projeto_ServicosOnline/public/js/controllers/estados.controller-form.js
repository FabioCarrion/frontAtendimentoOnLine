(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EstadoFormController", EstadoFormController);

    EstadoFormController.$inject = [
        "EstadoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EstadoFormController(
        EstadoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.estado = {};
        vm.titulo = "Novo Estado";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                EstadoService.findById($routeParams.id).success(function (data) {
                    vm.estado = data;
                    vm.titulo = "Editando Estado";
                });
            }
        }

        function salvar() {
            EstadoService.save(vm.estado).success(function () {
                $location.path("/estado");
                alert("Estado cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();