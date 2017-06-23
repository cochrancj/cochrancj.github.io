$("body").on("click", function(evt){
  var pacman = $("<img/>");
  pacman.attr("src", "img/pacman.png");
  pacman.css("left", evt.pageX);
  pacman.css("top", evt.pageY);
  $("body").append(pacman);
  pacman.animate({ "left": "100%" }, 3000);
});

$("#ghost1").animate({ left: "1000px" }, 3000, "easeOutElastic");
$("#ghost2").delay(3000).animate({ left: "1000px" }, 3000, "easeOutExpo");
$("#ghost3").delay(6000).animate({ left: "1000px" }, 3000, "easeOutBack");
$("#ghost4").delay(9000).animate({ left: "1000px" }, 3000, "easeOutBounce");