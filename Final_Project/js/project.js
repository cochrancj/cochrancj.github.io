// vvvv ROTATE BANNER (BROKEN)vvvv --- WHY??

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
  })
  // $('cookTypeDie').click(function() {
  //   $('flavorProfile, proteinDie').toggleClass('fade');
  // })

  // $('.accentVegDie').click(function() {
  //   $('.accentVegDie').addClass('select')
  //   $('.accentVegDie').removeClass('pick-me')
  // })

  // $('proteinDie').click(function () {
  //   $('#recipe').append('<p>appended paragraph</p>');
  // })
  

  // function activateFilterAnimation(){
  //   $('.dice img').toggleClass('animated');
  // }
  //   $('dice').on('click', activateFilterAnimation);

//   $('proteinDie').click(function () {
//     $('#recipe').text = Math.floor(Math.random()*6)+1
//   })

  // $("#slider > div:gt(0)").hide();
  
  // $("#slider").height($("#slider > div > blurb").height());
  // // setInterval(function () {
  //   $("#slider > div: first")
  //     .fadeOut(1000)
  //     .next()
  //     .fadeIn(1000)
  //     .end()
  //     .appendTo("#slider");
  // // }, 3000);
  // })

// things = $('.dice');
// $(things[Math.floor(Math.random()*things.length)]).click()

// this should return a random element 
// by clicking on something in the div 
// of class (example has 10 links in 
//   that div and wanted to spit a 
//   random link per click).

// rename my dice as elements in a div.


  // $('.proteinDie').click(function () {
  //   var recipe = ['.ingredient-image', '.protein-expanded', '.bulk-veg-expanded', '.accent-veg-expanded', '.cook-style-expanded', '.flavor-profile-expanded'];
  //   $("#recipe").text = recipe;
  // })

 })

