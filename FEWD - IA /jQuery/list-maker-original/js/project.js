function addToList() {
  var message = $("#item").val();
  if(message != "") {
    // var listItem = "<li>" + message + "</li>";
    var listItem = $("<li/>").html(message);
    listItem.on("click", deleteItem);
    $("ul").append(listItem);
    $("#item").val("");
  }
}

function handleEnter(evt){ 
  if(evt.which == 13) { // Detects if the key pressed was Enter
    addToList();
    console.log(evt);
  }
}

function deleteItem() {
  $(this).remove();
}

$("#clickme").on("click", addToList);

$("#item").on("keypress", handleEnter);

$("li").on("click", deleteItem);


