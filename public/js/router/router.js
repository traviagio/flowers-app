FlowersApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'FlowersController'
        }).when('/movie/:id', {
            templateUrl: 'tmpl/movie.html',
            controller: 'FlowerDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});