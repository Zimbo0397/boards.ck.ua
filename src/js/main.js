$( function() {
    $( "#price-slider" ).slider({
      range: true,
      min: 1000,
      max: 5000,
      values: [ 100, 500000 ],
      slide: function( event, ui ) {
        $( "#price1" ).val(ui.values[ 0 ]);
        $( "#price2" ).val(ui.values[ 1 ]);
      }
    });
    $( "#price1" ).val( $( "#price-slider" ).slider( "values", 0 ));
    $( "#price2" ).val( $( "#price-slider" ).slider( "values", 1 ) );
  } );

