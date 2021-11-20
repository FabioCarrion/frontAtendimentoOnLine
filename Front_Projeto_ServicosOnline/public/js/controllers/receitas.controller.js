(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ReceitaListController", ReceitaListController);

        ReceitaListController.$inject = ["ReceitaService"];

    function ReceitaListController(ReceitaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ReceitaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ReceitaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();