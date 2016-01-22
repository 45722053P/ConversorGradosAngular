
app.controller('Controlador',function($scope){
    $scope.cel;
    $scope.far;

    $scope.resultado1;
    $scope.resultado2;

    $scope.aFar = function(){
      $scope.resultado1=($scope.cel*1.8)+32;
    };

    $scope.aCel = function () {
        $scope.resultado2=($scope.far-32)/1.8;

    };
});