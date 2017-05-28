angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state){

  $scope.home = function(){
    $state.go('app.daftar_order');
  };

  $scope.history = function(){
    $state.go('app.riwayat_order');
  };

  $scope.profile = function(){
    $state.go('app.profile');
  };

})

.controller('LoginCtrl', function($scope, $state){

  $scope.masuk = function(){
    $state.go('app.daftar_order');
  };
  
})

.controller('DaftarOrderCtrl', function($scope, $state){
  $scope.lihatDetail = function(){
    $state.go('app.konfirmasi_order');
  };
})

.controller('ProfileCtrl', function($scope, $state) {

  $scope.keluar = function(){
    $state.go('app.login');
  };

})

.controller('RiwayatOrderCtrl', function($scope, $state) {
  $scope.detailOrder = function(){
    $state.go('app.detail_order');
  };
})

.controller('DetailOrderCtrl', function($scope, $state){

})

.controller('KonfirmasiOrderCtrl', function($scope, $state, $ionicPopup) {
  
  // An alert dialog
   $scope.showCatatanLokasi = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Catatan Lokasi',
       template: 'Saya pake jaket merah, celana jeans.'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

   $scope.ambil = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Konfirmasi Tunai',
       template: 'Order ini membutuhkan uang tunai sebesar Rp 35.000, yakin bisa mengambil order ini?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('Detail order');
         $state.go('app.order');
       } else {
         console.log('no');
       }
     });
   };

})

.controller('OrderCtrl', function($scope, $state, $ionicPopup){
  $scope.$on('$ionicView.beforeEnter', function (event, viewData){
    // hide back menu
    viewData.enableBack = false;
  });

  $scope.selesai = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Konfirmasi Kembali',
       template: 'Apakah anda yakin order telah terselesaikan?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('Riwayat order');
         $state.go('app.riwayat_order');
       } else {
         console.log('no');
       }
     });
   };
})

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
