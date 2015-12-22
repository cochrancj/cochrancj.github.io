




// vvvv ROTATE BANNER (BROKEN)vvvv --- WHY??
// should I make each banner element an image instead of a class?

// I only want the text to change when the banner goes
// to the next slide. Should I make only the text rotate, 
// or make the whole thing rotate? 


$(document).ready(function () {

  $("#slider > div:gt(0)").hide();
  
  $("#slider").height($("#slider > div > blurb").height());
  // setInterval(function () {
    $("#slider > div: first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slider");
  // }, 3000);
  })

things = $('.rotate');
$(things[Math.floor(Math.random()*things.length)]).click()

// this should return a random element 
// by clicking on something in the div 
// of class (example has 10 links in 
//   that div and wanted to spit a 
//   random link per click).

// rename my dice as elements in a div.
})

// THIS IS AN EXAMPLE OF A ROTATING BANNER: 

// https://jsfiddle.net/y5tgumdo




// -------------

// vvvv ARRAY (BROKEN) vvvv  ---- WHY??

$(document).ready(function () {
  $("rotate").click(function () {
    var recipe = ["ingredient-image", "protein-expanded", "bulk-veg-expanded", "accent-veg-expanded", "cook-style-expanded", "flavor-profile-expanded"];
    $("#recipe").innerHtml = recipe;
  })
})



// THIS IS AN EXAMPLE OF AN ARRAY:
// <p id="demo"></p>

// <script>
// var cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;
// </script>