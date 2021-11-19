angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/pais", {
                templateUrl: "partials/pais.html",
            })
            .when("/pais/:id", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/pais/new", {
                templateUrl: "partials/pais-form.html",
            })
            .when("/distrito", {
                templateUrl: "partials/distrito.html",
            })
            .when("/distrito/:id", {
                templateUrl: "partials/distrito-form.html",
            })
            .when("/distrito/new", {
                templateUrl: "partials/distrito-form.html",
            })
            .when("/bairro", {
                templateUrl: "partials/bairro.html",
            })
            .when("/bairro/:id", {
                templateUrl: "partials/bairro-form.html",
            })
            .when("/bairro/new", {
                templateUrl: "partials/bairro-form.html",
            })
            .when("/logradouro", {
                templateUrl: "partials/logradouro.html",
            })
            .when("/logradouro/:id", {
                templateUrl: "partials/logradouro-form.html",
            })
            .when("/logradouro/new", {
                templateUrl: "partials/logradouro-form.html",
            })
            .when("/pessoa", {
                templateUrl: "partials/pessoa.html",
            })
            .when("/pessoa/:id", {
                templateUrl: "partials/pessoa-form.html",
            })
            .when("/pessoa/new", {
                templateUrl: "partials/pessoa-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);