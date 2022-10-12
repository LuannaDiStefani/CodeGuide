//Menu DropDown
const btnDropdown = document.getElementById("menu-dropdown");

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

btnDropdown.addEventListener("click", toggleMenu);

//Jquery Starts
$(document).ready(function () {
  //Carrossel de cursos
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 640px
      570: {
        slidesPerView: 3,
        slidesPerGroup: 5,
        freeMode: false,
      },
      920: {
        slidesPerView: 4,
        slidesPerGroup: 5,
        freeMode: false,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: false,
      },
    },
  });

  //TypeWritting Effect
  var tickr = [
    '<del style="color: white" ><ins>Connecting...</ins><ins>1.5</ins></del>',
    '<span style="color:white;">Seja bem vindo ao<br></span><span style="color: blue">Code Guide<ins>3</ins></span>',
  ];

  $("#demo_3").t(tickr.join((x = "<ins>1.2</ins><del>*</del>")) + x, {
    speed: 45,
    repeat: true,
    pause_on_click: true,
  });

  $(".highlight").css("display", "none");

  $(".thumbTile").click(function () {
    event.preventDefault();
    if ($(".highlight").css("display") == "none") {
      $(".highlight").slideToggle("slow");
    }
    $(".highlight").css("display", "block");
    $("html, body").animate(
      {
        scrollTop: $(".highlight").offset().top - 60,
      },
      1000
    );
  });
});

$(".close-highlight-button").click(function () {
  $(".highlight").slideToggle("slow");
});

//Menu Mobile
const myMedia = window.matchMedia("(max-width: 570px)");
const searchButton = document.querySelectorAll(".mobile-search-button");
const searchBox = document.querySelector(".search-bar input");
const categoryButton = document.querySelector(".category-button");

function responsive(media) {
  if (media.matches) {
    $(searchBox).removeClass("search-active").css("width", "100%");
    $(searchBox).addClass("search-inactive").css("width", "20%");
    $(searchButton).on("click", function () {
      event.preventDefault();
      if ($(searchBox).css("visibility") == "hidden") {
        $(searchBox).removeClass("search-inactive");
        $(searchBox).addClass("search-active").css("width", "100%");
      } else {
        $(searchBox).removeClass("search-active");
        $(searchBox).addClass("search-inactive").css("width", "20%");
      }
    });
  } else {
    $(searchBox).removeClass("search-inactive");
    $(searchBox).addClass("search-active").css("width", "100%");
  }
}

responsive(myMedia);
myMedia.addListener(responsive);

//Menu Lateral
$(categoryButton).click(function () {
  event.preventDefault();
  if ($(".mobile-category").css("visibility") == "hidden") {
    $(".mobile-category")
      .css("visibility", "visible")
      .css("opacity", "1")
      .css("width", "200px");
  } else {
    $(".mobile-category")
      .css("visibility", "hidden")
      .css("opacity", "0")
      .css("width", "0");
  }
});

//Página de Perfil - Adicionar Stack
$(".add-stack").click(function () {
  $(".model-container").css("transform", "scale(1)");
  setTimeout(function () {
    $(".model-container").css("background", "rgba(0, 0, 0, 0.8)");
  }, 400);
});

$(".course-comment-icon").click(function () {
  $(".model-container").css("transform", "scale(1)");
  setTimeout(function () {
    $(".model-container").css("background", "rgba(0, 0, 0, 0.8)");
  }, 400);
});

$(".close-button").click(function () {
  $(".model-container").css("background", "transparent");
  setTimeout(function () {
    $(".model-container").css("transform", "scale(0)");
  }, 200);
});

/* CADASTRO */
function cor() {
  document.getElementById("data").style.color = "white";
}
