$(document).ready(function() {
  var $carousel = $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    draggable: !Flickity.prototype.isMobile,
    // other options...
  });

  // Define a function to move the buttons
  function moveButtons() {
    console.log('Moving Flickity buttons');
    var prevButton = $carousel.find('.flickity-prev-next-button.previous');
    var nextButton = $carousel.find('.flickity-prev-next-button.next');
    var customContainer = $('.custom-button-container');
    customContainer.append(prevButton);
    customContainer.append(nextButton);
  }

  // Use the 'settle' event to move the buttons after interaction
  $carousel.on('settle.flickity', function() {
    moveButtons();
  });

  // Manually trigger the settle event to move the buttons on page load
  moveButtons();
});
