$(window).on('load', function() {
  $('body').removeClass('spin-open')
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
      }
    });
    $( "#price1" ).val( $( "#price-slider" ).slider( "values", 0 ));
    $( "#price2" ).val( $( "#price-slider" ).slider( "values", 1 ) );
  } );


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