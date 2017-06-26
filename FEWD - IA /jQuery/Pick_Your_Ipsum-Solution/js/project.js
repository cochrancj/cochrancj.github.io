// TO DO: 
// anchor on click function to select ipsum-done
// removeClass when clicked to next anchor-done
// button on click/key press function
// accordion slideDown/slideUp function
// binding accordion slideDown/slideUp to button on click function

function handleNavClick() {
  $("nav a").removeClass("current");
  $(this).addClass("current");
}

function handleSubmitClick() {
  var selector = "#" + $("nav a.current").data("ipsum");
  var numParagraphs = $("#paragraphs").val();
  $(".ipsum").hide();
  var paragraphs = $(selector).find("p");
  paragraphs = paragraphs.slice(0, numParagraphs);
  paragraphs.show();
  $(selector).slideDown(400);
}

function handleParagraphFocus() {
  $("#paragraphs").val("");
  $(".ipsum").slideUp(400);
  $("p").hide();
}

$("nav a"). on("click", handleNavClick);
$("#submit").on("click", handleSubmitClick);
$("#paragraphs").on("focus", handleParagraphFocus);