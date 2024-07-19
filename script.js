let slideIndex = -1;
let autoSlide;

startAutoSlide();

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

window.addEventListener("scroll", function () {
  if (document.querySelector("#home-page")) {
    var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;
    var nav_links = document.querySelector(".nav_links");
    var sticky = nav_links.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
      // nav_links.style.marginTop = "20px";
    } else if (window.pageYOffset <= sticky) {
      navbar.classList.remove("sticky");
      // nav_links.style.marginTop = "0";
    }
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

const x_mark_svg = document.querySelector(".x-mark-svg");
x_mark_svg.addEventListener("click", closeSearchBar);

const angle_icons = document.querySelectorAll(".angle-icons");
const mobile_nav_dropdown_menu = document.querySelectorAll(
  ".mobile_nav-dropdown-menu"
);
// const angle_right = document.getElementsByClassName(".angle-right");
// const angle_down = document.getElementsByClassName(".angle-down");

angle_icons.forEach((icon) => {
  icon.addEventListener("click", () => handle_icon_display(icon));
});

function handle_icon_display(icon) {
  clearDropdown(icon);
  icon.querySelector(".angle-right").classList.toggle("active-icon");
  icon.querySelector(".angle-down").classList.toggle("active-icon");

  icon
    .closest(".mobile_nav-box")
    .querySelector(".mobile_nav-dropdown-menu")
    .classList.toggle("drop");
}

function clearDropdown(icon) {
  const mobile_nav_box = icon.closest(".mobile_nav-box");
  const dropMenu = icon
    .closest(".mobile_nav-box")
    .querySelector(".mobile_nav-dropdown-menu");
  mobile_nav_dropdown_menu.forEach((item) => {
    if (dropMenu === item) return;
    item.classList.remove("drop");
    const angle_icons = item
      .closest(".mobile_nav-box")
      .querySelector(".angle-icons");
    angle_icons.querySelector(".angle-right").classList.add("active-icon");
    angle_icons.querySelector(".angle-down").classList.remove("active-icon");
  });
}

const mobile_nav_svg = document.querySelector(".mobile-nav-svg");
const body = document.querySelector("body");
const mobile_nav__links = document.querySelector(".mobile_nav--links");
const container = document.querySelector(".container");
const menu_svg = document.querySelector(".menu-svg");
const x_mark = document.querySelector(".x-mark");

mobile_nav_svg.addEventListener("click", function () {
  // body.classList.toggle("move-left");
  // mobile_nav__links.style.transform = "translateX(0)";
  mobile_nav__links.classList.toggle("moveto-original");
  // body.style.marginLeft = "-28rem";
  // container.style.transform = "translateX(-28rem)";
  container.classList.toggle("move-left");
  menu_svg.classList.toggle("active-icon");
  x_mark.classList.toggle("active-icon");
  // navbar.style.display = "none";
  // nav_move;
});

// mobile touch

document.querySelectorAll(".animate-border").forEach((item) => {
  item.addEventListener("touchstart", () => {
    item.classList.add("activate");
  });
  item.addEventListener("touchend", () => {
    item.classList.remove("activate");
  });
  item.addEventListener("mousedown", () => {
    item.classList.add("activate");
  });
  item.addEventListener("mouseup", () => {
    item.classList.remove("activate");
  });
});
