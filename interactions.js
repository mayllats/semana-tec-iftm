$( ".card-orange" ).hover(
     function() {
      $( this ).removeClass( "card-orange" );
      $( this ).addClass( "card-orange-light" );
    }, 
    function() {
        $( this ).removeClass( "card-orange-light" );
        $( this ).addClass( "card-orange" );
      }
  );
$( ".card-green" ).hover(
     function() {
      $( this ).removeClass( "card-green" );
      $( this ).addClass( "card-green-light" );
    }, 
    function() {
        $( this ).removeClass( "card-green-light" );
        $( this ).addClass( "card-green" );
      }
  );