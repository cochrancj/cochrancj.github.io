$(document).ready(function () {

var total = 0;

// Add 10 Event
$('#a10').click(add10);

function add10 () {
  total = total + 10
  $('#out').text(total)
}
// End Add 20 Event

$('#a20').click(add20);

function add20 () {
  total = total + 20
  $('#out').text(total)
}
// End Add 20 Event

$('#a30').click(add30);

function add30 () {
  total = total + 30
  $('#out').text(total)
}
// End Add 30 Event

$('#n10').click(minus10);

function minus10 () {
  total = total - 10
  $('#out').text(total)
}
// End Minus 10 Event

$('#n20').click(minus20);

function minus20 () {
  total = total - 20
  $('#out').text(total)
}
// End Minus 20 Event

$('#n30').click(minus30);

function minus30 () {
  total = total - 30
  $('#out').text(total)
}
// End Minus 30 Event

$('#red').click(turnRed);

function turnRed () {
  $('#red').toggleClass('on');
}
// End Turn Red Event

$('#blue').click(turnBlue);

function turnBlue () {
  $('#blue').toggleClass('on');
}
// End Turn Blue Event

})













 

