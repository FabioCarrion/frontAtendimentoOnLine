(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("PaisListController", PaisListController);

        PaisListController.$inject = ["PaisService"];

    function PaisListController(PaisService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            PaisService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            PaisService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();