angular.module("poke").controller('homeCtrl', function($scope, mainService) {

  $scope.pokemonList = [];

   $scope.getRandomPokemon = function() {
    $scope.pokemonList = [];
    for (var i = 0; i < 9; i++) {
      mainService.getSinglePokemon(Math.floor((Math.random() * 721) + 1)).then(function(response){
        $scope.pokemonList.push(response)
      })
    }
   }

   $scope.getRandomPokemon();
});
