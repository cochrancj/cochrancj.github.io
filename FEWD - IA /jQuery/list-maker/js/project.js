function addToList() {
  var message = $("#item").val();
  var listItem = "<li>" + message + "</li>";
  $("ul").append(listItem);
  $("#item").val("");
}

$("#clickme").on("click", addToList);

$("#item").on("keypress", function(evt){ 
  // $("ul").after("Key Pressed!" + evt.which);
  // $("ul").after("<br>");
  if(evt.which == 13 ) { // Detects if the key pressed was Enter
    addToList();
  }
});