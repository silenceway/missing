'use strict';

var missingApp = angular.module('missingApp');

missingApp.controller('MainCtrl', function ($scope, $location) {
	
	$scope.info='Datos de la última vez que se supo de la persona';
	$scope.isActive = function(route){
		return route === $location.path();
	};
});

missingApp.controller('MissingCtrl', function ($scope) {
	$scope.datos = [
	{
		'picture':'example.jpg',
		'name':'Carlos',
		'id':'123123123',
		'status':'Desaparecido',
		'age':'18 años',
		'city':'Maracaibo',
		'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde, rem, autem, nobis numquam illum sapiente adipisci consectetur repudiandae omnis dolorum incidunt ipsa pariatur tempora ducimus mollitia facere rerum! Aspernatur.',
	},
	{
		'picture':'example.jpg',
		'name':'Carlos',
		'id':'123123123',
		'status':'Desaparecido',
		'age':'18 años',
		'city':'Maracaibo',
		'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde, rem, autem, nobis numquam illum sapiente adipisci consectetur repudiandae omnis dolorum incidunt ipsa pariatur tempora ducimus mollitia facere rerum! Aspernatur.',
	},
	{
		'picture':'example.jpg',
		'name':'Carlos',
		'id':'123123123',
		'status':'Desaparecido',
		'age':'18 años',
		'city':'Maracaibo',
		'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, unde, rem, autem, nobis numquam illum sapiente adipisci consectetur repudiandae omnis dolorum incidunt ipsa pariatur tempora ducimus mollitia facere rerum! Aspernatur.',
	}
	];
});

missingApp.controller('AddCtrl', ['$scope', function ($scope) {
	$scope.newPicture='';
	$scope.newName='';
	$scope.newId='';
	$scope.newStatus=[
		{stat:'Desaparecido'},
		{stat:'Encontrado'},
		{stat:'Fallecido'},
		{stat:'Detenido'}
	];
	$scope.newAge='';
	$scope.newCity='';
	$scope.newInfo='';
}]);

missingApp.controller('LoginCtrl', function ($scope) {
	$scope.holder='';
});