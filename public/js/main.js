//Menu DropDown
const btnDropdown = document.getElementById("menu-dropdown");

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

btnDropdown.addEventListener("click", toggleMenu);

//Jquery Starts
$(document).ready(function () {
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
              "<h4>" +
                $(this).children("a").children("i").attr("title") +
                "</h4>"
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

  //Página de Perfil - Modal
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
  let uploadButtons = document.querySelectorAll(".upload-button");

  uploadButtons.forEach((item) => {
    $(item).change(function () {
      let thisForm = this.parentElement.parentElement;

      let fileName = $(thisForm).children().children(".file-name");
      let choosenImg = $(thisForm).children().children(".choosen-img");
      let uploadButton = this;

      let reader = new FileReader();
      reader.readAsDataURL(uploadButton.files[0]);
      console.log(uploadButton.files[0]);
      reader.onload = () => {
        $(choosenImg).attr("src", reader.result);
      };
      $(fileName).text(uploadButton.files[0].name);
    });
  });

  //Target - Edit-field
  let targetDivs = document.querySelectorAll(".edit-field");
  $(targetDivs).hide();
  $(targetDivs[0]).show();
  $(".target-edit-field").click(function () {
    $("form").trigger("reset");
    event.preventDefault();
    $(".edit-field").hide();
    $(".target" + $(this).attr("target")).show();
  });
});

//Highlight Target

$(".swiper-wrapper")
  .children()
  .click((e) => {
    e.preventDefault();
    console.log("clicado");
  });

/* let highlights = document.querySelectorAll(".highlight");
$(highlights).hide();

$(".thumbTile").click(function () {
  event.preventDefault();
  $(highlights).hide();
  let target = $(this).parent().parent().parent().parent().attr("target");
  let thisHighlight = highlights[target];
  console.log(thisHighlight);
  $(thisHighlight).slideToggle("slow");
  $("html, body").animate(
    {
      scrollTop: $(thisHighlight).offset().top - 70,
    },
    1000
  );
  $(".close-highlight-button").click(function () {
    $(thisHighlight).hide("slow");
  });
}); */

//Alert
function exibirAlerta(n, cor) {
  let message;
  let color1 = "rgba(115, 234, 129, 0.8)";
  let color2 = "rgba(255, 91, 91, 0.8)";

  switch (n) {
    case 1:
      $(".alert").css("background", color1);
      message = "Operação realizada com sucesso!";
      break;
    case 2:
      $(".alert").css("background", color2);
      message = "Preencha os dados corretamente!";
      break;
    case 3:
      $(".alert").css("background", color1);
      message = "Atualizado com sucesso!";
      break;
    case 4:
      $(".alert").css("background", color2);
      message = "Apenas imagens permitidas! Verifique o tipo corretamente.";
      break;
    case 5:
      $(".alert").css("background", color2);
      message = "Arquivo muito grande! Escolha outra arquivo menor.";
      break;
    default:
      if (cor == 1) {
        $(".alert").css("background", color1);
      } else {
        $(".alert").css("background", color2);
      }
      message = n;
  }
  $(".alert").slideToggle("fast");
  $(".alert").html(message);
  setTimeout(function () {
    $(".alert").fadeOut("fast");
  }, 1500);
}
