// "regular" way to do things VVVV

// $(document).ready(function () {

// $('#second').click(function () {
//   $('#bigimage').attr('src', 'img/2.jpg')
// })

// $('#third').click(function () {
//   $('#bigimage').attr('src', 'img/3.jpg')
// })

// $('#fourth').hover(function () {
//   $('#bigimage').attr('src', 'img/4.jpg')
// })

// $('#first').click(function () {
//   $('#bigimage').attr('src', 'img/1.jpg')
// })

// })

// Refactored using "this" VVVV

$(document).ready(function () { 

$('.thumb').click(function () {
  var imgSrc = $(this).attr('src')

  $('#bigimage').attr('src', imgSrc)
})
})

// Selecting every element that has a class of thumb.
// Assigning a click handler to all of these elements.
// This creates a variable called image source
// Whatever is stored in this source attribute 