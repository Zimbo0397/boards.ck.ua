$(window).on('load', function() {
  $('body').removeClass('spin-open')
})





function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.4291698, lng: 32.0708611},
      zoom: 14
    });
    setMarkers(map);
  }

var boards = [
  ['board1',  49.4352363, 32.0615881, 4],
  ['board2', 49.4367536, 32.0634452, 5],
  ['board3', 49.4376549, 32.0648005, 3],
  ['board4', 49.4350067, 32.0662796, 2],
  ['board5', 49.4340469, 32.0684313, 1]
];

function setMarkers(map) {
  var image = {
    url: 'img/icons/board-icon.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 20),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < boards.length; i++) {
    var board = boards[i];
    var marker = new google.maps.Marker({
      position: {lat: board[1], lng: board[2]},
      map: map,
      icon: image,
      shape: shape,
      title: board[0],
      zIndex: board[3]
    });
  }
}




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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
    domState: true
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
      newEl = '<a href="#" data-id="'+dataid+'" data-type="'+side+'" class="board"><li class="board-item inline-el"><div class="foto-content"><div class="image-holder"><img src="'+src+'" alt="'+src+'" class="fake-img"><div style="background-image: url('+src+')" class="img"></div></div><div class="minipics image-holder"><img src="'+src2+'" alt="'+src2+'" class="fake-img"><div style="background-image: url( '+src2+')" class="img"></div></div><div class="price-holder"><span>'+price+'</span></div></div><div class="text-content"><div class="description"><span>'+description+'</span></div></div></li></a>';
      $('.board').remove();
    if(domState) {
      elements.push(newEl)
    }
    boardsOute[i].domState = true;
  }
  $('.boards-list').html(elements)
}

$('#side').on('change', function () {
    filtersObj.side = $(this).val();
    makeFilters();
    createElements();
    console.log(boardsOute)
      
});
$('#boardstype').on('change', function () {
    filtersObj.dataType = $(this).val();
    makeFilters();
    createElements();
    console.log(boardsOute)
      
})
$('#street').on('change', function () {
    filtersObj.street = $(this).val();
    makeFilters();
    createElements();
    console.log(boardsOute)
      
})
$('#rans').on('change', function () {
    filtersObj.rans = $(this).val();
    makeFilters();
    createElements();
})
$('#clearFilters').on('click', function (e) {
    e.preventDefault();
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
})

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
      }
    });
    $( "#price1" ).val( $( "#price-slider" ).slider( "values", 0 ));
    $( "#price2" ).val( $( "#price-slider" ).slider( "values", 1 ) );
} );

createElements()