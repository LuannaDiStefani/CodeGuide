import { carregarDados } from "./slider.js";

carregarDados.carregarBusca();

const myMedia = window.matchMedia("(max-width: 595px)");
const searchBox = document.querySelector(".search-bar input");

const menus = () => {
  const categoryMenu = document.querySelector(".mobile-category");
  const btnDropdown = document.getElementById("menu-dropdown");
  const categoryButton = document.querySelector(".category-button");
  const userOptions = document.querySelector(".user-options");
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

  btnDropdown.addEventListener("click", toggleMenu);
  $("#profile i").click(function () {
    $(userOptions).slideToggle("slow");
  });

  //Menu Lateral
  $(categoryButton).click(function (e) {
    e.preventDefault();

    if ($(categoryMenu).is(":visible")) {
      $(categoryMenu).css("opacity", "0").hide("slide");
    } else {
      $(categoryMenu).css("opacity", "1").show("slide");
    }
  });
};

menus();

function responsive(media) {
  const effects = {
    showInput() {
      let searchButton = document.querySelectorAll(".mobile-search-button");
      $(".search-bar i").addClass("mobile-search-button");
      searchButton = document.querySelectorAll(".mobile-search-button");
      $(searchBox).removeClass("search-active").css("width", "100%");
      $(searchBox).addClass("search-inactive").css("width", "20%");
      $(searchButton).click(function () {
        event.preventDefault();
        if ($(searchBox).css("visibility") == "hidden") {
          $(searchBox).removeClass("search-inactive");
          $(searchBox).addClass("search-active").css("width", "100%").focus();
          setTimeout(function () {
            $(searchBox).trigger("focus");
          }, 100);
        } else {
          $(searchBox).removeClass("search-active");
          $(searchBox).addClass("search-inactive").css("width", "20%");
        }
      });
    },
    hideInput() {
      $(".search-bar i").removeClass("mobile-search-button");
      $(searchBox).removeClass("search-inactive");
      $(searchBox).addClass("search-active").css("width", "100%");
    },
    menuConfigurar() {
      const itemMenu = $(".admin-menu ul li");
      $(itemMenu).on("mouseenter", function () {
        $(this).append($("<h4>" + $(this).find("i").attr("title") + "</h4>"));
      });
      $(itemMenu).on("mouseleave", function () {
        $(this).find("h4").last().remove();
      });
    },
  };
  if (media.matches) {
    effects.showInput();
    effects.menuConfigurar();
  } else {
    effects.hideInput();
    $(".admin-menu ul li").hover(function () {
      $(this).find("h4").last().remove();
    });
  }
}

myMedia.addEventListener("change", responsive);
responsive(myMedia);

export const exibirAlerta = (n, cor) => {
  let color1 = "rgba(115, 234, 129, 0.8)";
  let color2 = "rgba(255, 91, 91, 0.8)";
  let divAlert = `<div class="alert"></div>`;
  let aviso;

  document
    .querySelector(".container-mobile")
    .insertAdjacentHTML("beforebegin", divAlert);

  switch (+n) {
    case 1:
      $(".alert").css("background", color1);
      aviso = "Operação realizada com sucesso!";
      break;
    case 2:
      $(".alert").css("background", color2);
      aviso = "Preencha os dados corretamente!";
      break;
    case 3:
      $(".alert").css("background", color1);
      aviso = "Atualizado com sucesso!";
      break;
    case 4:
      $(".alert").css("background", color2);
      aviso = "Apenas imagens permitidas! Verifique o tipo corretamente.";
      break;
    case 5:
      $(".alert").css("background", color2);
      aviso = "Arquivo muito grande! Escolha outra arquivo menor.";
      break;
    default:
      if (cor == 1) {
        $(".alert").css("background", color1);
      } else if (cor == 2) {
        $(".alert").css("background", color2);
      }

      aviso = n;
  }

  $(".alert").text(aviso);

  $(".alert").slideToggle("fast");
  setTimeout(function () {
    $(".alert").fadeOut("fast");
    $(".alert").remove();
  }, 1500);
};
