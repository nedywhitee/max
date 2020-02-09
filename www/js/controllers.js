var firebaseConfig = {
    apiKey: "AIzaSyCdh524o23R5gxajpfwQyjMQaNumcaTlv8",
    authDomain: "maxaoo-6557b.firebaseapp.com",
    databaseURL: "https://maxaoo-6557b.firebaseio.com",
    projectId: "maxaoo-6557b",
    storageBucket: "maxaoo-6557b.appspot.com",
    messagingSenderId: "932831802037",
    appId: "1:932831802037:web:f4bc4148349ec9892f44fc",
    measurementId: "G-74KSHKHN6D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
angular.module('starter.controllers', [])

.controller("registro",function($scope,$rootScope){

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
