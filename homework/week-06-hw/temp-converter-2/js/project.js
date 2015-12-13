$(document).ready(function () {

    $('#click-me1').click(function () {

    var tempF = $('#input-fahrenheit').val()

    var tempC = (tempF - 32) * 1.8

    tempC = parseFloat(tempC)

    
    $('#solutionC').text(tempC)

    if (tempC <= 32) {
    $('body').css('background-color', '#E0FFFF')
    } else if (tempC > 33 && 50) {
        $('body').css('background-color', '#4169E1')
    } else if (tempC > 51 && 80) {
        $('body').css('background-color', '#6B8E23')
    } else if (tempC > 81 && 100) {
        $('body').css('background-color', '#FF4500')
    } else if (tempC >= 101) {
        $('body').css('background-color', '#600000')
    }
    })
})

// ^^^ Not all of the background colors are working here 
// and I'm not sure why.


$('#click-me2').click(function () {

    var tempC = $('#input-celcius').val()

    var tempF = (tempC * 1.8) + 32

    tempF = parseFloat(tempF)

    $('#solutionF').text(tempF)

        if (tempF <= 32) {
        $('body').css('background-color', '#E0FFFF')
    }
        else if (tempF > 33 && 50) {
        $('body').css('background-color', '#4169E1')
    }
        else if (tempF > 51 && 80) {
        $('body').css('background-color', '#6B8E23')
    }
        else if (tempF > 81 && 100) {
        $('body').css('background-color', '#FF4500')
    }
        else if (tempF >= 101) {
        $('body').css('background-color', '#600000')
    }
})

// ^^^ How do I get the background color to reset? It's only
// changing with the first one entered; subsequent entries do not 
// affect the background color. 




// ----vvvv----OLD VERSION(WORKS)----vvvv----

// document.getElementById('click-me1').onclick = convertFToC;

// function convertFToC () {
//     var tempF = document.getElementById('input-fahrenheit').value;

//     var tempC = (tempF - 32) * 1.8;

//     document.getElementById('solutionC').innerHTML = tempC;

//         if (tempC <= 32) {
//         document.body.style.backgroundColor = "#E0FFFF";
//     }
//         else if (tempC > 33 && 'tempC' < 50) {
//         document.body.style.backgroundColor = "#4169E1";
//     }
//         else if (tempC > 51 && 'tempC' < 80) {
//         document.body.style.backgroundColor = "#6B8E23";
//     }
//         else if (tempC > 81 && 'tempC' < 100) {
//         document.body.style.backgroundColor = "#FF4500";
//     }
//         else if (tempC >= 101) {
//         document.body.style.backgroundColor = "#600000";
//     }
// }

// document.getElementById('click-me2').onclick = convertTToF;

// function convertTToF () {
//     var tempC = document.getElementById('input-celcius').value;

//     var tempF = (tempC * 1.8) + 32;

//     document.getElementById('solutionF').innerHTML = tempF;

//         if (tempF <= 32) {
//         document.body.style.backgroundColor = "#E0FFFF";
//     }
//         else if (tempF > 33 && 'tempC' < 50) {
//         document.body.style.backgroundColor = "#4169E1";
//     }
//         else if (tempF > 51 && 'tempC' < 80) {
//         document.body.style.backgroundColor = "#6B8E23";
//     }
//         else if (tempF > 81 && 'tempC' < 100) {
//         document.body.style.backgroundColor = "#FF4500";
//     }
//         else if (tempF >= 101) {
//         document.body.style.backgroundColor = "#600000";
//     }
// }

