function initPage(){

	const gallery = document.querySelector(".gallery");
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");
	const galleryContainer = document.getElementById('gallery-container');
	const showGalleryButton = document.getElementById('show-gallery');

	let translateX = 0;
	
	$( "#show-gallery" ).on( "click", function() {
	  $( '#gallery-container' ).toggleClass( "show" );
	});

	var $carousel = $('.slider').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  fullscreen: true,
	  wrapAround: true
	});

	 $carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
        if ( !cellElement ) {
            return;
        }
        $carousel.flickity( 'viewFullscreen' );
    });


};