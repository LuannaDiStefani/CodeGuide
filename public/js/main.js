import { search, doSearch } from "./slider.js";
import { verificarAuth } from "./modules.js";

verificarAuth();

search.allowSearch();

const myMedia = window.matchMedia("(max-width: 595px)");

const menus = () => {
  const categoryMenu = document.querySelector(".mobile-category");
  const categoryButton = document.querySelector(".category-button");
  const userOptions = document.querySelector(".user-options");
  const dropDownButton = document.getElementById("menu-dropdown");
  const menu = document.getElementById("wrapper-menu");
  const mobileProfile = document.querySelector(".profile-mobile");
  const menuProfileHeader = document.querySelector(`[data-menu="header-menu"]`);
  const menuProfileMobile = document.querySelector(`[data-menu="mobile-menu"]`);

  const opcoesMenu = {
    deslogado: {
      login: `<li><a href="http://localhost/codeguide/public/login/">Login</a></li>`,
      cadastro: `<li><a href="http://localhost/codeguide/public/cadastro/">Cadastro</a></li>`,
    },
    logado: {
      perfil: `<li><a href="http://localhost/codeguide/public/perfil/">Perfil</a></li>`,
      configuracoes: `<li><a href="http://localhost/codeguide/public/configurar/">Configurar</a></li>`,
      logout: `<li><a href="#">Logout</a></li>`,
    },
    admin: {
      painel: `<li><a href="#">Painel</a></li>`,
    },
  };

  function createMenuProfile() {
    if (sessionStorage.getItem("dados")) {
      const logado = opcoesMenu.logado;
      for (const opcao in logado) {
        menuProfileHeader.insertAdjacentHTML("beforeend", logado[opcao]);
        menuProfileMobile.insertAdjacentHTML("beforeend", logado[opcao]);
      }
    } else {
      const deslogado = opcoesMenu.deslogado;
      for (const opcao in deslogado) {
        menuProfileHeader.insertAdjacentHTML("beforeend", deslogado[opcao]);
        menuProfileMobile.insertAdjacentHTML("beforeend", deslogado[opcao]);
      }
    }
  }
  createMenuProfile();

  $(mobileProfile).click(function (e) {
    e.preventDefault();
    $(".mobile-profile-options").slideToggle(300);
  });

  $(dropDownButton).click(function () {
    $(menu).slideToggle(400);
  });

  $("#profile i").click(function () {
    $(userOptions).slideToggle("slow");
  });

  //Menu Lateral
  $(categoryButton).click(function (e) {
    e.preventDefault();
    toggleCategoryMobile();
  });

  function toggleCategoryMobile() {
    $(document.body).toggleClass("off");
    if ($(categoryMenu).is(":visible")) {
      $(categoryMenu).css("opacity", "0").hide("slide");
    } else {
      $(categoryMenu).css("opacity", "1").show("slide");
    }
  }

  const menuTrigger = document.querySelectorAll(`[menu-trigger]`);
  const menuOptions = document.querySelectorAll(`[menu-target]`);

  menuOptions.forEach((el) => {
    $(el).hide();
    $(el)
      .children()
      .click(function (e) {
        e.preventDefault();
        const param = e.target.innerText.toLowerCase();
        doSearch(param);
        toggleCategoryMobile();
      });
  });

  menuTrigger.forEach((el) => {
    $(el).click(function () {
      const param = el.innerText.toLowerCase();
      $(`[menu-target="${param}"]`).slideToggle("fast");
    });
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

            setTimeout(function () {
              $(searchBox).focus();
            }, 170);
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

$("#menu a").click(function (el) {
  el.preventDefault();
  const param = el.target.innerText;
  doSearch(param);
});
