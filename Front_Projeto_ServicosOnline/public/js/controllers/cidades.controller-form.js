(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CidadeFormController", CidadeFormController);

    CidadeFormController.$inject = [
        "CidadeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CidadeFormController(
        CidadeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cidade = {};
        vm.titulo = "Novo Município";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                CidadeService.findById($routeParams.id).success(function (data) {
                    vm.cidade = data;
                    vm.titulo = "Editando Município";
                });
            }
        }

        function salvar() {
            CidadeService.save(vm.cidade).success(function () {
                $location.path("/cidade");
                message('sucesso','Município cadastrado com sucesso!');
            }).error(function (erro) {
                let msg = erro;
                if(msg.erro){
                    message('erro',msg.erro);
                }else{
                    message('erro',JSON.stringify(erro));
                }
                
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    function message(tipo, mensagem) {
        let text = "";
        if (tipo === 'info') {
            tipo = 'alert alert-info';
            text = 'Informação!';
        }
        if (tipo === 'sucesso') {
            tipo = 'alert alert-success';
            text = 'Sucesso!';
        }
        if (tipo === 'erro') {
            tipo = 'alert alert-danger';
            text = 'Erro!';
        }
        let message = '<div id="alerta" class="' + tipo + '" id="bsalert">';
        message += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ';
        message += '    <strong>' + text + '</strong> ' + mensagem + '  ';
        message += ' </div> ';
        $("#divPrincipal").append(message);

        setTimeout(function(){ 
            $("#alerta").alert('close');
         }, 3000);
    }

    }
})();