var boxopened = 0;
var placedialogue = 1;
var cobdialogue = 1;
var certificatedialogue = 1;
var spamtondialogue = 1;
var bigmacdialogue = 1;
var mousedialogue = 1;
var lovenotedialogue = 1;

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

  function changeImg6() {
  document.getElementById("proimg").src='Images/profilepic6.jpg';
  document.getElementById("pics").style.display = "none";
    
}


// ######## BIN ########

function openboxplace() { 
    if (boxopened == 0 ) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("place1").style.display = "inline";
        document.getElementById("place1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        placedialogue = 2;
            }, 20);
    }
}
function openboxcob() { 
    if (boxopened == 0 && cobdialogue == 1) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("cob1").style.display = "inline";
        document.getElementById("cob1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        cobdialogue++;
            }, 20);
    }
    else if (boxopened == 0 && cobdialogue == 2) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("cob2").style.display = "inline";
        document.getElementById("cob2").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        cobdialogue++;
            }, 20);
    }
    else if (boxopened == 0 && cobdialogue == 3) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("cob3").style.display = "inline";
        document.getElementById("cob3").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        cobdialogue++;
            }, 20);
    }
    else if (boxopened == 0 && cobdialogue == 4) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("cob4").style.display = "inline";
        document.getElementById("cob4").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        cobdialogue++;
            }, 20);
    }
    else if (boxopened == 0 && cobdialogue == 5) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("cob5").style.display = "inline";
        document.getElementById("cob5").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
            }, 20);
    }
}

function openboxcertificate() { 
    if (boxopened == 0) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("certificate1").style.display = "inline";
        document.getElementById("certificate1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        certificatedialogue = 2;
            }, 20);
    }  
}

function openboxspamton() { 
    if (boxopened == 0) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("spamton1").style.display = "inline";
        document.getElementById("spamton1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        spamtondialogue = 2;
            }, 20);
    }  
}

function openboxbigmac() { 
    if (boxopened == 0) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("bigmac1").style.display = "inline";
        document.getElementById("bigmac1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        bigmacdialogue = 2;
            }, 20);
    }  
}

function openboxmouse() { 
    if (boxopened == 0) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("mouse1").style.display = "inline";
        document.getElementById("mouse1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        mousedialogue = 2;
            }, 20);
    }  
}

function openboxlovenote() { 
    if (boxopened == 0) {
        document.getElementById("thebox").style.display = "block";
        document.getElementById("lovenote1").style.display = "inline";
        document.getElementById("lovenote1").style.animation = "t calc(var(--n)*.02s) linear";
        setTimeout(function() {
        boxopened = 1;
        lovenotedialogue = 2;
            }, 20);
    }  
}

function mouseclick() {
    if (placedialogue == 2)  {
        document.getElementById("place1").style.display = "none";
        document.getElementById("place1").style.animation = "none";
        document.getElementById("place2").style.display = "inline";
        document.getElementById("place2").style.animation = "t calc(var(--n)*.02s) linear";
        placedialogue = 1;
    }
    else if (certificatedialogue == 2)  {
        document.getElementById("certificate1").style.display = "none";
        document.getElementById("certificate1").style.animation = "none";
        document.getElementById("certificate2").style.display = "inline";
        document.getElementById("certificate2").style.animation = "t calc(var(--n)*.02s) linear";
        certificatedialogue = 1;
    }
    else if (spamtondialogue == 2)  {
        document.getElementById("spamton1").style.display = "none";
        document.getElementById("spamton1").style.animation = "none";
        document.getElementById("spamton2").style.display = "inline";
        document.getElementById("spamton2").style.animation = "t calc(var(--n)*.02s) linear";
        spamtondialogue = 1;
    }
    else if (bigmacdialogue == 2)  {
        document.getElementById("bigmac1").style.display = "none";
        document.getElementById("bigmac1").style.animation = "none";
        document.getElementById("bigmac2").style.display = "inline";
        document.getElementById("bigmac2").style.animation = "t calc(var(--n)*.02s) linear";
        bigmacdialogue = 1;
    }
    else if (mousedialogue == 2)  {
        document.getElementById("mouse1").style.display = "none";
        document.getElementById("mouse1").style.animation = "none";
        document.getElementById("mouse2").style.display = "inline";
        document.getElementById("mouse2").style.animation = "t calc(var(--n)*.02s) linear";
        mousedialogue = 1;
    }
    else if (lovenotedialogue == 2)  {
        document.getElementById("lovenote1").style.display = "none";
        document.getElementById("lovenote1").style.animation = "none";
        document.getElementById("lovenote2").style.display = "inline";
        document.getElementById("lovenote2").style.animation = "t calc(var(--n)*.02s) linear";
        lovenotedialogue = 1;
    }
     else if (boxopened == 1) {
        boxopened = 0;
        document.getElementById("thebox").style.display = "none";
        document.getElementById("place2").style.display = "none";
         document.getElementById("place2").style.animation = "none";
        document.getElementById("cob1").style.display = "none";
         document.getElementById("cob1").style.animation = "none";
         document.getElementById("cob2").style.display = "none";
         document.getElementById("cob2").style.animation = "none";
         document.getElementById("cob3").style.display = "none";
         document.getElementById("cob3").style.animation = "none";
         document.getElementById("cob4").style.display = "none";
         document.getElementById("cob4").style.animation = "none";
         document.getElementById("cob5").style.display = "none";
         document.getElementById("cob5").style.animation = "none";
        document.getElementById("certificate2").style.display = "none";
         document.getElementById("certificate2").style.animation = "none";
        document.getElementById("spamton2").style.display = "none";
         document.getElementById("spamton2").style.animation = "none";
        document.getElementById("bigmac2").style.display = "none";
         document.getElementById("bigmac2").style.animation = "none";
        document.getElementById("mouse2").style.display = "none";
         document.getElementById("mouse2").style.animation = "none";
        document.getElementById("lovenote2").style.display = "none";
         document.getElementById("lovenote2").style.animation = "none";
     }
}
