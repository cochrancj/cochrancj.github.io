$(document).ready(function () {

  $('body').vegas({
    delay: 7000,
    timer: false,
    shuffle: true,
    transition: 'slideDown2',
    transitionDuration: 2000,
    slides: [
        { src: "images/Background-1.jpg" },
        { src: "images/Background-2.jpg" },
        { src: "images/Background-3.jpg" },
        { src: "images/Background-4.jpg" },
        { src: "images/Background-5.jpg" },
        { src: "images/Background-6.jpg" },
        { src: "images/Background-7.jpg" },
        { src: "images/Background-8.jpg" },
        { src: "images/Background-9.jpg" },
        { src: "images/Background-10.jpg" },
        { src: "images/Background-11.jpg" },
        { src: "images/Background-12.jpg" },
        { src: "images/Background-13.jpg" },
        { src: "images/Background-14.jpg" },
        { src: "images/Background-15.jpg" }
    ]
  });

  $.fn.scrollView = function () {
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top
          }, 1000);
    });
  }


  $("img[id='proteinDie']").click(function() {
    $(this).attr("src", "images/D6-Smiley-R.png")
    if ($("#protein-source-output").children().length == 0) {
      var proteinTypes = [
        '<div class="ingredient-image"><img src="images/Chicken.png" alt="This is a line drawing of a Chicken leg"></div><div class="option-expanded"><span class="yellow">Chicken</span> <p>Start with boneless, skinless chicken breasts or thighs. If your cooking style is saut&#233;, stir-fry, or soup; cut into bite-sized pieces before cooking. If your cooking style is braise, roast or slow cook; leave whole. Whatever cooking method is chosen, take care to cook the chicken all the way through.</p></div>',
        '<div class="ingredient-image"><img src="images/Meatballs.png" alt="This is a line drawing of meatballs"></div><div class="option-expanded"><span class="brown">Meatballs</span><p>Start with 1 lb. of your favorite ground meat. Add 2 cloves minced garlic, some of the spices called for in your cooking method (1/2 to 1 tsp. of each), a generous pinch Kosher salt, a few cracks black pepper, and a mixture of 1.5 tsp. baking soda mixed with 1 tsp. warm water. Mix well by hand and roll into ping pong  sized balls. </p> <p>If your cooking style is saut&#233;, soup or stir-fry, cook first (before adding your vaggies). Make sure to brown your meatballs and cook through. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p> <p>In general, meatballs on the stove take about 10 - 15 minutes over medium-high heat. In the oven, meatballs take about 25 minutes in 375 degree (F) heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Steak-Chops.png" alt="This is a line drawing of a steak or pork chop"></div><div class="option-expanded"><span class="pink">Steaks or Chops</span> <p>Start with 1/2 to 1 inch thick pork chops (boneless if possible) or a similarly thick steak. Pull out of the fridge 15 to 30 minutes before cooking and season liberally with Kosher salt, black pepper and/or your favorite seasoning blend (on both sides). </p> <p>If your cooking method is saut&#233;, cook over medium-high heat in 2 Tbsp. of your favorite high smoke point fat (pork fat, coconut oil or avocado oil are my favorites) until browned on each side and cooked to desired doneness. </p> <p>If your cooking method is stir-fry, cut into bite-sized pieces and throw in after the aromatics if you want your meat more well done, and after the veggies if you want your meat rarer. </p> <p>If your cooking method is roast, broiling steaks and chops is easy. Just move the top rack of your oven up to the highest slat, and put your meat on a cookie sheet. For a rare steak, broil 2 - 3 minutes per side. For medium pork, broil 3 - 4 minutes per side. </p> <p>If your cooking method is braise, I would swap chops out for a pork loin and steak for a london broil. </p> <p>If your cooking method is soup or slow cook, I would swap out steak for stew meat and pork chops for pork loin.</p></div>',
        '<div class="ingredient-image"><img src="images/Ground-Meat.png" alt="This is a line drawing of ground meat"></div><div class="option-expanded"><span class="red">Ground Meat</span><p>Start with 1 lb. of your favorite ground meat. Add the seasonings from your cooking method. </p> <p>If your cooking style is saut&#233;, soup or stir-fry, brown your meat first, before adding veggies. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Just make sure your meatballs are cooked through. </p></div>',
        '<div class="ingredient-image"><img src="images/Sausage.png" alt="This is a line drawing of sausage"></div><div class="option-expanded"><span class="brown">Sausage</span> <p>Start with 1 lb. of your favorite sausage. Hot Italian is great with Pizza flavorings&#59; bulk pork sausage (usually unseasoned) is a great neutral sausage for Mexican, Buffalo, Pizza or French seasonings&#59; chicken sausages are great in any seasoning&#59; Chorizo is great in both Thai and Mexican seasonings.</p> <p>If your cooking style is saut&#233;, soup or stir-fry, prick with a fork and cook first (before adding your veggies). Make sure to brown and cook through. </p> <p>If your cooking style is braise or roast, prick with a fork, add to the pan with the rest of the ingredients and roast. Just make sure the sausages are cooked through. </p> <p>In general, sausages on the stove take about 10 - 15 minutes over medium-high heat.</p></div>',
        '<div class="ingredient-image"><img src="images/Roast-Beast.png" alt="This is a line drawing of a pork shoulder or beef roast"> </div><div class="option-expanded"><span class="pink">Roast Beast</span> <p>Start with a 2 - 5 lb. boneless hunk of meat. Pork shoulder or butt&#59; beef chuck roast or pot roast.</p> <p>If your cooking style is saut&#233;, soup or stir-fry, cube into bite-sized pieces. </p> <p>If your cooking style is braise or roast, add to the pan with the rest of the ingredients and roast. Roast  </p> <p>If your cooking style is slow cook, you&#39;re in luck! This type of meat is perfect for the crock pot. Just sprinkle with salt, pepper and/or your favorite spice blend, and set on high 4 - 6 hours.</p></div>'
      ];
      var randomNum = Math.floor(Math.random() * proteinTypes.length);

      $("#protein-source-output").append(proteinTypes[randomNum]);
    }
  });

  $("img[id='proteinDie']").click(function (event) {
    event.preventDefault();
      $("#protein-source-output").scrollView();
  });


  $("img[id='bulkVegDie']").click(function() {
    $(this).attr("src", "images/D6-Smiley-C.png")
    if ($("#bulk-veg-output").children().length == 0) {
      var bulkVegTypes = [
        '<div class="ingredient-image"><img src="images/Cabbage.png" alt="This is a line drawing of cabbage"></div><div class="option-expanded"><span class="lightgreen">Cabbage Noodles</span><p>To make cabbage "noodles", Halve and core your cabbage and cut into 1/4 to 1/2 inch thick ribbons. If your cooking style is saut&#233; or stir-fry, add the noodles after the protein is cooked through. If your cooking style is brasie, soup, roast or slow cook, add at the beginning with everything else.</p></div>',
        '<div class="ingredient-image"><img src="images/Potatoes.png" alt="This is a line drawing of potatoes"></div><div class="option-expanded"><span class="brown">Potatoes</span><p>The easiest way to handle potatoes, is to peel and dice them. Dicing (small cubes) works well with all cooking methods, takes the lest time, and is easy.</p></div>',
        '<div class="ingredient-image"><img src="images/Cauliflower.png" alt="This is a line drawing of cauliflower"></div><div class="option-expanded"><span class="grey">Cauliflower Rice</span> <p>Cauliflower "rice" is easy to make, and adds bulk to an otherwise slack meal. To make, take the leaves off your head of cauliflower, quarter and cut the tough core out. To process into rice-sized pieces, either use a box cheese grater - or, if you&#039;re not into hard labor, slice each quarter into smaller pieces and break down in your food processor. You may need to do this in batches, depending upon how large your processor is. </p><p> Once your cauliflower is broken down into rice-sized pieces, it&#039;s time to cook. You can steam for 5-10 minutes (wring dry in a clean tea towel afterward so you don&#039;t have a sopping wet mess), saut&#233; in 1 - 2 Tablespoons of fat 5 - 10 minutes or until browned in spots, or slap into a bowl, cover with saran wrap, and nuke 5 - 10 minutes to soften. Whichever method you pick, cook your cauliflower rice separately from the rest of your dish.</p></div>',
        '<div class="ingredient-image"><img src="images/Zoodle.png" alt="This is a line drawing of zucchini pasta"></div><div class="option-expanded"><span class="green">Zoodles</span><p>Zoodles are a fantastic substitute for pasta. To make, you can either purchase a spiralizer (my personal favorite works like a large pencil sharpener), or you can make flat ribbons using your vegetable peeler. The safest way to make this type of noodle is to lay your zucchini on the counter, place your peeler at one end and slowly drag it to the other end as evenly as possible. When your zucchini ribbons quit coming off the core nicely, flip to one of the other sides.</p><p>To cook, throw into your cooking method in the last 2 - 3 minutes unless you&#039;ve drawn slow cook, braise or roast. If you&#039;drawn one of those three options, saut&#233; in a large pan over medium-high heat for 2 - 3 minutes with a pat of butter or dash of other fat.</p></div>',
        '<div class="ingredient-image"><img src="images/Butternut-Squash.png" alt="This is a line drawing of squash"></div><div class="option-expanded"><span class="orange">Squash Puree</span><p>Hard Winter squashes make a fantastic puree to bulk out a meal. You can use butternut squash (the easiest to deal with), acorn squash, any pumpkin variety, or pretty much any other squash in the store. To make butternut squash puree, use your vegetable peeler to take the skin off your squash - be careful. This isn&#039;t the easiest thing in the world to do, but it isn&#039;t terribly hard after the first time you do it. Once your squash is peel-free, halve lengthwise and scoop out the little bit of seeds. Cube and either steam 5-10 minutes or zap in the microwave 10 minutes or so until soft. Puree with some salt and pepper and a little fat in your blender, food processor or with a hand masher like you&#039;re making mashed potatoes. </p></div>',
        '<div class="ingredient-image"><img src="images/Spaghetti-Squash.png" alt="This is a line drawing of spaghetti squash"></div><div class="option-expanded"><span class="yellow">Spaghetti Squash</span><p>Spaghetti squash is another great pasta analog, and isn&#039;t terribly hard to make. You can make this in one of two ways: baking or microwaving. Whichever method you choose, halve lengthwise and scoop out the seeds. If you&#039;re microwaving, place face-down in a shallow bowl, prick the back of the squash a few times, add a Tablespoon or so of water to the bottom of the bowl, cover with saran wrap and nuke 10 - 15 minutes or until the squash is soft. If you&#039;re baking, sprinkle with salt and pepper and a little olive oil, place face down on a baking sheet, prick the backs with a fork, and bake on 375F for 35 minutes or until soft.</p><p>Once the squash is cooked, let sit until cool enough to handle. To turn into squash, gently rake a fork across the squash flesh to shred.</p><p>Your pasta is now cooked and is ready to serve.</p></div>'
      ];
      var randomNum = Math.floor(Math.random() * bulkVegTypes.length);

      $("#bulk-veg-output").append(bulkVegTypes[randomNum]);
    }
  });

  $("img[id='bulkVegDie']").click(function (event) {
    event.preventDefault();
      $("#bulk-veg-output").scrollView();
  });


  $("img[id='accentVegDie']").click(function() {
    $(this).attr("src", "images/D6-Smiley-L.png")
    if ($("#accent-veg-output").children().length == 0) {
      var accentVegTypes = [
        '<div class="ingredient-image"><img src="images/Bell-Pepper.png" alt="This is a line drawing of a bell pepper"></div><div class="option-expanded"><span class="green">Bell Pepper</span><p>Slice your pepper in half. De-seed and chop. Good to use with any cooking method.</p></div>',
        '<div class="ingredient-image"><img src="images/Leafy-Greens.png" alt="This is a line drawing of leafy greens"></div><div class="option-expanded"><span class="darkgreen">Leafy Greens</span><p>Wash and chop into bite-sized pieces. Add during the last 5 - 10 minutes of cooking if your method is saut&#233;, stir-fry or soup. Cook separately in a little fat over medium-high heat if your cooking method is braise, roast or slow-cook.</p></div>',
        '<div class="ingredient-image"><img src="images/Green-Beans.png" alt="This is a line drawing of green beans"></div><div class="option-expanded"><span class="green">Green Beans</span> <p>Wash and de-tip. Good to use with any cooking method.</p></div>',
        '<div class="ingredient-image"><img src="images/Broccoli.png" alt="This is a line drawing of broccoli"></div><div class="option-expanded"><span class="darkgreen">Broccoli</span> <p>Wash, cut the crowns into inch/inch and a half pieces. The stalks are also good to eat, just slice the outside off and cut into bite-sized pieces. Broccoli is good to throw into any of the cooking methods. </p></div>',
        '<div class="ingredient-image"><img src="images/Carrots.png" alt="This is a line drawing of carrots"></div><div class="option-expanded"><span class="orange">Carrots</span> <p>Slice into 1/4 inch thick coins or chop into bite-sized pieces. Good to use with any cooking method.</p></div>',
        '<div class="ingredient-image"><img src="images/Brussels-Sprouts.png" alt="This is a line drawing of brussels sprouts"></div><div class="option-expanded"><span class="lightgreen">Brussels Sprouts</span> <p>Slice in half lengthwise or shred into a slaw. Good to use with any cooking method.</p></div>'
      ];
      var randomNum = Math.floor(Math.random() * accentVegTypes.length);

      $("#accent-veg-output").append(accentVegTypes[randomNum]);
    }
  });

  $("img[id='accentVegDie']").click(function (event) {
    event.preventDefault();
      $("#accent-veg-output").scrollView();
  });


  $("img[id='cookTypeDie']").click(function() {
    $(this).attr("src", "images/D6-Smiley-R.png")
    if ($("#cook-type-output").children().length == 0) {
      var cookTypeTypes = [
        '<div class="ingredient-image"><img src="images/Wok.png" alt="This is a line drawing of a wok"></div><div class="option-expanded"><span class="black">Stir-Fry</span> <p>Grab a wok or your largest and heaviest frying pan. Set the heat to high, and add a couple Tablespoons of a fat with a high smoke point (sesame oil is great for Asian style cooking&#059; grapeseed or avocado oil is a nice neutral base for other cooking types). When the pan is hot (almost smoking), add your ingredients. Take care to continually stir your food to avoid burning. Your dinner is done when your protein is cooked through and your veggies are softened and browned in spots.</p></div>',
        '<div class="ingredient-image"><img src="images/Sautee.png" alt="This is a line drawing of a skillet"></div><div class="option-expanded"><span class="black">Saut&#233;</span> <p>Grab your largest and heaviest frying pan. Set the heat to medium-high, and add a couple Tablespoons of a fat with a high smoke point (sesame oil is great for Asian style cooking&#059; grapeseed, coconut oil or avocado oil is a nice neutral base for other cooking types&#059; butter is always nice). When the pan is hot (a drop of water sputters when flicked into the pan), add your ingredients. Your dinner is done when your protein is cooked through and your veggies are softened and browned in spots.</p></div>',
        '<div class="ingredient-image"><img src="images/Roast.png" alt="This is a line drawing of a roasting pan"></div><div class="option-expanded"><span class="black">Roast</span> <p>Roasting is one of the least labor-intensive methods of cooking, but can be tricky if you &#039;re trying to cook everything in a single pan all at once. As a rule of thumb, meatballs take about 25 minutes to roast, big hunks of meat take a couple hours, chicken takes about 30 minutes, sausages work best when sliced and take about 15 minutes, hard veggies like broccoli and carrots and squash are fantastic roasted, and roasted brussels sprouts or green beans are two of my favorite side dishes to make. My general rule for roasting if I &#039;m not using a recipe is to set the oven on 375F, toss whatever I &#039;m roasting in a couple tablespoons of fat with a sprinkle of Kosher salt and black pepper, and roast for 20 minutes. I then check whatever it is for doneness, flip it and roast another 20 minutes if necessary. </p></div>',
        '<div class="ingredient-image"><img src="images/Slow-Cook.png" alt="This is a line drawing of a slow cooker"></div><div class="option-expanded"><span class="black">Slow Cook</span> <p>Slow cooking is a fantastic way to make dinner with zero effort and almost no time spent in the kitchen. Just dump your ingredients into the cooker, seat the lid, and cook. I generally cook on the High setting for 6 hours, regardless of what I &#039;m making. </p></div>',
        '<div class="ingredient-image"><img src="images/Soup.png" alt="This is a line drawing of a soup pot"></div><div class="option-expanded"><span class="black">Soup</span> <p>You can make a soup out of pretty much anything. The easiest way to soup, is to add 2 - 4 cups of your favorite broth to a large pot or the bowl of your slow cooker, add your ingredients, and let simmer (or slow cook) 2 - 4 hours. </p></div>'
      ];
      var randomNum = Math.floor(Math.random() * cookTypeTypes.length);

      $("#cook-type-output").append(cookTypeTypes[randomNum]);
    }
  });

  $("img[id='cookTypeDie']").click(function (event) {
    event.preventDefault();
      $("#cook-type-output").scrollView();
  });


  $("#flavorProfile").click(function() {
    $(this).attr("src", "images/D6-Smiley-C.png")
    if ($("#flavor-profile-output").children().length == 0) {
      var flavorProfiles = [
        '<div class="ingredient-image"><img src="images/Thailand.png" alt="this is the Thai flag"></div><div class="option-expanded"><span class="yellow">Thai</span><p>Juice of 1 lime<br> 2 Tbsp. Fish sauce (Red Boat brand is paleo-friendly)<br> 2 Tbsp. Coconut aminos<br> 1-2 Tbsp. sriracha<br> 2 cloves garlic, minced<br> 1/2 inch knob ginger, peeled and minced<br> 2 Tbsp. cilantro, chopped (optional)</p> <p>If you are saut&#233;ing or stir-frying: Add the garlic and ginger before you add your protein and veggies. Let cook 1 - 2 minutes.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the fish sauce, lime juice, and coconut aminos. Let cook until the liquid has evaporated.</p> <p>Add the cilantro and sriracha after your dinner is cooked to its desired doneness.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Thai seasoning ingredients at the beginning of the cooking process. Use the lime juice, sriracha and cilantro as a garnish after your dish has been cooked.</p></div>',
        '<div class="ingredient-image"><img src="images/Mexico.png" alt="this is the Mexican flag"></div><div class="option-expanded"><span class="green">Mexican</span><p>Juice of 1 lime<br> 2 Tbsp. chili powder<br> 1 - 2 tsp. cumin<br> 2 cloves garlic, minced<br> 1/2 onion, peeled and sliced thin<br> Hot sauce to taste (optional)<br> 2 Tbsp. cilantro, chopped (optional)</p> <p>If you are saut&#233;ing or stir-frying: Add the garlic and onion before you add your protein and veggies. Let cook 1 - 2 minutes.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the chili powder, cumin and lime juice. Let cook a few minutes more.</p> <p>Add the cilantro and hot sauce after your dinner is cooked to its desired doneness.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Mexican seasoning ingredients at the beginning of the cooking process. Use the lime juice, hot sauce and cilantro as a garnish after your dish has been cooked.</p></div>',
        '<div class="ingredient-image"><img src="images/India.png" alt="this is the Indian flag"></div><div class="option-expanded"><span class="purple">Indian</span><p>2 Tbsp. curry powder<br> 1/2 onion, peeled and thinly sliced<br> 2 - 4 cloves garlic, minced<br> 1 Tbsp. mustard seeds<br> 2 Tbsp. ghee or clarified butter<br> 1 can diced tomatoes<br> 1 can coconut milk</p> <p>If you are saut&#233;ing or stir-frying: Add the garlic, onions and mustard seeds before you add your protein and veggies. Let cook 1 - 2 minutes in the ghee until the onions have softened and the mustard seeds pop.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the curry powder, tomatoes and coconut milk. Let cook until the liquid has evaporated by half and your meat and veggies are cooked through.</p><p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Indian seasoning ingredients at the beginning of the cooking process.</p></div>',
        '<div class="ingredient-image"><img src="images/Pizza.png" alt="this is a line drawing of pizza"></div><div class="option-expanded"><span class="red">Pizza</span><p>1 cup of your favorite marianra sauce <br> 1 tsp. dried oregano<br> 1 tsp. dried basil<br> 1/2 onion, peeled and diced<br> 2 cloves garlic, minced<br> Sprinkle parmesan cheese (optional)</p> <p>If you are saut&#233;ing or stir-frying: Add the onion and garlic before you add your protein and veggies. Let cook 1 - 2 minutes in 1 - 2 Tbsp. fat of choice.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the marinara, oregano and basil. Let cook until the meat and veggies are done.</p> <p>Top with the cheese after your dinner is cooked to its desired doneness.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Pizza seasoning ingredients at the beginning of the cooking process. Use the cheese as a garnish after your dish has been cooked.</p></div>',
        '<div class="ingredient-image"><img src="images/Buffalo.png" alt="this is a buffalo"></div><div class="option-expanded"><span class="orange">Buffalo</span><p>1/4 - 1/2 cup Frank &#039;s Red Hot hot sauce<br> 2 stalks celery, washed and chopped<br> 21/4 - 1/2 cup prepared mayo or fresh aioli<br> 1-2 Tbsp. garlic powder<br> 1-2 Tbsp. onion powder</p> <p>If you are saut&#233;ing or stir-frying: be careful to watch for burning. Start cooking your protein and celery first, cooking until the protein is about halfway done. Mix the hot sauce, mayo, garlic powder and onion powder in a separate bowl and add to the mostly-cooked protein and veggies. Saut&#233;/stir-fry a few minutes, stirring continually to combine well.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the Buffalo seasoning ingredients at the beginning of the cooking process. If you are making a soup, add about half the liquid you normally would.</p></div>',
        '<div class="ingredient-image"><img src="images/France.png" alt="this is the French flag"></div><div class="option-expanded"><span class="blue">French</span><p>1 tsp. dried thyme<br> 1/4 to 1/2 cup bone broth or white wine<br> 2 cloves garlic, minced<br> 1 leek, washed, sliced lengthwise and then again into half moons<br> 1-2 stalks celery, washed, sliced lengthwise and then again into quarter moons</p> <p>If you are saute&#233;ing or stir-frying: Add the garlic, leek, celery and onion before you add your protein and veggies. Let cook 1 - 2 minutes or until just beginning to soften.</p> <p>When your protein and veggies have been added and have been cooking a few minutes (about halfway done), add the thyme, basil and liquid. Let cook until the liquid has mostly evaporated, the meat is done and the veggies are soft.</p> <p>If you are braising, roasting, slow-cooking or turning this dish into a soup, add the French seasoning ingredients at the beginning of the cooking process.</p></div>'
              ];
      var randomNum = Math.floor(Math.random() * flavorProfiles.length);

      $("#flavor-profile-output").append(flavorProfiles[randomNum]);
    }
  });

  $("img[id='flavorProfile']").click(function (event) {
    event.preventDefault();
      $("#flavor-profile-output").scrollView();
  });

  $(document).ready(function() {
    function checkPosition() {
      if ($(this).scrollTop() > 200) {
        $("#toTop").fadeIn(500);
        } else {
        $("#toTop").fadeOut(300);
        }
      }
        
        $(window).scroll(checkPosition);

        $("#toTop").click(function(event) {
          event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
        })

        checkPosition();
  });

 })

