$(document).ready(function(){

  $(".nav-button-about").click(function() {
    $("#toggle_about").toggle(1000);
    $(".jumbotron").addClass("large");
  });

  $(".nav-button-cv").click(function() {
    $("#toggle_cv").toggle(1000);
    $(".jumbotron").addClass("extralarge");
  });

  $(".nav-button-design").click(function() {
    $("#toggle_design").toggle(1000);
  });

  $(".nav-button-photography").click(function() {
    $("#toggle_photography").toggle(1000);
  });

  $(".nav-button-writing").click(function() {
    $("#toggle_writing").toggle(1000);
  });

});