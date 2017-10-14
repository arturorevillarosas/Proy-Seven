function GamesController($scope)
  {
    $scope.games=[
         { nombre: "League of Legends", fecha: "12/08/2010", sitio: "http://es.dota2.com"},
         { nombre: "Dota 2", fecha: "10/05/2012", sitio: "http://lan.leagueoflegends.com"},
         { nombre: "Overwatch", fecha: "22/08/16", sitio: "https://playoverwatch.com/en-us"}
    ];
    $scope.Save=function()
    {
	$scope.games.push({nombre:$scope.nuevoGame.nombre, fecha:$scope.nuevoGame.fecha,sitio:$scope.nuevoGame.sitio})
    $scope.nuevoGame="";
    $scope.formVisibility=false;

    }
    $scope.formVisibility=false;
    $scope.ShowForm=function()
    {
    	$scope.formVisibility=true;
    
    }
 }
