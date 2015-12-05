// REBUILD USING JQUERY. USE GOOGLE API TO
// CHANGE BACKGROUND TO IMAGE

// vv THIS IS BROKEN. FIX

$(document).ready(function () {

    $('#click-me1').click(function (convertFToC) {
    convertFToC () {

    function convertFToC () {
    var tempF = $('input-fahrenheit').value;

    var tempC = (tempF - 32) * 1.8;

   $('solutionC').innerHTML = tempC;

       if (tempC <= 32) {
        $('body').css('background-color', '#E0FFFF')
    }
        else if (tempC > 33 && 'tempC' < 50) {
        $('body').css('background-color', '#4169E1')
    }
        else if (tempC > 51 && 'tempC' < 80) {
        $('body').css('background-color', '#6B8E23')
    }
        else if (tempC > 81 && 'tempC' < 100) {
        $('body').css('background-color', '#FF4500')
    }
        else if (tempC >= 101) {
        $('body').css('background-color', '#600000')
    }

    $('#click-me1').click(function (convertTToF) {
    convertFToC () {

    function convertTToF () {
    var tempC = $('input-celcius').value;

    var tempF = (tempC * 1.8) + 32;

   $('solutionC').innerHTML = tempC;

       if (tempC <= 32) {
        $('body').css('background-color', '#E0FFFF')
    }
        else if (tempC > 33 && 'tempC' < 50) {
        $('body').css('background-color', '#4169E1')
    }
        else if (tempC > 51 && 'tempC' < 80) {
        $('body').css('background-color', '#6B8E23')
    }
        else if (tempC > 81 && 'tempC' < 100) {
        $('body').css('background-color', '#FF4500')
    }
        else if (tempC >= 101) {
        $('body').css('background-color', '#600000')
    }
    }
    })

})




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

// CURRENTLY, THE BACKGROUND COLOR CHANGES ONCE PER ENTRY. HOW DO I TURN
// THAT FIRST COLOR CHANGE OFF SO THE COLOR CAN BE CHANGED AGAIN WITH
// THE NEXT INPUT ENTERED? 

// EXAMPLE: IF I TYPE 31 INTO THE CONVERT F TO C BOX,
// THE COLOR IS CHANGED TO THAT REALLY LIGHT BLUE INDICATED IN THE FIRST 
// IF/THEN STATEMENT. 

// IF I ENTER ANOTHER NUMBER INTO THE BOX - LIKE 101 - THE BACKGROUND
// SHOULD TURN TO BRICK RED, BUT IT STAYS LIGHT BLUE. HOW TO I SWITCH THE 
// LIGHT BLUE OFF TO ALLOW THE BRICK RED TO TAKE EFFECT? 

