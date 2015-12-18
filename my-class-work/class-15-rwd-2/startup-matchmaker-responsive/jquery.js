$(document).ready(function () {

  $("#icon").click (function () {
    $("#small-nav").slideToggle()
  })

  $(window).resize(function () {

    if($(window).width() > 990) {
      $("#small-nav").hide()
    }
  })
})