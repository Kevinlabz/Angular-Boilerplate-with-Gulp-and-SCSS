angular.module("poke").controller('pokemonCtrl', function($scope, mainService, $stateParams) {

  $scope.pokemon = {};

  $scope.getPokemon = function(id) {
   for (var i = 0; i < 1; i++) {
     mainService.getSinglePokemon(id).then(function(response){
        $scope.pokemon = response
      })
    }
  }

  $scope.getPokemon($stateParams.id);

});
