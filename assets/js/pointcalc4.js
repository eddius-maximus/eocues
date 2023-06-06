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
  drawShapes(dimensions);
}


function drawShapes(dimensions) {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Scale factor for converting inches to pixels
  let scaleFactor = 50;

  // Vertical offset to ensure the shapes are fully visible
  let verticalOffset = 50;

  // Calculate the y-coordinate of the top and bottom of the trapezoids
  let initialTopY = verticalOffset;
  let initialBottomY = dimensions.initialCut.height * scaleFactor + verticalOffset;
  let finalTopY = verticalOffset;
  let finalBottomY = dimensions.finalCut.height * scaleFactor + verticalOffset;

  // Calculate the x-coordinate of the left and right edges of the trapezoids
  let initialLeftX = (canvas.width - dimensions.initialCut.bottomWidth * scaleFactor) / 2;
  let initialRightX = (canvas.width + dimensions.initialCut.bottomWidth * scaleFactor) / 2;
  let finalLeftX = (canvas.width - dimensions.finalCut.bottomWidth * scaleFactor) / 2;
  let finalRightX = (canvas.width + dimensions.finalCut.bottomWidth * scaleFactor) / 2;

  // Draw the initial trapezoid
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(initialLeftX, initialTopY);
  ctx.lineTo(initialRightX, initialTopY);
  ctx.lineTo(finalRightX, initialBottomY);
  ctx.lineTo(finalLeftX, initialBottomY);
  ctx.closePath();
  ctx.stroke();

  // Draw the final trapezoid
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(finalLeftX, finalTopY);
  ctx.lineTo(finalRightX, finalTopY);
  ctx.lineTo(finalRightX, finalBottomY);
  ctx.lineTo(finalLeftX, finalBottomY);
  ctx.closePath();
  ctx.stroke();
}











document.getElementById('dowelForm').addEventListener('input', updateCalculations);
