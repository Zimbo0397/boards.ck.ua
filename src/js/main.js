$(window).on('load', function() {
  $('body').removeClass('spin-open')
})





var boards = [
  ['board1',  49.4352363, 32.0615881, 4, 1],
  ['board2', 49.4367536, 32.0634452, 5, 2],
  ['board3', 49.4376549, 32.0648005, 3, 3],
  ['board4', 49.4350067, 32.0662796, 2, 4],
  ['board5', 49.4340469, 32.0684313, 1, 5]
];

var boardsOute = [
  { src:'img/images/board-1.jpg',
    src2:'img/images/minipic-1.png',
    price: '3000',
    description: 'бул. Шевченко / ул. Г. Сталинграда',
    dataid: '1',
    side: 'a',
    dataType: 'board',
    street: 'bul_shev',
    rans: 'uzr',
    domState: true,
    lat: 49.4332363,
    lng: 32.0615881,
    indexZ: 1,
    mapId: 1

  },
  {
    src: 'img/images/board-2.jpg',
    src2: 'img/images/minipic-2.png',
    price: '1900',
    description: 'ул. Смелянская / ул. 30 лет Победы (крайний справа)',
    dataid: '2',
    side: 'a2',
    dataType: 'board',
    street: 'odess',
    rans: 'center',
    domState: true,
    lat: 49.4152463,
    lng: 32.0615581,
    indexZ: 2,
    mapId: 2
  },
  {
    src: 'img/images/board-3.jpg',
    src2: 'img/images/minipic-3.png',
    price: '1900',
    description: 'ул.Ильина / ул.Б.Хмельницкого',
    dataid: '3',
    side: 'a3',
    dataType: 'board',
    street: 'gagarina_55',
    rans: 'kazbet',
    domState: true,
    lat: 49.4252353,
    lng: 32.0615861,
    indexZ: 3,
    mapId: 3
  },
  {
    src: 'img/images/board-4.jpg',
    src2: 'img/images/minipic-4.png',
    price: '3000',
    description: 'Въезд в Черкассы из Киева, со стороны г.Золотоноша, слева',
    dataid: '4',
    side: 'b',
    dataType: 'board',
    street: 'lenin',
    rans: 'rans_d',
    domState: true,
    lat: 49.4452163,
    lng: 32.0615581,
    indexZ: 4,
    mapId: 4
  },
  {
    src: 'img/images/board-1.jpg',
    src2: 'img/images/minipic-1.png',
    price: '3000', 'description': 'бул. Шевченко / ул. Г. Сталинграда, слева',
    dataid: '5',
    side: 'a1',
    dataType: 'board',
    street: 'blagoves',
    rans: 'mutniza',
    domState: true,
    lat: 49.4552303,
    lng: 32.0615821,
    indexZ: 5,
    mapId: 5
  },
  {
    src: 'img/images/board-4.jpg',
    src2: 'img/images/minipic-4.png',
    price: '1900',
    description: 'Въезд в Черкассы из Киева, со стороны г.Золотоноша, слева',
    dataid: '6',
    side: 'a2',
    dataType: 'board',
    street: 'pobed_30',
    rans: 'himpass',
    domState: true,
    lat: 49.4352333,
    lng: 32.0615841,
    indexZ: 6,
    mapId: 6
  },
    { src:'img/images/board-1.jpg',
    src2:'img/images/minipic-1.png',
    price: '3000',
    description: 'бул. Шевченко / ул. Г. Сталинграда',
    dataid: '7',
    side: 'a',
    dataType: 'board',
    street: 'engels',
    rans: 'lunachr',
    domState: true,
    lat: 49.4652263,
    lng: 32.0615181,
    indexZ: 7,
    mapId: 7
  },
  {
    src: 'img/images/board-2.jpg',
    src2: 'img/images/minipic-2.png',
    price: '1900',
    description: 'ул. Смелянская / ул. 30 лет Победы (крайний справа)',
    dataid: '8',
    side: 'a2',
    dataType: 'prismatron',
    street: 'pobed_30',
    rans: '700_let',
    domState: true,
    lat: 49.4752263,
    lng: 32.0615481,
    indexZ: 8,
    mapId: 8
  },
  {
    src: 'img/images/board-3.jpg',
    src2: 'img/images/minipic-3.png',
    price: '1900',
    description: 'ул.Ильина / ул.Б.Хмельницкого',
    dataid: '9',
    side: 'a3',
    dataType: 'prismatron',
    street: 'bul_shev',
    rans: 'green',
    domState: true,
    lat: 49.4851363,
    lng: 32.0645881,
    indexZ: 9,
    mapId: 9
  },
  {
    src: 'img/images/board-4.jpg',
    src2: 'img/images/minipic-4.png',
    price: '3000',
    description: 'Въезд в Черкассы из Киева, со стороны г.Золотоноша, слева',
    dataid: '10',
    side: 'b',
    dataType: 'prismatron',
    street: 'lenin',
    rans: 'scooling',
    domState: true,
    lat: 49.4942363,
    lng: 32.0665881,
    indexZ: 10,
    mapId: 10
  },
  {
    src: 'img/images/board-1.jpg',
    src2: 'img/images/minipic-1.png',
    price: '3000', 'description': 'бул. Шевченко / ул. Г. Сталинграда, слева',
    dataid: '11',
    side: 'a1',
    dataType: 'board',
    street: 'univers',
    rans: 'kazbet',
    domState: true,
    lat: 49.4361363,
    lng: 32.0614881,
    indexZ: 11,
    mapId: 11
  },
  {
    src: 'img/images/board-4.jpg',
    src2: 'img/images/minipic-4.png',
    price: '1900',
    description: 'Въезд в Черкассы из Киева, со стороны г.Золотоноша, слева',
    dataid: '12',
    side: 'a2',
    dataType: 'board',
    street: 'kresch',
    rans: 'uzr',
    domState: true,
    lat: 49.4372353,
    lng: 32.0615871,
    indexZ: 12,
    mapId: 12
  }
];

