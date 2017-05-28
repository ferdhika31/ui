// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/masuk.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.daftar', {
    url: '/daftar',
    views: {
      'menuContent': {
        templateUrl: 'templates/daftar.html',
        controller: 'DaftarCtrl'
      }
    }
  })

  .state('app.forgot', {
    url: '/forgot',
    views: {
      'menuContent': {
        templateUrl: 'templates/forgot.html',
        controller: 'ForgotCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('app.pesanan_proses', {
    url: '/pesanan_proses',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesanan_proses.html',
        controller: 'PesananProsesCtrl'
      }
    }
  })

  .state('app.pesanan_selesai', {
    url: '/pesanan_selesai',
    views: {
      'menuContent': {
        templateUrl: 'templates/pesanan_selesai.html',
        controller: 'PesananSelesaiCtrl'
      }
    }
  })

  .state('app.cari', {
    url: '/cari',
    views: {
      'menuContent': {
        templateUrl: 'templates/cari.html',
        controller: 'CariCtrl'
      }
    }
  })

  .state('app.terlaris', {
    url: '/terlaris',
    views: {
      'menuContent': {
        templateUrl: 'templates/terlaris.html',
        controller: 'TerlarisCtrl'
      }
    }
  })

  .state('app.menu_hemat', {
    url: '/menu_hemat',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu_hemat.html',
        controller: 'MenuHematCtrl'
      }
    }
  })

  .state('app.warungs', {
    url: '/warung',
    views: {
      'menuContent': {
        templateUrl: 'templates/warung.html',
        controller: 'WarungCtrl'
      }
    }
  })

  .state('app.warung', {
    url: '/warung/:warungId',
    views: {
      'menuContent': {
        templateUrl: 'templates/warung-detail.html',
        controller: 'WarungDetailCtrl'
      }
    }
  })

  .state('app.kategori', {
    url: '/kategori/:kategoriId',
    views: {
      'menuContent': {
        templateUrl: 'templates/kategori.html',
        controller: 'KategoriCtrl'
      }
    }
  })

  .state('app.konfirmasi', {
    url: '/konfirmasi',
    views: {
      'menuContent': {
        templateUrl: 'templates/konfirmasi.html',
        controller: 'KonfirmasiCtrl'
      }
    }
  })

  .state('app.mencari_driver', {
    url: '/mencari_driver',
    views: {
      'menuContent': {
        templateUrl: 'templates/mencari_driver.html',
        controller: 'MencariDriverCtrl'
      }
    }
  })

  .state('app.rincian_pesanan', {
    url: '/rincian_pesanan',
    views: {
      'menuContent': {
        templateUrl: 'templates/rincian_pesanan.html',
        controller: 'RincianPesananCtrl'
      }
    }
  })

  .state('app.beri_rating', {
    url: '/beri_rating',
    views: {
      'menuContent': {
        templateUrl: 'templates/beri_rating.html',
        controller: 'BeriRatingCtrl'
      }
    }
  })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');

});
