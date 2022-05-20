const My_element = document.getElementById("para");
My_element.style.color = "red";

var newHeading = document.createElement("h1");
var headingWords = document.createTextNode("This is a new heading");
newHeading.appendChild(headingWords);
document.body.appendChild(newHeading);