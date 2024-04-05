const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    treshold: 1,
    rootMargin:"0px 0px -175px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.querySelector('#nav-links');

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".slideshow img");
  let currentImageIndex = 0;
  let isTransitioning = false;

  function showImage(index) {
    if (isTransitioning) return; // Prevent overlapping transitions
    isTransitioning = true;
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
    setTimeout(() => {
      isTransitioning = false;
    }, 2000); // Adjust the timeout to match the transition duration
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  // Initial setup
  showImage(currentImageIndex);

  // Automatically change image every 4 seconds (adjust as needed)
  setInterval(nextImage, 2000); // Adjust the interval to match transition duration + desired delay
});
