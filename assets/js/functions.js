function initPage(){

	const gallery = document.querySelector(".gallery");
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");
	const galleryContainer = document.getElementById('gallery-container');
	const showGalleryButton = document.getElementById('show-gallery');

	let translateX = 0;
	const imageWidth = 250;
	const numImages = gallery.children.length;

	arrowLeft.addEventListener("click", () => {
	  if (translateX < 0) {
		translateX += imageWidth + 20;
		gallery.style.transform = `translateX(${translateX}px)`;
	  }
	});

	arrowRight.addEventListener("click", () => {
	  if (translateX > -(numImages - 4) * (imageWidth + 20)) {
		translateX -= imageWidth + 20;
		gallery.style.transform = `translateX(${translateX}px)`;
	  }
	});

	const overlay = document.querySelector(".overlay");
	const overlayImage = document.createElement("img");
	overlayImage.classList.add("overlay-image");
	overlay.appendChild(overlayImage);

	gallery.addEventListener("click", (event) => {
	  if (event.target.tagName === "IMG") {
		overlayImage.src = event.target.src;
		overlay.classList.add("active");
	  }
	});

	overlay.addEventListener("click", () => {
	  overlay.classList.remove("active");
	});
	
	$( "#show-gallery" ).on( "click", function() {
	  $( '#gallery-container' ).toggleClass( "show" );
	});

};