
  // @title: CSS3 Background Radial Progress Bars
  // @author: @geedmo 
  // @url: http://geedmo.com

  // OPTION 1

//   $(document).ready(function(){
// //Hide the tooglebox when page load
// $(".togglebox").hide();
// //slide up and down when click over heading 2
// $("h2").click(function(){
// // slide toggle effect set to slow you can set it to fast too.
// var x = $(this).next(".togglebox").css("display");  
// if(x=="block")
// $(this).text("+ Read More");
// else
// $(this).text("- Read More");
// $(this).next(".togglebox").slideToggle("slow");
// return true;
// });
// });

  // OPTION 2

  $(document).ready(function(){

    //Hide (Collapse) the toggle containers on load
    $(".toggle_container").hide(); 

    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $("h2.trigger").click(function(){
        $(this).toggleClass("active").next().slideToggle("slow");
        return false; //Prevent the browser jump to the link anchor
    });

});