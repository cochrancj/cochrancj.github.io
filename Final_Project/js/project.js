$(document).ready(function () {

  $('.proteinDie').hover(function() {
    // $(this).addClass('selected');
    $(this).siblings().addClass('fade');
  }, function() {
    // $(this).removeClass('selected');
    $(this).siblings().removeClass('fade');
  });

  $('.bulkVegDie').click(function() {
    $('.bulkVegDie img').css("box-shadow", "0 0 20px rgba(98,192,33,0.4)")
    .slideUp(2000)
    .slideDown(2000);
  })

  $("img[id='proteinDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  $("img[id='bulkVegDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  $("img[id='accentVegDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  $("img[id='cookTypeDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  $("img[id='flavorProfile']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
 
// ======================================================
// ======================================================

  // THIS KIND OF WORKS, BUT IS NOT EXACTLY WHAT I NEED
  // + ADDS ON CLICK, BUT ADDS AN EXTRA WITH EACH CLICK
  // I ALSO DON'T WANT THIS TO BE A BULLETED LIST, BUT CAN'T
  // FIGURE OUT HOW TO GET IT OUT OF THAT FORMAT


  var flavorProfiles = [
      // "<span class="yellow">Chicken</span> <p>Start with boneless, skinless chicken breasts or thighs. If your cooking style is sautee, stir-fry, or soup; cut into bite-sized pieces before cooking. If your cooking style is braise, roast or slow cook; leave whole. Whatever cooking method is chosen, take care to cook the chicken all the way through.</p>",
      // "<h3>Meatballs</h3> <p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.  </p> </div>",
      // "<h3>Steaks or Pork Chops</h3> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p>",
      "Yes definitely",
      "You may rely on it",         
      "Very doubtful",            
   ];

   var answerIndex = Math.floor(Math.random() * flavorProfiles.length);
     if ($("#recipe ul") .length == 0) $("#recipe").html( "<ul></ul>"); 
            $("#recipe ul").append("<li>" + flavorProfiles[answerIndex] + "</li>");

// ======================================================
// ======================================================

 })




 })

