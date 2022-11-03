import { search } from "./slider.js";

search.allowSearch();

const myMedia = window.matchMedia("(max-width: 595px)");
const searchBox = document.querySelector(".search-bar input");

const menus = () => {
  const categoryMenu = document.querySelector(".mobile-category");
  const categoryButton = document.querySelector(".category-button");
  const userOptions = document.querySelector(".user-options");
  const dropDownButton = document.getElementById("menu-dropdown");
  const menu = document.getElementById("wrapper-menu");

  $(dropDownButton).click(function () {
    $(menu).slideToggle(400);
  });

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
    toggleInput(searchBox) {
      $(searchBox).css("visibility", "hidden").addClass("inactive");

      $(".toggleSearch")
        .unbind()
        .click(function (e) {
          e.preventDefault();

          if ($(searchBox).hasClass("inactive")) {
            $(searchBox)
              .css("visibility", "visible")
              .css("width", "100%")
              .css("opacity", "1")
              .removeClass("inactive");
          } else {
            $(searchBox)
              .css("visibility", "hidden")
              .css("width", "50%")
              .css("opacity", "0")
              .addClass("inactive");
          }
        });
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
    const searchBox = document.querySelector(".search-box");
    effects.toggleInput(searchBox);
    effects.menuConfigurar();
  } else {
    $(".toggleSearch").off("click");
    $("#search-box").attr("style", "").removeClass("inactive");
    $(".admin-menu ul li").hover(function () {
      $(this).find("h4").last().remove();
    });
  }
}

myMedia.addEventListener("change", responsive);
responsive(myMedia);

$(".read-more").click(function () {
  console.log("clicou");
});

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
