 // Get references to the input fields
let topDiameterInput = document.getElementById('topDiameter');
let bottomDiameterInput = document.getElementById('bottomDiameter');
let lengthInput = document.getElementById('length');
let spliceLengthInput = document.getElementById('cutLength');
let cutDepthStartInput = document.getElementById('cutDepthStart');
let cutDepthEndInput = document.getElementById('cutDepthEnd');
let finalTopDiameterInput = document.getElementById('finalTopDiameter');
let finalBottomDiameterInput = document.getElementById('finalBottomDiameter');

// Get reference to the output field
let pointReductionOutput = document.getElementById('pointReduction');

// Get reference to the canvas
let canvas = document.getElementById('cueCanvas');
let ctx = canvas.getContext('2d');

// Define the scale
const scale = 15;

// Create a new image object
let img = new Image();
img.src = "../assets/img/woodtile.jpg";
img.onload = function() {
  // The image is loaded... draw everything
  drawCue();
  drawCue2();
};

// Function to draw the cue
function drawCue() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the current input values
  let topDiameter = parseFloat(topDiameterInput.value);
  let bottomDiameter = parseFloat(bottomDiameterInput.value);
  let length = parseFloat(lengthInput.value);
  let spliceLength = parseFloat(spliceLengthInput.value);
  let cutDepthStart = parseFloat(cutDepthStartInput.value);
  let cutDepthEnd = parseFloat(cutDepthEndInput.value);
  let finalTopDiameter = parseFloat(finalTopDiameterInput.value);
  let finalBottomDiameter = parseFloat(finalBottomDiameterInput.value);
  let offset = (bottomDiameter - topDiameter) / 2;

  // Create a pattern with this image, and set it to "repeat"
  let pattern = ctx.createPattern(img, 'repeat');

  // Calculate the taper
  let taper = (bottomDiameter - topDiameter) / length;

  // Calculate the proportion of the splice length to the total length
  let proportion = spliceLength / length;

  // Calculate the height of the inner trapezoid
  let innerHeight = proportion * length;

  // Calculate the y-coordinate for the top and bottom of the inner trapezoid
  let innerTopY = length - innerHeight;
  let innerBottomY = length;

  // Calculate the width of the top and bottom lines of the inner trapezoid
  let topWidth = cutDepthStart;
  let bottomWidth = cutDepthEnd;

  // Calculate the canvas height
  let canvasHeight = canvas.height;

  // Calculate the scale factor
  let scaleFactor = canvasHeight / length;

  // Apply the scale factor
  let scaledLength = length * scaleFactor;
  let scaledInnerHeight = innerHeight * scaleFactor;
  let scaledInnerTopY = innerTopY * scaleFactor;
  let scaledInnerBottomY = innerBottomY * scaleFactor;
  let scaledTopDiameter = topDiameter * scaleFactor * 1.6;
  let scaledBottomDiameter = bottomDiameter * scaleFactor * 1.6;
  let scaledTopWidth = topWidth * scaleFactor * 1.6;
  let scaledBottomWidth = bottomWidth * scaleFactor * 1.6;

  // Draw the outer trapezoid
  ctx.fillStyle = pattern; // set the fillStyle to the pattern
  ctx.beginPath();
  ctx.moveTo((canvas.width / 2) - (scaledTopDiameter / 2), 0);
  ctx.lineTo((canvas.width / 2) + (scaledTopDiameter / 2), 0);
  ctx.lineTo((canvas.width / 2) + (scaledBottomDiameter / 2), scaledLength);
  ctx.lineTo((canvas.width / 2) - (scaledBottomDiameter / 2), scaledLength);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw the inner trapezoid
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo((canvas.width / 2) - (scaledTopWidth / 2), scaledInnerTopY);
  ctx.lineTo((canvas.width / 2) + (scaledTopWidth / 2), scaledInnerTopY);
  ctx.lineTo((canvas.width / 2) + (scaledBottomWidth / 2), scaledInnerBottomY);
  ctx.lineTo((canvas.width / 2) - (scaledBottomWidth / 2), scaledInnerBottomY);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// Attach event listeners to the input fields
