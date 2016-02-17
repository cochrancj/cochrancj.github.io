document.getElementById('color-button').onclick = changeColor;

function changeColor () {
  var red = document.getElementById('red').value;
  var green = document.getElementById('green').value;
  var blue = document.getElementById('blue').value;

  var rgbString = 'rgb(' + red + ',' + green + ',' + blue + ')';
  document.body.style.backgroundColor = rgbString;

  document.getElementById('colorful-text').innerHTML = rgbString;
  
  console.log(rgbString);
}