var elements = [],
    filtersState = 0,
    filtersObj = {
      priceLeft: 0,
      priceRight: 0,
      side: '',
      dataType: '',
      street: '',
      rans: ''
    };
var UpfiltersState = function () {
  for (var prop in filtersObj) {
      if(filtersObj[prop]) {
        filtersState ++;
      }
  }
};
var displayFiltersState = function () {
    if (filtersState > 0) {
      $('#clearFilters').text('очистить фильтры ('+filtersState+')')
    } else {
      $('#clearFilters').text('фильтры (0)')
    }
}
var makeFilters = function() {
    for (var i = 0; i < boardsOute.length; i++) {
      if(filtersObj.side) {
        if (boardsOute[i].side !== filtersObj.side) {
            boardsOute[i].domState = false;
        }
      }
      if(filtersObj.dataType) {
          if (boardsOute[i].dataType !== filtersObj.dataType) {
              boardsOute[i].domState = false;
        }
      }
      if(filtersObj.street) {
          if (boardsOute[i].street !== filtersObj.street) {
              boardsOute[i].domState = false;
        }
      }
      if(filtersObj.rans) {
          if (boardsOute[i].rans !== filtersObj.rans) {
              boardsOute[i].domState = false;
        }
      }
      if(filtersObj.priceLeft || filtersObj.priceRight) {
          if (boardsOute[i].price < filtersObj.priceLeft || boardsOute[i].price > filtersObj.priceRight) {
              boardsOute[i].domState = false;
        }
      }
    }
    filtersState = 0;
    UpfiltersState();
    displayFiltersState();
}



var createElements = function() {
  elements = [];
  for (var i = 0; i < boardsOute.length; i++) {
    var src = boardsOute[i].src,
      src2 = boardsOute[i].src2,
      price = boardsOute[i].price,
      description = boardsOute[i].description,
      dataid = boardsOute[i].dataid,
      side = boardsOute[i].side,
      domState = boardsOute[i].domState,
      lat = boardsOute[i].lat,
      lng = boardsOute[i].lng,
      zIndex = boardsOute[i].indexZ,
      newEl = '<a href="#" zIndex="'+zIndex+'" lat="'+lat+'" lng="'+lng+'" data-id="'+dataid+'" data-type="'+side+'" class="board open"><li class="board-item inline-el"><div class="foto-content"><div class="image-holder"><img src="'+src+'" alt="'+src+'" class="fake-img"><div style="background-image: url('+src+')" class="img"></div></div><div class="minipics image-holder"><img src="'+src2+'" alt="'+src2+'" class="fake-img"><div style="background-image: url( '+src2+')" class="img"></div></div><div class="price-holder"><span>'+price+'</span></div></div><div class="text-content"><div class="description"><span>'+description+'</span></div></div></li></a>';
    if(domState) {
      elements.push(newEl)
    }
    boardsOute[i].domState = true;
  }
  $('.boards-list').html(elements)

}



  $('.board').each(function() {
    $(this).addClass('open')
  })

