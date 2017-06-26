$("nav a").on("click", function(){
  $("nav a").removeClass("current");
  $(this).addClass("current");
  var nextSlide = $(this).index();
  $(".slide.current").fadeOut(500, function(){
      $(".slide.current").removeClass("current");
      $(".slide")
        .eq(nextSlide)
        .attr("style", "")
        .addClass("current");
  });
});

// $("nav a").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $(this).addClass("current");
//   $(".slide").eq($(this).index()).addClass("current");
// });

// $("nav a").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $(this).addClass("current");
//   var nextSlide = $(this).index();
//   console.log("The next slide will be: " + nextSlide);
//   $(".slide").eq(nextSlide).addClass("current");
// });

// Brute Force Method:
// $("#link1").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $("#link1").addClass("current");
//   $("#slide1").addClass("current");
// });

// $("#link2").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $("#link2").addClass("current");
//   $("#slide2").addClass("current");
// });

// $("#link3").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $("#link3").addClass("current");
//   $("#slide3").addClass("current");
// });

// $("#link4").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $("#link4").addClass("current");
//   $("#slide4").addClass("current");
// });

// $("#link5").on("click", function(){
//   $("nav a").removeClass("current");
//   $(".slide").removeClass("current");
//   $("#link5").addClass("current");
//   $("#slide5").addClass("current");
// });