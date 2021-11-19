(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("DistritoListController", DistritoListController);

        DistritoListController.$inject = ["DistritoService"];

    function DistritoListController(DistritoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            DistritoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            DistritoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();