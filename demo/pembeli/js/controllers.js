angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, Warung, Makanan){

  $scope.warung = Warung.all();

  $scope.makanan = Makanan.all();

  $scope.warma = [].concat.apply($scope.warung, $scope.makanan);

  $scope.cart = function(){
    $state.go('app.pesanan_proses');
  }

  $scope.profile = function(){
    $state.go('app.profile');
  }

  $scope.home = function(){
    $state.go('app.home');
  };

})

.controller('LoginCtrl', function($scope, $state){

  $scope.daftar = function(){
    $state.go('app.daftar');
  };

  $scope.lupapassword = function(){
    $state.go('app.forgot');
  };

})

.controller('DaftarCtrl', function(){

})

.controller('ForgotCtrl', function(){

})

.controller('HomeCtrl', function($scope, $state){
  $scope.$on('$ionicView.beforeEnter', function (event, viewData){
    // hide back menu
    viewData.enableBack = false;
  });

  $scope.navTitle='<img class="title-image" src="img/logo.png" height="100%" />';

  $scope.cari = function(){
    $state.go('app.cari');
  };

  $scope.terlaris = function(){
    $state.go('app.terlaris');
  };

  $scope.hemat = function(){
    $state.go('app.menu_hemat');
  };

  $scope.daftarWarung = function(){
    $state.go('app.warungs');
  };

  $scope.kategori = function(id){
    console.log(id);
    $state.go('app.kategori', {kategoriId:id});
  };

})

.controller('ProfileCtrl', function($scope, $state){

})

.controller('PesananProsesCtrl', function($scope, $state){

  $scope.selesai = function(){
    $state.go('app.pesanan_selesai');
  }

  $scope.detailPesanan = function(){
    $state.go('app.rincian_pesanan');
  }

})

.controller('PesananSelesaiCtrl', function($scope, $state){

  $scope.proses = function(){
    $state.go('app.pesanan_proses');
  }

  $scope.detailPesanan = function(){
    $state.go('app.rincian_pesanan');
  }

})

.controller('CariCtrl', function($scope, $state){

  $scope.detailWarung = function(id){
    console.log(id);
    $state.go('app.warung', {warungId:id});
  };


})

.controller('TerlarisCtrl', function($scope, $state){

  $scope.detailWarung = function(id){
    console.log(id);
    $state.go('app.warung', {warungId:id});
  };
  
})

.controller('MenuHematCtrl', function($scope, $state){

  $scope.detailWarung = function(id){
    console.log(id);
    $state.go('app.warung', {warungId:id});
  };
  
})

.controller('WarungCtrl', function($scope, $state){

  $scope.detailWarung = function(id){
    console.log(id);
    $state.go('app.warung', {warungId:id});
  };
  
})

.controller('WarungDetailCtrl', function($scope, $state, $stateParams, Warung, Makanan) {
  $scope.warung = Warung.get($stateParams.warungId);
  $scope.makanan = Makanan.all();

  $scope.konfirmasi = function(){
    $state.go('app.konfirmasi');
  }
})

.controller('KategoriCtrl', function($scope, $state, $stateParams, Kategori, Warung, Makanan){
  $scope.kat = Kategori.get($stateParams.kategoriId);

  $scope.detailWarung = function(id){
    console.log(id);
    $state.go('app.warung', {warungId:id});
  };
})

.controller('KonfirmasiCtrl', function($scope, $state, $ionicModal){
  // Form data for the comment modal
  $scope.tujuanData = {};

  // Create the comment modal that we will use later
  $ionicModal.fromTemplateUrl('templates/ubah_tujuan.html', {
    scope: $scope
  }).then(function(modalUbahTujuan) {
    $scope.modalUbahTujuan = modalUbahTujuan;
  });

  // Triggered in the comment modal to close it
  $scope.closeModal = function() {
    $scope.modalUbahTujuan.hide();
  };

  // Open the comment modal
  $scope.ubahTujuan = function(){
    $scope.modalUbahTujuan.show();
  };

  // Form data for the comment modal
  $scope.catatanData = {};

  // Create the comment modal that we will use later
  $ionicModal.fromTemplateUrl('templates/tambah_catatan.html', {
    scope: $scope
  }).then(function(modalCatatan) {
    $scope.modalCatatan = modalCatatan;
  });

  // Triggered in the comment modal to close it
  $scope.closeModalCatatan = function() {
    $scope.modalCatatan.hide();
  };

  // Open the comment modal
  $scope.tambahCatatan = function(){
    $scope.modalCatatan.show();
  };

  $scope.pesan = function(){
    $state.go('app.mencari_driver');
  }

})

.controller('MencariDriverCtrl', function($scope, $state, $timeout){
  $scope.$on('$ionicView.beforeEnter', function (event, viewData){
    // hide back menu
    viewData.enableBack = false;
  });

  $scope.batal = function(){
    $state.go('app.konfirmasi');
  }

  var countUp = function() {
    $state.go('app.rincian_pesanan');
  }

  $timeout(countUp, 1000);
})

.controller('RincianPesananCtrl', function($scope, $state, $ionicPopup){
  $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Konfirmasi Kembali',
       template: 'Apakah anda yakin pesanan anda telah anda terima?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('Beri rating');
         $state.go('app.beri_rating');
       } else {
         console.log('no');
       }
     });
   };
})

.controller('BeriRatingCtrl', function($scope, $state){
  $scope.$on('$ionicView.beforeEnter', function (event, viewData){
    // hide back menu
    viewData.enableBack = false;
  });

  $scope.selesai = function(){
    $state.go('app.pesanan_proses');
  }
})

;
