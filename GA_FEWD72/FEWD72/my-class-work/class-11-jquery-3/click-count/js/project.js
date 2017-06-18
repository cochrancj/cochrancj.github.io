// Program Flow
//
// 1: User clicks on #clickme (this element)
// 2: Increment the value of #click-num (eg if clicknum is 0, make it 1)
// 3: If the number of clicks == 5, change the background-color of <body> to red
// 4: If the number of clicks == 10, change the background-color of <body> to green
// 5: If the number of clicks == 15, change the background-color of <body> to blue
// 6: Else, change the background-color of <body> to black

$(document).ready(function () {
​
  var total = 0
​
  $('#clickme').click(function () {
    total = total + 1
    $('#click-num').text(total)
​
    if (total == 5) {
      $('body').css('background-color', 'red')
    } else if (total == 10) {
      $('body').css('background-color', 'green')
    } else if (total == 15) {
      $('body').css('background-color', 'blue')
    } else {
      $('body').css('background-color', 'black')
    }
  })
})

// UMMMMM ... why is this broken? Taken from code
// dropped into Slack