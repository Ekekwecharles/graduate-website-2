let slideIndex = -1;
let autoSlide;

// Initialize slides and dots
// initializeSlidesAndDots();

// Set up the automatic slide change
startAutoSlide();

// function initializeSlidesAndDots() {
//   let slides = document.getElementsByClassName("mySlides");
//   let dots_container = document.querySelector(".dots_container");

//   for (let i = 0; i < slides.length; i++) {
//     let dot = document.createElement("span");
//     dot.className = "dot";
//     dot.onclick = () => currentSlide(i + 1);
//     dots_container.appendChild(dot);
//   }
// }

let show_dots = false;
let dots_container = document.querySelector(".dots_container");

function startAutoSlide() {
  autoSlide = setInterval(() => {
    showSlides(++slideIndex);
  }, 3000);
}

function plusSlides(n) {
  clearInterval(autoSlide); // Stop the auto-slide when manually navigating
  showSlides((slideIndex += n));
  startAutoSlide(); // Restart the auto-slide
}

function currentSlide(n) {
  clearInterval(autoSlide);
  showSlides((slideIndex = n - 1));
  startAutoSlide();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
  if (!show_dots) {
    dots_container.style.opacity = "1";
    show_dots = true;
  }
}

// Add event listeners for keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    plusSlides(-1);
  } else if (event.key === "ArrowRight") {
    plusSlides(1);
  }
});

// -----------------------------------------------------------------------------

//Sticky Navigation
// const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;
  var nav_links = this.document.querySelector(".nav_links");
  var sticky = nav_links.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    // nav_links.style.marginTop = "20px";
  } else if (window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
    // nav_links.style.marginTop = "0";
  }
});

let search_btn = document.querySelector(".search_btn");
let input_container = document.querySelector(".input_container");

search_btn.addEventListener("click", function (e) {
  e.preventDefault();
  // input_container.style.display = "flex";
  // input_container.style.opacity = "1";
  input_container.style.transform = "translateY(0)";
});

function closeSearchBar() {
  input_container.style.transform = "translateY(-100%)";
}

const x_mark = document.querySelector(".x-mark-svg");
x_mark.addEventListener("click", closeSearchBar);
