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
const myMedia = window.matchMedia("(max-width: 595px)");
let searchButton = document.querySelectorAll(".mobile-search-button");
const searchBox = document.querySelector(".search-bar input");
const categoryButton = document.querySelector(".category-button");

function responsive(media) {
  if (media.matches) {
    $(".search-bar i").addClass("mobile-search-button");
    searchButton = document.querySelectorAll(".mobile-search-button");
    $(searchBox).removeClass("search-active").css("width", "100%");
    $(searchBox).addClass("search-inactive").css("width", "20%");
    searchButton.forEach((item) => {
      $(item).on("click", function () {
        event.preventDefault();
        if ($(searchBox).css("visibility") == "hidden") {
          $(searchBox).removeClass("search-inactive");
          $(searchBox).addClass("search-active").css("width", "100%");
        } else {
          $(searchBox).removeClass("search-active");
          $(searchBox).addClass("search-inactive").css("width", "20%");
        }
      });
    });
  } else {
    $(".search-bar i").removeClass("mobile-search-button");
    $(searchBox).removeClass("search-inactive");
    $(searchBox).addClass("search-active").css("width", "100%");
  }
  //Página cadastro - Menu
  if (media.matches) {
    $(".admin-menu ul li").hover(
      function () {
        $(this).append(
          $(
            "<h4>" + $(this).children("a").children("i").attr("title") + "</h4>"
          )
        );
      },
      function () {
        $(this).find("h4").last().remove();
      }
    );
  } else {
    $(".admin-menu ul li").hover(function () {
      $(this).find("h4").last().remove();
    });
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
$(".open-model").click(function () {
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

//Editar Imagem Efeito
$(".edit-user-picture").hover(
  function () {
    $(".edit-user-picture img").css("opacity", "0.3");
    $(".edit-user-picture span").fadeTo(100, 0.15, function () {
      $(this).css("opacity", "1");
    });
  },
  function () {
    $(".edit-user-picture img").css("opacity", "1");
    $(".edit-user-picture span").fadeTo(100, 0.15, function () {
      $(this).css("opacity", "0");
    });
  }
);

//Upload Button
let uploadButton = document.getElementById("upload-button");
let choosenImg = document.getElementById("choosen-img");
let fileName = document.getElementById("file-name");

$(uploadButton).change(function () {
  let reader = new FileReader();
  reader.readAsDataURL(uploadButton.files[0]);
  console.log(uploadButton.files[0]);
  reader.onload = () => {
    choosenImg.setAttribute("src", reader.result);
  };
  fileName.textContent = uploadButton.files[0].name;
});

//Target - Edit-field
let targetDivs = document.querySelectorAll(".edit-field");
$(targetDivs).hide();
$(targetDivs[0]).show();
$(".target-edit-field").click(function () {
  event.preventDefault();
  $(".edit-field").hide();
  $(".target" + $(this).attr("target")).show();
});
