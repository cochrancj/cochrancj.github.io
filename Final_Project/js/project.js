$(document).ready(function () {

  $('.proteinDie').click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
    $(this).siblings().addClass('fade');
    // $('.one').hide();
    // $('.two').show();
    // $('.three').hide();
    // $('.four').hide();
    // $('.five').hide();
  })

  $('.bulkVegDie').click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
    $(this).siblings().addClass('fade');
    // $('.one').hide();
    // $('.two').hide();
    // $('.three').show();
    // $('.four').hide();
    // $('.five').hide();
  })

  $("img[id='proteinDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
    // $('.one').hide();
    // $('.two').hide();
    // $('.three').hide();
    // $('.four').show();
    // $('.five').hide();
  })

  $("img[id='bulkVegDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
    // $('.one').hide();
    // $('.two').hide();
    // $('.three').hide();
    // $('.four').hide();
    // $('.five').show();
  })

  $("img[id='accentVegDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  $("img[id='cookTypeDie']").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")
  })

  // ==========================================================

  // THIS CODE WORKS -- WHEN YOU CLICK ON THE FLAVOR PROFILE DIE, THE IMAGE SWITCHES 

  $("#proteinDie").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")

// ALSO IN THE REALM OF WORKING -- THIS CODE LOOKS TO SEE IF ANYTHING IS WRITTEN IN THE FLAVOR PROFILE OUTPUT DIV
// (WHICH IS EMPTY IF THE DIE HASNT BEEN CLICKED)

// THIS SAYS THAT IF THE LENGTH OF THE OUTPUTS CHILDREN IS 0, ADD A RANDOM ELEMENT FROM THIS ARRAY. ADD IT TO THE
// FLAVOR PROFILE DIV
    //
    if ($("#protein-source-output").children().length == 0) {
      var proteinTypes = [
        '<div class="ingredient-image"><img src="images/Chicken.jpg" alt="This is a line drawing of a Chicken leg"></div><div class="option-expanded"><span class="yellow">Chicken</span> <p>Start with boneless, skinless chicken breasts or thighs. If your cooking style is sautee, stir-fry, or soup; cut into bite-sized pieces before cooking. If your cooking style is braise, roast or slow cook; leave whole. Whatever cooking method is chosen, take care to cook the chicken all the way through.</p></div>',
        '<div class="ingredient-image"><img src="images/Meatball-Outline.jpg" alt="This is a line drawing of meatballs"></div><div class="option-expanded"><span class="brown">Meatballs</span><p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Steak-Outline.jpg" alt="This is a line drawing of a steak or pork chop"></div><div class="option-expanded"><span class="pink">Steaks or Pork Chops</span> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>',
        '<div class="ingredient-image"><img src="images/Ground-Meat-Outline.jpg" alt="This is a line drawing of ground meat"></div><div class="option-expanded"><span class="brown">Ground Meat</span><p>Start with 1 lb. of your favorite ground meat. Add the seasonings from your cooking method. </p> <p>If your cooking style is sautee, soup or stir-fry, brown your meat first, before adding veggies. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p></div>',
        '<div class="ingredient-image"><img src="images/Sausages-Outline.jpg" alt="This is a line drawing of sausage"></div><div class="option-expanded"><span class="brown">Sausage</span> <p>Start with 1 lb. of your favorite sausage. Hot Italian is great with Pizza flavorings&#59; bulk pork sausage (usually unseasoned) is a great neutral sausage for Mexican, Buffalo, Pizza or French seasonings&#59; chicken sausages are great in any seasoning&#59; Chorizo is great in both Thai and Mexican seasonings.</p> <p>If your cooking style is sautee, soup or stir-fry, prick with a fork and cook first (before adding your veggies). Make sure to brown and cook through. </p> <p>If your cooking style is braise or roast, prick with a fork, add to the pan with the rest of the ingredients and roast. Just make sure the sausages are cooked through. </p> <p>In general, sausages on the stove take about 10 - 15 minutes over medium-high heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Meat-Roast-Outline.jpg" alt="This is a line drawing of a pork shoulder or beef roast"> </div><div class="option-expanded"><span class="pink">Roast Beast</span> <p>Start with a 2 - 5 lb. boneless hunk of meat. Pork shoulder or butt&#59; beef chuck roast or pot roast.</p> <p>If your cooking style is sautee, soup or stir-fry, cube into bite-sized pieces. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Roast  </p> <p>If your cooking style is slow cook, you&#39;re in luck! This type of meat is perfect for the crock pot. Just sprinkle with salt, pepper and/or your favorite spice blend, and set on high 4 - 6 hours.</p></div>'
      ];
      var randomNum = Math.floor(Math.random() * proteinTypes.length);

      $("#protein-source-output").append(proteinTypes[randomNum]);
    }
  })

// ===================================================================================

  $("#bulkVegDie").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")

    if ($("#bulk-veg-output").children().length == 0) {
      var bulkVegTypes = [
        '<div class="ingredient-image"><img src="images/Cabbage-Outline.jpg" alt="This is a line drawing of cabbage"></div><div class="option-expanded"><span class="green">Cabbage Noodles</span><p>To make cabbage "noodles", Halve and core your cabbage and cut into 1/4 to 1/2 inch thick ribbons. If your cooking style is sautee or stir-fry, add the noodles after the protein is cooked through. If your cooking style is brasie, soup, roast or slow cook, add at the beginning with everything else.</p></div>',
        '<div class="ingredient-image"><img src="images/Meatball-Outline.jpg" alt="This is a line drawing of meatballs"></div><div class="option-expanded"><h3>Meatballs</h3><p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Steak-Outline.jpg" alt="This is a line drawing of a steak or pork chop"></div><div class="option-expanded"><h3>Steaks or Pork Chops</h3> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>',
      ];
      var randomNum = Math.floor(Math.random() * bulkVegTypes.length);

      $("#bulk-veg-output").append(bulkVegTypes[randomNum]);
    }
  })

