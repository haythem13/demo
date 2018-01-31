angular.module('personneApp.controllers', [])

	.controller('PersonneCtrl', function($scope, $location, PersonnesService){

		$scope.getPersonnes=function(){

			console.log("Controller: get all persons");

			PersonnesService.getPersonnes()
			    .then(
			        function (result) {
			            // promise was fullfilled (regardless of outcome)
			            // checks for information will be peformed here
			            
			        	$scope.personnes = result;
			        	$scope.displayMode = "list";

			        	console.log("$scope.personnes :" + JSON.stringify($scope.personnes, null, ' '));
			        },
			        function (error) {
			            // handle errors here
			            console.log(error.statusText);
			        }
			    );

		};

		
		$scope.getPersonne=function(id){

			console.log("Controller: get person by id: "+id);

			$scope.displayMode = "edit";

			PersonnesService.getPersonne(id)
		    .then(
		        function (result) {
		            // promise was fullfilled (regardless of outcome)
		            // checks for information will be peformed here
		           
		        	$scope.personne = result;
		        	$scope.personCourant = result;

		        	console.log("$scope.personne :" + JSON.stringify($scope.personne, null, ' '));

		        	//$location.path("/getById:"+id);
    				//$scope.$apply();
		        },
		        function (error) {
		            // handle errors here
		            console.log(error.statusText);
		        }
		    );
		};

		$scope.deletePerson=function(id){

			console.log("Controller: delete person id: "+id);

			PersonnesService.deletePerson(id)
		    .then(
		        function (result) {
		            // promise was fullfilled (regardless of outcome)
		            // checks for information will be peformed here
		        	$scope.personne = result;
		        	$scope.getPersonnes();
		        	$scope.cancel();
		        },
		        function (error) {
		            // handle errors here
		            console.log(error.statusText);
		        }
		    );
		};

		$scope.createPerson=function(projet){

			console.log("$scope.personne to create: " + JSON.stringify(projet, null, ' '));

			PersonnesService.createPerson(projet)
				.then(function(newPersonId) {

					$scope.personCourant = {};
					$scope.getPersonnes();
				}, function(error) {
					console.log(error.statusText);
				});
		};

		$scope.updatePerson=function(projet){

			console.log("$scope.personne to update: " + JSON.stringify(projet, null, ' '));

			PersonnesService.updatePerson(projet)
				.then(function(newPersonId) {

					$scope.personCourant = {};
					$scope.displayMode = "list";
					$scope.getPersonnes();
				}, function(error) {
					console.log(error.statusText);
				});
		};


		$scope.cancel = function() {
			$scope.personCourant = {};
			$scope.displayMode = "list";
		}

		$scope.displayMode = "list";
		$scope.getPersonnes();

	});