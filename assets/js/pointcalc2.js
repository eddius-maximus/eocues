// Get references to the input fields
let startingDiameterInput = document.getElementById('startingDiameter');
let endingDiameterInput = document.getElementById('endingDiameter');
let lengthInput = document.getElementById('length');
let spliceLengthInput = document.getElementById('lengthOfSplice');
let startDepthInput = document.getElementById('startDepth');
let endDepthInput = document.getElementById('endDepth');
let finalStartingDiameterInput = document.getElementById('finalStartingDiameter');
let finalEndingDiameterInput = document.getElementById('finalEndingDiameter');

// Get reference to the output field
let pointReductionOutput = document.getElementById('pointReduction');

// Get reference to the canvas
let canvas = document.getElementById('cueCanvas');
let ctx = canvas.getContext('2d');

// Define the scale
const scale = 25;

// Function to draw the cue
function drawCue() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get the current input values
  let startingDiameter = parseFloat(startingDiameterInput.value);
  let endingDiameter = parseFloat(endingDiameterInput.value);
  let length = parseFloat(lengthInput.value);
  let spliceLength = parseFloat(spliceLengthInput.value);
  let startDepth = parseFloat(startDepthInput.value);
  let endDepth = parseFloat(endDepthInput.value);
  let finalStartingDiameter = parseFloat(finalStartingDiameterInput.value);
  let finalEndingDiameter = parseFloat(finalEndingDiameterInput.value);
  let offset = (endingDiameter - startingDiameter) / 2;

  // Calculate the taper
  let taper = (endingDiameter - startingDiameter) / length;

  // Calculate the point reduction
  let pointReduction = ((finalStartingDiameter - startingDiameter) + (finalEndingDiameter - endingDiameter)) / 2 * taper * spliceLength;

  // Display the point reduction
  pointReductionOutput.innerText = pointReduction;

  // Calculate the width of the bottom of the trapezoid
  let bottomWidth = Math.sqrt(2) * endDepth * scale;

  // Calculate the proportion of the splice length to the total length
  let proportion = spliceLength / length;

  // Calculate the height of the inner trapezoid
  let innerHeight = proportion * length * scale;

  // Calculate the y-coordinate for the top and bottom of the inner trapezoid
  let innerTopY = (length - innerHeight / scale) * scale;
  let innerBottomY = length * scale;

  // Draw the outer trapezoid
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo((canvas.width / 2) - (startingDiameter / 2 * scale), 0);
  ctx.lineTo((canvas.width / 2) + (startingDiameter / 2 * scale), 0);
  ctx.lineTo((canvas.width / 2) + (endingDiameter / 2 * scale), length * scale);
  ctx.lineTo((canvas.width / 2) - (endingDiameter / 2 * scale), length * scale);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // Draw the inner trapezoid
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo((canvas.width / 2) - (bottomWidth / 2), innerTopY);
  ctx.lineTo((canvas.width / 2) + (bottomWidth / 2), innerTopY);
  ctx.lineTo((canvas.width / 2) + (endingDiameter / 2 * scale), innerBottomY);
  ctx.lineTo((canvas.width / 2) - (endingDiameter / 2 * scale), innerBottomY);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

// Attach event listeners to the input fields
startingDiameterInput.addEventListener('input', drawCue);
endingDiameterInput.addEventListener('input', drawCue);
lengthInput.addEventListener('input', drawCue);
spliceLengthInput.addEventListener('input', drawCue);
startDepthInput.addEventListener('input', drawCue);
endDepthInput.addEventListener('input', drawCue);
finalStartingDiameterInput.addEventListener('input', drawCue);
finalEndingDiameterInput.addEventListener('input', drawCue);
