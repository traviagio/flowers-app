FlowersApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'FlowersController'
        }).otherwise({
            redirectTo: '/'
        });
});