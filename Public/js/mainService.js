angular.module("poke").service('mainService', function($http){

  this.getSinglePokemon = function(id) {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + id
    }).then(function(response) {
      return response.data
    })
  }

  this.getType = function(type) {
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/type/' + type
    }).then(function(response) {
      return response.data
    })
  }

});
