var anchors = document.getElementsByTagName("a");
var paragraphs = document.getElementsByTagName("p");
var header = document.getElementsByTagName("header")[0];

for (var i = 0; i < anchors.length; i++) {
  anchors[i].onclick = function() {

    for (var j = 0; j < paragraphs.length; j++) {
      paragraphs[j].style.color = this.innerHTML;
    }

    for (var k = 0; k < anchors.length; k++) {
      anchors[k].style.backgroundColor = this.innerHTML;
    }

    header.style.backgroundColor = this.innerHTML;
  }
}
