angular.module("poke").controller('typeCtrl', function($scope, mainService, $stateParams) {

  $scope.type = {};

  $scope.getType = function(type) {
   for (var i = 0; i < 1; i++) {
     mainService.getType(type).then(function(response){
        $scope.type = response
      })
    }
  }

  $scope.getType($stateParams.types);

});
