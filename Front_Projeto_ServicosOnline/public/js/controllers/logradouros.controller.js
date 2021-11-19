(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("LogradouroListController", LogradouroListController);

        LogradouroListController.$inject = ["LogradouroService"];

    function LogradouroListController(LogradouroService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            LogradouroService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            LogradouroService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();