topDiameterInput.addEventListener('input', drawCue);
bottomDiameterInput.addEventListener('input', drawCue);
lengthInput.addEventListener('input', drawCue);
spliceLengthInput.addEventListener('input', drawCue);
cutDepthStartInput.addEventListener('input', drawCue);
cutDepthEndInput.addEventListener('input', drawCue);
cutDepthEndInput.addEventListener('input', drawCue2);
finalTopDiameterInput.addEventListener('input', drawCue);
finalBottomDiameterInput.addEventListener('input', drawCue);





// Get reference to the second canvas
let canvas2 = document.getElementById('cueCanvas2');
let ctx2 = canvas2.getContext('2d');

// Create a new image object for second canvas
let img2 = new Image();
img2.src = "../assets/img/woodtile.jpg";
img2.onload = function() {
  // The image is loaded... draw everything
  drawCue2();
};

function drawCue2() {
  // Clear the canvas
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  // Get the current input values
  let topDiameter = parseFloat(topDiameterInput.value);
  let bottomDiameter = parseFloat(bottomDiameterInput.value);
  let length = parseFloat(lengthInput.value);
  let spliceLength = parseFloat(spliceLengthInput.value);
  let cutDepthStart = parseFloat(cutDepthStartInput.value);
  let cutDepthEnd = parseFloat(cutDepthEndInput.value);
  let finalTopDiameter = parseFloat(finalTopDiameterInput.value);
  let finalBottomDiameter = parseFloat(finalBottomDiameterInput.value);
  let offset = (bottomDiameter - topDiameter) / 2;
let finalTriangleHeight = parseFloat(document.getElementById('finalTriangleHeight').textContent);
let finalTriangleWidth = parseFloat(document.getElementById('finalTriangleWidth').textContent);
  




  // Create a pattern with this image, and set it to "repeat"
  let pattern = ctx2.createPattern(img, 'repeat');

  // Calculate the taper
  let taper = (bottomDiameter - topDiameter) / length;

  // Calculate the point reduction
  let pointReduction = (finalBottomDiameter - finalTopDiameter) / length;

  // Display the point reduction
  pointReductionOutput.innerText = pointReduction;

  // Calculate the proportion of the splice length to the total length
  let proportion = spliceLength / length;

  // Calculate the height of the inner trapezoid
  let innerHeight = proportion * length;

  // Calculate the y-coordinate for the top and bottom of the inner trapezoid
  let innerTopY = length * scale - innerHeight * scale;
  let innerBottomY = length * scale;

  // Calculate the width of the top and bottom lines of the inner trapezoid
  let topWidth = cutDepthStart * scale;
  let bottomWidth = cutDepthEnd * scale;

  // Determine the scale for this canvas based on the length input and the height of the canvas
  let scale2 = canvas2.height / length;
  
// Calculate the top Y-coordinate for the triangle (it should be vertically centered)
 
  
  // Draw the outer trapezoid
  ctx2.fillStyle = pattern; // set the fillStyle to the pattern
  ctx2.beginPath();
  ctx2.moveTo((canvas2.width / 2) - (finalTopDiameter / 2 * scale2 * 1.6), 0);
  ctx2.lineTo((canvas2.width / 2) + (finalTopDiameter / 2 * scale2 * 1.6), 0);
  ctx2.lineTo((canvas2.width / 2) + (finalBottomDiameter / 2 * scale2 * 1.6), length * scale2);
  ctx2.lineTo((canvas2.width / 2) - (finalBottomDiameter / 2 * scale2 * 1.6), length * scale2);
  ctx2.closePath();
  ctx2.fill();
  ctx2.stroke();
  
  // Get the current input values for final triangle width and height
	

	// Calculate the scaled width and height
  let scaledTriangleHeight = finalTriangleHeight * scale2;
let scaledTriangleWidth = finalTriangleWidth * scale2;

	// Calculate the vertices of the triangle
	let leftX = (canvas2.width - scaledTriangleWidth) / 2;
	let rightX = (canvas2.width + scaledTriangleWidth) / 2;
	let baseY = (length * scale2) - scaledTriangleHeight;
	let topY = length * scale2;
	
	// Calculate the top Y-coordinate for the triangle (it should be docked at the bottom)
let triangleTopY = length * scale2 - scaledTriangleHeight;

	
	

// Draw the triangle
ctx2.fillStyle = "black"; // set the fillStyle to red for visibility
  ctx2.beginPath();
  ctx2.moveTo(canvas2.width / 2, triangleTopY);
  ctx2.lineTo((canvas2.width / 2) - (scaledTriangleWidth / 2), triangleTopY + scaledTriangleHeight);
  ctx2.lineTo((canvas2.width / 2) + (scaledTriangleWidth / 2), triangleTopY + scaledTriangleHeight);
  ctx2.closePath();
  ctx2.stroke();
  ctx2.fill();
  
  console.log('finalTriangleHeight:', finalTriangleHeight);
console.log('finalTriangleWidth:', finalTriangleWidth);
console.log('scale2:', scale2);
console.log('scaledTriangleHeight:', scaledTriangleHeight);
console.log('scaledTriangleWidth:', scaledTriangleWidth);
console.log('triangleTopY:', triangleTopY);
}

