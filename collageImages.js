document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "img/collageTemplate1-1.jpg",
      "img/collageTemplate1-2.jpg",
      "img/collageTemplate1-3.jpg",
      "img/collageTemplate1-4.jpg",
      "img/collageTemplate1-5.jpg"
    ];
  
    let currentIndex = 0;
  
    function changeImage() {
      const collageImage = document.getElementById("collageImage");
  
      // Fade out the current image
      collageImage.classList.remove("active");
  
      // Update the image source after a short delay to allow fade out
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        collageImage.src = images[currentIndex];
  
        // Fade in the new image
        collageImage.classList.add("active");
      }, 1000); // Matches the transition duration
    }
  
    // Initially show the first image
    document.getElementById("collageImage").classList.add("active");
  
    // Change image every 5 seconds
    setInterval(changeImage, 5000);
  });
  