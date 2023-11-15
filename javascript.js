// ######## LIGHTBOX ########
// Open the Modal
function openModal() {
  document.getElementById("myLightbox").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myLightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slideimg");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// ######## PROFILE PICS ########
// Open Image Selector
function openImg() {
  document.getElementById("pics").style.display = "grid";
}

// Close Image Selector
function closeImg() {
  document.getElementById("pics").style.display = "none";
}

// Change Pic
function changeImg1() {
  document.getElementById("proimg").src='Images/profilepic1.jpg';
  document.getElementById("pics").style.display = "none";
}

function changeImg2() {
  document.getElementById("proimg").src='Images/profilepic4.PNG';
  document.getElementById("pics").style.display = "none";
 
}
  
  function changeImg3() {
  document.getElementById("proimg").src='Images/profilepic5.PNG';
  document.getElementById("pics").style.display = "none";
    
}

  function changeImg4() {
  document.getElementById("proimg").src='Images/profilepic2.jpg';
  document.getElementById("pics").style.display = "none";
    
}

  function changeImg5() {
  document.getElementById("proimg").src='Images/profilepic3.jpg';
  document.getElementById("pics").style.display = "none";
    
}
