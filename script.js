const images = [ 
    'sabha.jpeg', 
    'sa.jpeg', 
    'sabha4.jpeg' ,
    'sabha7.jpeg'
   
]; 
 
let currentIndex = 0; 
 
function changeImage() { 
    const slideshow = document.getElementById('slideshow'); 
    currentIndex = (currentIndex + 1) % images.length; 
    slideshow.style.opacity = 0; // Fade out 
    setTimeout(() => { 
        slideshow.src = images[currentIndex]; 
        slideshow.style.opacity = 1; // Fade in 
    }, 1000); // Wait for fade out to finish 
} 
 
setInterval(changeImage, 5000); // Change image every 5 seconds 