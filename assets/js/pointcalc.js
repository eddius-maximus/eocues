document.getElementById('calculateButton').addEventListener('click', function() {
    let startDiameter = parseFloat(document.getElementById('startDiameter').value);
    let endDiameter = parseFloat(document.getElementById('endDiameter').value);
    let lengthOfForearm = parseFloat(document.getElementById('lengthOfForearm').value);
    let lengthOfSplice = parseFloat(document.getElementById('lengthOfSplice').value);
    let startDepthOfSplice = parseFloat(document.getElementById('startDepthOfSplice').value);
    let endDepthOfSplice = parseFloat(document.getElementById('endDepthOfSplice').value);

    let slope = (endDiameter - startDiameter) / lengthOfForearm;
    let startSpliceDiameter = startDiameter + slope * 2;
    let endSpliceDiameter = startDiameter + slope * lengthOfSplice;
    let spliceDiameterReduction = (endSpliceDiameter - startSpliceDiameter) / 2;

    let reduction = (startDepthOfSplice + endDepthOfSplice) / 2 - spliceDiameterReduction;
    document.getElementById('result').innerText = "Point reduction: " + reduction.toFixed(2) + " inches";
});