angular.module('personneApp.services', [])

	.service('PersonnesService', function($http, $q, baseURL){
		
		that = this;
		
		that.getPersonnes = function(){

			console.log("Service: get all persons");
			
			var deferred = $q.defer();
			
			return $http.get(baseURL+'/usermanager/getAll')
						.then(function (response) {
				                // promise is fulfilled
				                deferred.resolve(response.data);
				                // promise is returned
				                return deferred.promise;
				            }, function (response) {
				                // the following line rejects the promise 
				                deferred.reject(response);
				                // promise is returned
				                return deferred.promise;
				            });
		};
	
		
		that.getPersonne =  function(id){

			console.log("Service: get person by id: "+id);
			
			var deferred = $q.defer();
			
			return $http.get(baseURL+'/usermanager/getById:'+id)
						.then(function (response) {
				                // promise is fulfilled
				                deferred.resolve(response.data);
				                // promise is returned
				                return deferred.promise;
				            }, function (response) {
				                // the following line rejects the promise 
				                deferred.reject(response);
				                // promise is returned
				                return deferred.promise;
				            });
		};

		that.deletePerson = function(id){

			console.log("Service: delete person id: "+id);
			
			var deferred = $q.defer();
			
			return $http.delete(baseURL+'/usermanager/delete:'+id)
						.then(function (response) {
							
				                // promise is fulfilled
				                deferred.resolve(response.data);
				                // promise is returned
				                return deferred.promise;
				            }, function (response) {
				                // the following line rejects the promise
				                deferred.reject(response);
				                // promise is returned
				                return deferred.promise;
				            });
		};

		that.updatePerson = function(objet){

			console.log("Service: update person");
		
			var deferred = $q.defer();
							
			return $http.post(baseURL+'/usermanager/update',objet)
						.then(function (response) {
				                // promise is fulfilled
				                deferred.resolve(response.data);
				                // promise is returned
				                return deferred.promise;
				            }, function (response) {
				                // the following line rejects
								// the promise
				                deferred.reject(response);
				                // promise is returned
				                return deferred.promise;
				            });
		};

		
		that.createPerson = function(objet){

			console.log("Service: create person");
			
			var deferred = $q.defer();
			
			return $http.post(baseURL+'/usermanager/create',objet)
						.then(function (response) {
				                deferred.resolve(response.data);
				                return deferred.promise;
				            }, function (response) {
				                // the following line rejects the
								// promise
				                deferred.reject(response);
				                // promise is returned
				                return deferred.promise;
				            });
		};

	
	});
