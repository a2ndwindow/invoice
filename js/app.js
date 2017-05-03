var invoiceApp = angular.module('invoice', ['ui.router', 'angularBootstrapMaterial', 'ui.bootstrap']);

invoiceApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('landingPage', {
            url: '/landingPage',
            templateUrl: 'views/landing-page.html',
            controller: 'landingPageController'

        })
        

    $urlRouterProvider.otherwise('/landingPage');
})




