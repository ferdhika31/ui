angular.module('starter.services', [])

.factory('Kategori', function(){
  var kategori = [
    {
      id: 0, 
      name: 'Aneka Nasi',
      deskripsi: 'Aneka makanan berat',
      src: "img/makanan/nasi_ayam.jpg"
    },{
      id: 1, 
      name: 'Snack & Jajanan',
      deskripsi: 'Aneka makanan ringan',
      src: "img/makanan/kroket.jpg"
    },{
      id: 2,
      name: 'Minuman',
      deskripsi: 'Aneka minuman segar',
      src: "img/makanan/jus_buah_naga.jpg"
    },{
      id: 3, 
      name: 'Roti',
      deskripsi: 'Aneka roti',
      src: "img/makanan/roti.jpg"
    }
  ];

  return {
    all: function() {
      return kategori;
    },
    remove: function(kategorii) {
      kategori.splice(kategori.indexOf(kategorii), 1);
    },
    get: function(warungId) {
      for (var i = 0; i < kategori.length; i++) {
        if (kategori[i].id === parseInt(warungId)) {
          return kategori[i];
        }
      }
      return null;
    }
  };
})

.factory('Warung', function(){
  var warung = [
    {
      id: 0, 
      name: 'Eka Cell',
      alamat: 'No. 04 Pujasera Politeknik Negeri Bandung',
      src: "img/warung/eka_cell.jpg",
      jam: "08.00 - 15.40"
    },{
      id: 1, 
      name: 'Kantin Mutiara',
      alamat: 'No. 14 Pujasera Politeknik Negeri Bandung',
      src: "img/warung/mutiara.jpg",
      jam: "08.00 - 16.30"
    },{
      id: 2,
      name: 'Kantin Catur',
      alamat: 'No. 9 Pujasera Politeknik Negeri Bandung',
      src: "img/warung/catur.jpg",
      jam: "08.00 - 13.20"
    },{
      id: 3, 
      name: 'Pratama Food',
      alamat: 'No.2 Pujasera Politeknik Negeri Bandung',
      src: "img/warung/pratama_food.jpg",
      jam: "08.00 - 15.10"
    }
  ];

  return {
    all: function() {
      return warung;
    },
    remove: function(warungg) {
      warung.splice(warung.indexOf(warungg), 1);
    },
    get: function(warungId) {
      for (var i = 0; i < warung.length; i++) {
        if (warung[i].id === parseInt(warungId)) {
          return warung[i];
        }
      }
      return null;
    }
  };
})

.factory('Makanan', function(){
  var makanan = [
    {
      id: 0, 
      name: 'Nasi Ayam',
      deskripsi: 'Blok A2 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/nasi_ayam.jpg",
      price: 25000,
      warung_id: 1,
      kategori_id: 0
    },{
      id: 1, 
      name: 'Jus Buah Naga',
      deskripsi: 'Blok B3 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/jus_buah_naga.jpg",
      price: 5000,
      warung_id: 2,
      kategori_id: 2
    },{
      id: 2, 
      name: 'Karoket',
      deskripsi: 'Blok A4 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/kroket.jpg",
      price: 2000,
      warung_id: 3,
      kategori_id: 1
    },{
      id: 3, 
      name: 'Ayam Penyet',
      deskripsi: 'Blok C1 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/penyet.jpg",
      price: 12500,
      warung_id: 2,
      kategori_id: 0
    },{
      id: 4, 
      name: 'Ayam Penyet KC',
      deskripsi: 'Blok C1 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/kc_ayam.jpg",
      price: 12500,
      warung_id: 0,
      kategori_id: 0
    },{
      id: 5, 
      name: 'Roti Keju Susu',
      deskripsi: 'Blok C1 Pujasera Politeknik Negeri Bandung',
      src: "img/makanan/roti.jpg",
      price: 4500,
      warung_id: 3,
      kategori_id: 3
    }
  ];

  return {
    all: function() {
      return makanan;
    },
    remove: function(makanann) {
      makanan.splice(makanan.indexOf(makanann), 1);
    },
    get: function(makananId) {
      for (var i = 0; i < makanan.length; i++) {
        if (makanan[i].id === parseInt(makananId)) {
          return makanan[i];
        }
      }
      return null;
    }
  };
})
;