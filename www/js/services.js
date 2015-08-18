angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  chats = [];
  
  return {
    getOne: function(){
        return chats[0];
    },
    set: function(data){
      chats = data;
    },
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].$$hashKey === chatId) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('hrsFunc', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  hr = [];
  
  return {
   
    set: function(data){
		
      hr = data;
    },
    all: function() {
      return hr;
    },
    remove: function(hrId) {
      hr.splice(hr.indexOf(hrId), 1);
    },
    get: function(hrId) {
		alert(hr.length);
      for (var i = 0; i < hr.length; i++) {
        if (hr[i].$$hashKey === hrId) {
		return hr[i];
        }
      }
      return null;
    }
  };
})
.factory('Units', function($http) {
  var units = "metric";
  
  return {
    set: function(data){
      units = data;
    },
    get: function(chatId) {
      return units;
    }
  }
})
.factory('City', function($http) {
  var units = "3531673";
  
  return {
    set: function(data){
      units = data;
    },
    get: function(chatId) {
      return units;
    }
  }
})
.factory('cantidad', function($http) {
  var units = "3";
  
  return {
    set: function(data){
      units = data;
    },
    get: function(chatId) {
      return units;
    }
  }
});
