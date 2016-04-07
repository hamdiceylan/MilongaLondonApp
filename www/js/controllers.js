angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.milongas = [{
    "_id":"5702cc773ec214c00200db11",
    "Location":"London",
    "ImageUrl":"http://www.hoy-milonga.com/img/HMLogo_SF.png",
    "CreateDate":"1",
    "Organizer":"Terra Organizer",
    "Address":"London",
    "Description":"Tango Terra Descriptions goes here",
    "Day":"Thursday",
    "Name":"Tango Terra",
    "__v":0
  },{
    "_id":"5702ccaa3ec214c00200db13",
    "Location":"London Holborn",
    "ImageUrl":"http://www.hoy-milonga.com/img/HMLogo_SF.png",
    "CreateDate":"1",
    "Organizer":"Ivan and Paula",
    "Address":"Holborn",
    "Description":"Negracha",
    "Day":"Friday",
    "Name":"Negracha",
    "__v":0
  },{"_id":"5702cc8e3ec214c00200db12","Location":"London","ImageUrl":"http://www.hoy-milonga.com/img/HMLogo_SF.png","CreateDate":"1","Organizer":"Maria","Address":"Camden Town","Description":"Tango  Etnia","Day":"Sunday","Name":"Tango  Etnia","__v":0}];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