// ===================================================================================

  $("#accentVegDie").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")

    if ($("#accent-veg-output").children().length == 0) {
      var accentVegTypes = [
        '<div class="ingredient-image"><img src="images/Cabbage-Outline.jpg" alt="This is a line drawing of cabbage"></div><div class="option-expanded"><span class="green">Cabbage Noodles</span><p>To make cabbage "noodles", Halve and core your cabbage and cut into 1/4 to 1/2 inch thick ribbons. If your cooking style is sautee or stir-fry, add the noodles after the protein is cooked through. If your cooking style is brasie, soup, roast or slow cook, add at the beginning with everything else.</p></div>',
        '<div class="ingredient-image"><img src="images/Meatball-Outline.jpg" alt="This is a line drawing of meatballs"></div><div class="option-expanded"><h3>Meatballs</h3><p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Steak-Outline.jpg" alt="This is a line drawing of a steak or pork chop"></div><div class="option-expanded"><h3>Steaks or Pork Chops</h3> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>',
      ];
      var randomNum = Math.floor(Math.random() * accentVegTypes.length);

      $("#accent-veg-output").append(accentVegTypes[randomNum]);
    }
  })

// ===================================================================================

  $("#cookTypeDie").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")

    if ($("#cook-type-output").children().length == 0) {
      var cookTypeTypes = [
        '<div class="ingredient-image"><img src="images/Wok-Outline.jpg" alt="This is a line drawing of a wok"></div><div class="option-expanded"><span class="black">Stir-Fry</span> <p>Grab a wok or your largest and heaviest frying pan. Set the heat to high, and add a couple Tablespoons of a fat with a high smoke point (sesame oil is great for Asian style cooking; grapeseed or avocado oil is a nice neutral base for other cooking types). When the pan is hot (almost smoking), add your ingredients. Take care to continually stir your food to avoid burning. Your dinner is done when your protein is cooked through and your veggies are softened and browned in spots.</p></div>',

        '<div class="ingredient-image"><img src="images/broccoli-outline.jpg" alt="This is a line drawing of broccoli"> </div><div class="option-expanded"><h3>Meatballs</h3> <p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.</p></div>',
        
        '<div class="ingredient-image"><img src="images/Steak-Outline.jpg" alt="This is a line drawing of a steak or pork chop"> </div><div class="option-expanded"><h3>Steaks or Pork Chops</h3> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides).</p>  <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness.</p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer.</p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side.</p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil.</p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>',
      
      ];
      var randomNum = Math.floor(Math.random() * cookTypeTypes.length);

      $("#cook-type-output").append(cookTypeTypes[randomNum]);
    }
  })

// ===================================================================================

  $("#flavorProfile").click(function() {
    $(this).attr("src", "images/Thick-Grey-Smiley3-D6.jpg")

// ALSO IN THE REALM OF WORKING -- THIS CODE LOOKS TO SEE IF ANYTHING IS WRITTEN IN THE FLAVOR PROFILE OUTPUT DIV
// (WHICH IS EMPTY IF THE DIE HASNT BEEN CLICKED)

// THIS SAYS THAT IF THE LENGTH OF THE OUTPUTS CHILDREN IS 0, ADD A RANDOM ELEMENT FROM THIS ARRAY. ADD IT TO THE
// FLAVOR PROFILE DIV
    //
    if ($("#flavor-profile-output").children().length == 0) {
      var flavorProfiles = [
        '<div class="ingredient-image"><img src="images/Thai.jpg" alt="this is the Thai flag"></div><div class="option-expanded"><span class="green">Thai</span><p>Juice of 1 lime<br> 2 Tbsp. Fish sauce (Red Boat brand is paleo-friendly)<br> 2 Tbsp. Coconut aminos<br> 1-2 Tbsp. sriracha<br> 2 cloves garlic, minced<br> 1/2 inch knob ginger, peeled and minced<br> 2 Tbsp. cilantro, chopped (optional)</p> <p>If you are sauteeing or stir-frying: Add the garlic and ginger before you add your protein and veggies. Let cook 1 - 2 minutes.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the fish sauce, lime juice, and coconut aminos). Let cook until the liquid has evaporated.</p> <p>Add the cilantro and sriracha after your dinner is cooked to its desired doneness.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Thai seasoning ingredients at the beginning of the cooking process. Use the lime juice, sriracha and cilantro as a garnish after your dish has been cooked.</p></div>',
        
        '<div class="ingredient-image"><img src="images/Meatball-Outline.jpg" alt="This is a line drawing of meatballs"></div><div class="option-expanded"><h3>Meatballs</h3><p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is sautee, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.  </p></div>',
        
        '<div class="ingredient-image"><img src="images/Steak-Outline.jpg" alt="This is a line drawing of a steak or pork chop"></div><div class="option-expanded"><h3>Steaks or Pork Chops</h3> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is sautee, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>'
      ];
      var randomNum = Math.floor(Math.random() * flavorProfiles.length);

      $("#flavor-profile-output").append(flavorProfiles[randomNum]);
    }
  })





 })

