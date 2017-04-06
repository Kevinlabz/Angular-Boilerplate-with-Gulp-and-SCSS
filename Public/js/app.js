angular.module("poke", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })
           .state('pokemon', {
               templateUrl: '../views/pokemon.html',
               controller: 'pokemonCtrl',
               url: '/pokemon/:id'
           })
           .state('type', {
               templateUrl: '../views/types.html',
               controller: 'typeCtrl',
               url: '/type/:types'
           });
 });
