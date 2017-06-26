$(document).ready(function(){
  $(".product").click(function(evt){
    evt.preventDefault();
    $(this).find("a").trigger("click");
  });

  $(".product a").click(function(evt){
    evt.preventDefault();
    $("#overlay").show();
    $(""+$(this).attr("href")).show();
  });

  $("#overlay-close").click(function(evt){
    evt.preventDefault();
    $("#overlay").hide();
    $("#overlay-content > div").hide(); 
  });
});