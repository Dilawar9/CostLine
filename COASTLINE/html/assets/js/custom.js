
// ========= right-sidebar ==========
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
slid.onclick = () => {
  let dropdwon = document.getElementById("slid-drop");
  dropdwon.classList.toggle("aside-dropdwon");
};



/* ======== 1.10 Testionials Slider ======== */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides() {
  showSlides(++slideIndex);
}

function minusSlides() {
  showSlides(--slideIndex);
}

function showSlides(n, event = null) {
  const slides = document.querySelectorAll(".mySlides");
  const imgContainer = document.querySelector(".Testimonials figure");
  const imgs = document.querySelectorAll(".Testimonials figure img");

  if (imgs.length !== 4) {
    console.error("Expected exactly 4 images, but found " + imgs.length);
    return;
  }

  if (event) {
    const clickedImg = event.target;
    const clickedImgIndex = Array.from(imgs).indexOf(clickedImg);
    if (clickedImgIndex !== -1) {
      slideIndex = clickedImgIndex + 1;
    }
  } else {
    slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  imgs.forEach((img) => img.classList.remove("active"));
  slides[slideIndex - 1].style.display = "flex";
  imgs[slideIndex - 1].classList.add("active");
  imgContainer.style.transition = "opacity 2s ease";
  imgContainer.style.opacity = "0";
  const orderIndices = [1, 2, 3, 4];
  for (let i = 0; i < imgs.length; i++) {
    let index = (slideIndex + i + imgs.length) % imgs.length;
    imgs[index].style.visibility = "hidden";
    setTimeout(() => {
      imgs[index].style.order = orderIndices[i];
      imgs[index].style.visibility = "visible";
    }, 0);
  }
  imgContainer.style.opacity = "1";
}
document.querySelectorAll(".Testimonials figure img").forEach((img, index) => {
  img.addEventListener("click", function (event) {
    showSlides(index + 1, event);
  });
});

// Project Section
function switchTab(index) {
  var panes = document.querySelectorAll(".tab-pane");
  var tabs = document.querySelectorAll(".tab");
  for (var i = 0; i < panes.length; i++) {
    panes[i].classList.remove("active_Tab");
    tabs[i].classList.remove("active_Tab");
  }
  panes[index].classList.add("active_Tab");
  tabs[index].classList.add("active_Tab");
}

switchTab(0);

// partners section

$(".Partners_Slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// end of partner section

// Company Slider 

$(".Company_Slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
});


// testimonial slider

$(".Testimonial-Slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Services slider 

$(".Services_Slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  // autoplay:true,
  slidesToShow: 3,
  speed: 1000,
  slidesToScroll: 1,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});