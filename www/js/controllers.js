angular.module('starter.controllers', [])

.controller('HrCtrl', function($scope, $http, hrsFunc, Units, City, cantidad) {
 $http.get("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get()).success(function (data){
      hrsFunc.set(data.list);   
      $scope.hrs = hrsFunc.all();
      //$scope.hrs = data.list;
	//alert("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get());
	//console.log("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get());
      });
//	
	  $scope.refresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get())
     .success(function(data) {
       hrsFunc.set(data.list);
	  /* alert("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get());
	console.log("http://api.openweathermap.org/data/2.5/forecast?id="+City.get()+"&&cnt="+cantidad.get()+"&&units=" + Units.get());*/
      //$scope.weatherToday = hrsFunc.getOne();
      $scope.hrs = hrsFunc.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})
.controller('DashCtrl', function($scope, $http, Chats, Units, City, cantidad) {

  //
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?cnt="+cantidad.get()+"&&id="+City.get()+"&units=" + Units.get()).success(function (data){
      Chats.set(data.list);
      console.log(data.list);
      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
      }); 
	
    //Metodo de actualizacion
    $scope.doRefresh = function() {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?cnt="+cantidad.get()+"&&id="+City.get()+"&units=" + Units.get())
     .success(function(data) {
       Chats.set(data.list);
	   // alert("http://api.openweathermap.org/data/2.5/forecast/daily?cnt="+cantidad.get()+"&&id="+City.get()+"&units=" + Units.get());

      $scope.weatherToday = Chats.getOne();
      $scope.chats = Chats.all();
     })
     .finally(function() {
       $scope.$broadcast('scroll.refreshComplete');
     });
    }
})

.controller('ChatsCtrl', function($scope, $http, Chats) {
  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
   
  $scope.weatherToday = Chats.get($stateParams.chatId);
})
.controller('HrsDetailCtrl', function($scope, $stateParams, hrsFunc) {
   alert($stateParams.hrId);
  $scope.weather = hrsFunc.get($stateParams.hrId);
})

.controller('2city', function($scope, City) {
  
  $scope.change = function(value) {
    City.set(value);
}
})
.controller('dias', function($scope, cantidad) {
  
  $scope.change = function(value) {
    cantidad.set(value);
}
})
.controller('AccountCtrl', function($scope, Units) {
  
 
  
  $scope.celcius = function(){
      Units.set("metric");
	 
  }
  $scope.fahrenheit = function(){
      Units.set("imperial");
  }
  $scope.kelvin = function(){
      Units.set("kelvin");
  }

	
});
