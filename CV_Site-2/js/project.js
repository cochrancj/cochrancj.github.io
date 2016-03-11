$(document).ready(function(){

  $(".nav-button-about").click(function() {
    $("#toggle_about").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".nav-button-cv").click(function() {
    $("#toggle_cv").toggle(1000);
    $(".jumbotron").toggleClass("extralarge");
  });

  $(".nav-button-design").click(function() {
    $("#toggle_design").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".nav-button-photography").click(function() {
    $("#toggle_photography").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });

  $(".nav-button-writing").click(function() {
    $("#toggle_writing").toggle(1000);
    $(".jumbotron").toggleClass("large");
  });




  // FIX JQUERY SO THAT WHEN YOU CLICK SOMETHING ELSE,
  // THE DIV THAT IS EXPANDED COLLAPSES SO THE 
  // NEW DIV CAN EXPAND. THIS DOES NOT WORK, BUT I 
  // THINK IS CLOSE TO WORKING vv

  //   $(".jumbotron").click(function (e) {
  //       if(e.target.className == "large" || "extralarge") {        
  //            e.stopPropagation();
  //       }
  //       else {
  //           $("*").removeClass("large" || "extralarge");
  //       }
  //   }); 

  // THIS ALSO DOESN'T WORK vv

  //   $(".nav-button-about").click(function() {
  //   $("#toggle_about").toggle(1000);
  //   $(".jumbotron").toggleClass("large");
  //   if ($(e.target).is(".jumbotron") === false) {
  //     $(".jumbotron").removeClass("large");
  //   }
  // });

});