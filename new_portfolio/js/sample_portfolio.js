//  open the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// close the contact form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    // takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    let slides = document.getElementsByClassName("mySlides");
    // takes all elements with the class name "dot" and stores them in the variable array "dots" 
    let dots = document.getElementsByClassName("dot");
    // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1 
    if (n > slides.length) {slideIndex = 1};
    // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides" 
    if (n < 1) {slideIndex = slides.length};
    // This for loop takes each item in the array "slides" and sets the display to none 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    // loop takes each item in the array "dots" and removes "active" which removes the active styling
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    // displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    // adds the active styling to the dot associated with the image 
    dots[slideIndex - 1].className += " active"; 
}

// checks input validation for the from. Will not Submit a form with any empty fields
function validateForm() {
    let x = document.forms["ContactForm"]["Name","Email","Phone Number", "Message"].value;
    if (x == "") {
      alert("All fields must be filled out.");
      return false;
    }
}

// provides functionality for the fade in effect for all elements
document.body.classList.add('fade-out');
            window.addEventListener('DOMContentLoaded', () => {
            document.body.classList.remove('fade-out');
});