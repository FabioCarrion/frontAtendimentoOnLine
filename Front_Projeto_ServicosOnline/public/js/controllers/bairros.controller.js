(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("BairroListController", BairroListController);

        BairroListController.$inject = ["BairroService"];

    function BairroListController(BairroService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            BairroService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            BairroService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();