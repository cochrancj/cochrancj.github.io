$(document) .ready(function () {
//   $("submit").click(function () {
//     $("matchBox") .animate ({
//       height: 'toggle'
//     });
//   });
// });

// why is this box not toggling off?
// I wanted it to only be viewable
// after login - I also wanted to 
// put the match percent stuff in
// here after login, but couldn't
// figure out how to do that. 

// $( "submit" ).click(function() {
//   $( "matchBox" ).slideToggle( "slow", function() {

//   });
// });

// $("submit").click(function() {
//   $("submit").not(this).next("matchBox").slideup("slow");
//   $(this).next("matchBox").slideToggle("slow");
// });

$(".submit").click(function(){
  $(".submit").not(this).next(".toggle").slideUp("slow");
  $(this).next(".toggle").slideToggle("slow");
});

// In this one, why is this not 
// working? The console says it's
// working fine. This: http://jsfiddle.net/CkTRa/395/
// is where I got the example code from to build off of

  $(".message").click(function() {
    $("loggedIn").hide("slow", function() {
      alert("I'd love for this to be a pretty box where you could Send Him A Message");
    });
  });
});

// W.T.EVERLOVING F? Why is *this* one
// not working? Console says it's 
// fine. Example I pulled from: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_callback

$(".join").click(function(){
      alert("One Of Us! One Of Us!");
})
// LIFE IS BAD AND EVERYTHING IS BROKEN

})


