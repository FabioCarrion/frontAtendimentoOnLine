(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("CidadeListController", CidadeListController);

        CidadeListController.$inject = ["CidadeService"];

    function CidadeListController(CidadeService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            CidadeService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            CidadeService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();