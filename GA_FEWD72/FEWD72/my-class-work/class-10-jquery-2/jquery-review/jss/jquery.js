$(document).ready(function () {

  $('.box')
    .css('background-color', 'pink')
    .text('boxes! boxes everywhere!')

  $('#box-one').click(increaseBoxOne)
  $('#box-two').click(increaseBoxTwo)

  function increaseBoxOne () {
    $("#box-one").css({'height': '500px', 'width': '500px'})
  }

  function increaseBoxTwo () {
    $("#box-two").css({'height': '300px', 'width': '300px'})
  } 
})


