 function drawTrapezoid(length, topDiameter, bottomDiameter) {
      let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate the height of the trapezoid
      let height = length;

      // Calculate the width of the top and bottom edges of the trapezoid
      let topWidth = topDiameter * canvas.width;
      let bottomWidth = bottomDiameter * canvas.width;

      // Calculate the coordinates of the trapezoid vertices
      let topX1 = (canvas.width - topWidth) / 2;
      let topX2 = (canvas.width + topWidth) / 2;
      let bottomX1 = (canvas.width - bottomWidth) / 2;
      let bottomX2 = (canvas.width + bottomWidth) / 2;
      let y = canvas.height - height;

      // Draw the trapezoid
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(topX1, y);
      ctx.lineTo(topX2, y);
      ctx.lineTo(bottomX2, y + height);
      ctx.lineTo(bottomX1, y + height);
      ctx.closePath();
      ctx.stroke();
    }

    // Get the input elements
    let lengthInput = document.getElementById('length');
    let topDiameterInput = document.getElementById('topDiameter');
    let bottomDiameterInput = document.getElementById('bottomDiameter');

    // Attach event listeners to update the canvas when inputs change
    lengthInput.addEventListener('input', updateCanvas);
    topDiameterInput.addEventListener('input', updateCanvas);
    bottomDiameterInput.addEventListener('input', updateCanvas);

    function updateCanvas() {
      let length = parseFloat(lengthInput.value);
      let topDiameter = parseFloat(topDiameterInput.value);
      let bottomDiameter = parseFloat(bottomDiameterInput.value);
      drawTrapezoid(length, topDiameter, bottomDiameter);
    }

    // Initial canvas update
    updateCanvas();