// Attach event listeners to the input fields
finalTopDiameterInput.addEventListener('input', drawCue2);
finalBottomDiameterInput.addEventListener('input', drawCue2);
lengthInput.addEventListener('input', drawCue2);
spliceLengthInput.addEventListener('input', drawCue2);
document.getElementById('finalTriangleWidth').addEventListener('input', drawCue2);
document.getElementById('finalTriangleHeight').addEventListener('input', drawCue2);



function calculateCutDimensions(length, topDiameter, bottomDiameter, cutLength, cutDepthStart, cutDepthEnd, finalTopDiameter, finalBottomDiameter) {
  // Calculate the slope of the dowel's taper
  let taperSlope = (bottomDiameter - topDiameter) / length;

  // Calculate the dimensions of the initial cut
  let initialCut = {
    topWidth: Math.max(0, 2 * cutDepthStart),
    bottomWidth: Math.max(0, 2 * cutDepthEnd),
    height: Math.max(0, cutLength)
  };

  // Calculate the dimensions of the final cut
  let finalCut = {
    topWidth: Math.max(0, 2 * (cutDepthStart - (topDiameter - finalTopDiameter) / 2)),
    bottomWidth: Math.max(0, 2 * (cutDepthEnd - (bottomDiameter - finalBottomDiameter) / 2)),
    height: Math.max(0, cutLength * (finalBottomDiameter / bottomDiameter))
  };

  return { initialCut, finalCut };
}

function updateCalculations() {
  let length = parseFloat(document.getElementById('length').value);
  let topDiameter = parseFloat(document.getElementById('topDiameter').value);
  let bottomDiameter = parseFloat(document.getElementById('bottomDiameter').value);
  let cutLength = parseFloat(document.getElementById('cutLength').value);
  let cutDepthStart = parseFloat(document.getElementById('cutDepthStart').value);
  let cutDepthEnd = parseFloat(document.getElementById('cutDepthEnd').value);
  let finalTopDiameter = parseFloat(document.getElementById('finalTopDiameter').value);
  let finalBottomDiameter = parseFloat(document.getElementById('finalBottomDiameter').value);
  let dimensions = calculateCutDimensions(length, topDiameter, bottomDiameter, cutLength, cutDepthStart, cutDepthEnd, finalTopDiameter, finalBottomDiameter);
  document.getElementById('initialTriangleHeight').textContent = dimensions.initialCut.height;
  document.getElementById('initialTriangleWidth').textContent = dimensions.initialCut.bottomWidth;
  document.getElementById('finalTriangleHeight').textContent = dimensions.finalCut.height;
  document.getElementById('finalTriangleWidth').textContent = dimensions.finalCut.bottomWidth;
}


document.getElementById('dowelForm').addEventListener('input', updateCalculations);

// Draw once on page load
drawCue();
drawCue2();
updateCalculations();