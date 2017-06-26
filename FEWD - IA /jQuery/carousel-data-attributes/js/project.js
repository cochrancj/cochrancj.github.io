$("nav a").on("click", function(){
  $("nav a").removeClass("current");
  $(this).addClass("current");
  $(".slide").removeClass("current");
  var slideId = $(this).data("slide");
  $(".slide#"+slideId).addClass("current");
});

