$(document).ready(function () {
  // ^^THIS GETS ADDED TO EVERY JS DOCUMENT ALONG WITH LAST CLOSER

// What do we want to do? - fire something when clicking button

// JAVA SCRIPT VERSION: document.getElementById('clickme').onclick = getFortune;

$('#clickme').click(getFortune);

// Get inputs

// JAVA SCRIPT VERSION: function getFortune () {
//   var hometown = document.getElementById('hometown').value
//   var partner = document.getElementById('partner').value
//   var numKids = document.getElementById('numKids').value
//   var jobTitle = document.getElementById('jobTitle').value

function getFortune () {
  var hometown = $('#hometown').val();
  var partner = $('#partner').val();
  var numKids = $('#numKids').val();
  var jobTitle = $('#jobTitle').val();

  // run function logic - pay attention to the syntax here. 

  // JAVA SCRIPT VERSION IS SAME AS JQUERY VERSION: var fortuneStr = "You will be a " + jobTitle + " living in " 
  // + hometown + ", married to " + partner + ", with " 
  // + numKids + " kids." 

    var fortuneStr = "You will be a " + jobTitle + " living in " 
  + hometown + ", married to " + partner + ", with " 
  + numKids + " kids." 

   //  output 

   // JAVA SCRIPT VERSION: document.getElementById('output').innerHTML = fortuneStr;

    $('#output').text(fortuneStr);
}
})