$('#side').on('change', function () {
    filtersObj.side = $(this).val();
    makeFilters();
    createElements();
    cleanSliderItems();
    formSliderItems();
      
});
$('#boardstype').on('change', function () {
    filtersObj.dataType = $(this).val();
    makeFilters();
    createElements();
    formSliderItems();
      
})
$('#street').on('change', function () {
    filtersObj.street = $(this).val();
    makeFilters();
    createElements();
    cleanSliderItems();
    formSliderItems();
      
})
$('#rans').on('change', function () {
    filtersObj.rans = $(this).val();
    makeFilters();
    createElements();
    cleanSliderItems();
    formSliderItems();
})
function clearHtmlFilters() {
  $('.filters-holder .select-holder select').each(function() {
    $(this).val('');
  })
}
$('#clearFilters').on('click', function (e) {
    e.preventDefault();
    clearHtmlFilters();
    filtersObj = {
      priceLeft: 0,
      priceRight: 0,
      side: '',
      dataType: '',
      street: '',
      rans: ''
    };
    filtersState = 0;
    makeFilters();
    createElements();
    UpfiltersState();
    displayFiltersState();
    cleanSliderItems();
    formSliderItems();
    $( "#price1" ).val( $( "#price-slider" ).slider( "values", 0 ));
    $( "#price2" ).val( $( "#price-slider" ).slider( "values", 1 ) );
})

createElements();

$( function() {
    $( "#price-slider" ).slider({
      range: true,
      min: 1000,
      max: 5000,
      values: [ 1900, 3000 ],
      slide: function( event, ui ) {
        $( "#price1" ).val(ui.values[ 0 ]);
        $( "#price2" ).val(ui.values[ 1 ]);
      },
      change: function() {
        filtersObj.priceLeft = $( "#price-slider" ).slider( "values", 0 );
        filtersObj.priceRight = $( "#price-slider" ).slider( "values", 1 );
        makeFilters();
        createElements();
        deleteMarkers();
        updateMarkers();
        cleanSliderItems();
        formSliderItems();
      }
    });
    $( "#price1" ).val( $( "#price-slider" ).slider( "values", 0 ));
    $( "#price2" ).val( $( "#price-slider" ).slider( "values", 1 ) );
} );

function resetSliderRange() {
  var $slider = $("#price-slider");
    $slider.slider("values", 0, 1900);
    $slider.slider("values", 1, 300);
}


var map,
    markers = [];

function addMarker(bLat, bLng, bTitle, bZindex) {
  var image = {
    url: 'img/icons/1.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 20),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  },
  image2 = {
    url: 'img/icons/2.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 20),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  var marker = new google.maps.Marker({
      position: {lat: bLat, lng: bLng},
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      shape: shape,
      title: bTitle,
      zIndex: bZindex
    });
  markers.push(marker);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function updateMarkers() {
  $('.board').each(function() {
    var $board = $(this),
        bLat = parseFloat($board.attr('lat')),
        bLng = parseFloat($board.attr('lng')),
        bTitle = $board.find('.description span').text(),
        bZindex = parseInt($board.attr('zIndex'));
    addMarker(bLat, bLng, bTitle, bZindex);
  })
}


function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.4291698, lng: 32.0708611},
      zoom: 14
    });

  // setMarkers(map);
  updateMarkers();

  $('#side').on('change', function () {
     deleteMarkers();
      updateMarkers();
  });
  $('#boardstype').on('change', function () {
     deleteMarkers();
      updateMarkers();
  })
  $('#street').on('change', function () {
     deleteMarkers();
      updateMarkers();
  })
  $('#rans').on('change', function () {
     deleteMarkers();
      updateMarkers();
  })
  $('#clearFilters').on('click', function (e) {
     deleteMarkers();
      updateMarkers();
  })
}

var slides = [];
function initSliderModal() {
  var slidesTarget = $('.news-slider');
  $(slidesTarget).html(slides);
};

var bSlider = $('.news-slider').bxSlider({
      mode: 'fade',
      speed: 200
})



function cleanSliderItems() {
  slides = [];
};
function formSliderItems() {
  var slidesCounter = 0;
  $('.board').each(function() {
      $(this).attr('counter', ''+slidesCounter+'');
      var $this = $(this),
          img = $this.find('.image-holder img').attr('src'),
          h5 = $this.find('.description span').text(),
          num = parseInt($this.attr('counter')),
          slide  = '<li><div class="image-holder"><img src="'+img+'" alt="" class="fake-img"><div style="background-image: url('+img+')" class="img"></div></div><div class="text-holder"><div class="description"><h5>'+h5+'</h5><p>CrewInspector an online ship crew management system provider has been chosen by BachmannHR Group Ltd to integrate crewing process across the group of companies. Crewing software allows employees to maintain crew data, prepare crew employment contracts and share data easily with rest of the teams residing in different geographic locations at single access point without having any additional software to install. An overview of crew certificate expiry enables to keep the information up to date and to initiate any training activities for respective crew members as soon as required.</p></div></div></li>';
          slides.push(slide)
    $this.on('click', function(e) {
      var slidesCount = slidesCounter;
      e.preventDefault();
      initSliderModal();
      bSlider.reloadSlider();
      $('.main-modal').addClass('open');
      $('body').addClass('blackshadow');
      bSlider.goToSlide(num);
    })
    slidesCounter ++;
  })
}

formSliderItems();

$('#newsModalClose').on('click', function() {
  $('.main-modal').removeClass('open');
  $('body').removeClass('blackshadow');
})


