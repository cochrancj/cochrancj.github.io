// $(document).ready(function () {

//   $('.row').click(function () {
//     $('.row').find('.wrapper').slideDown()
//   })
// })

// ^this version finds all wrapper children
// and slides them out all at once. 

// $(document).ready(function () {

//   $('.row').click(function () {
//   $(this).find('.wrapper').slideDown()
//   })
//     })

// ^this version makes it so the only one
// that expands is the one you clicked 

$(document).ready(function () {

  $('.row').click(function () {
  $(this).find('.wrapper').slideToggle()
  })
    })

// ^this version makes it so that when you
// click on the element again, it hides