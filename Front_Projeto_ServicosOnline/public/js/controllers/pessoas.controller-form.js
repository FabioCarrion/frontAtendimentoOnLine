(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("PessoaFormController", PessoaFormController);

    PessoaFormController.$inject = [
        "PessoaService",
        "$location",
        "$routeParams",
        "$timeout",
        "$scope",
        
    ];

    function PessoaFormController(
        PessoaService,
        $location,
        $routeParams,
        $timeout

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

        function getBase64(file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
            vm.pessoa.imagem = reader.result
                console.log(reader.result);
            };
            reader.onerror = function (error) {
              console.log('Error: ', error);
            };
         }  

        function salvar() {
            var files = document.getElementById('imagem').files;
                if (files.length > 0) {
                  getBase64(files[0]);
                };
                $timeout(function(){
                    PessoaService.save(vm.pessoa).success(function () {
                        $location.path("/pessoa");
                        message('sucesso', 'Contribuinte cadastrado com sucesso!');
                    }).error(function (erro) {
                        let msg = erro;
                        if(msg.erro){
                            message('erro',msg.erro);
                        }else{
                            message('erro',JSON.stringify(erro));
                        }
                    });
                },10)
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
