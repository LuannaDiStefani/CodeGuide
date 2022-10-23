import Buscar from "./js/buscar.js";

$(document).ready(function () {
  const buscar = new Buscar("../controll/phpadmin/js/buscar.php");
  $(".slider").append('<div class="loading">Carregando...</div>');
  let sliderContainer = document.getElementById("slider-container");
  let highlightTemp = document.getElementById("highlight").content;
  let sliderRow = document.getElementById("slider-row").content;
  let cursos;
  let linguagens;

  async function pegarDados(nometabela, campo, nome, option) {
    //exemplo
    /* return buscar.param("linguagem", "", "", "1"); */
    return buscar.newBuscar(nometabela, campo, nome, option);
  }

  $.when(pegarDados("cursos", "", "", "")).then(exibirNoSlide);

  function exibirNoSlide() {
    $(".slider").empty();
    cursos = buscar.retorno;

    $.when(pegarDados("linguagem", "", "", "")).then(
      (linguagens = buscar.retorno)
    );

    Object.entries(linguagens).forEach(([key, val]) => {
      criarRow(linguagens[key]);
    });

    allowSlide();
  }

  function criarRow(dados) {
    //Selecionando elementos
    const div = document.createElement("div");
    let content = document.importNode(sliderRow, true);
    //Criando items na slide

    //Loop criar img

    Object.entries(cursos).forEach(([key, val]) => {
      let idlinguagem = cursos[key].idlinguagem;
      if (idlinguagem != null && idlinguagem != "" && idlinguagem != 0) {
        if (dados.idlinguagem == cursos[key].idlinguagem) {
          let img = document.createElement("img");
          img.setAttribute("src", `../source/imgcurso/${cursos[key].imgcurso}`);
          img.setAttribute("class", "item-slide");
          img.setAttribute("data-curso", `${cursos[key].idcurso}`);
          content.querySelector(".slider").appendChild(img);
        }
      }
    });

    //Adicionando ao template e ao HTML
    content.querySelector(".slider-title h3").textContent = dados.nome;
    content
      .querySelector(".row")
      .setAttribute("data-row", `${dados.idlinguagem}`);
    sliderContainer.appendChild(div).appendChild(content);
  }

  //Slider
  function allowSlide() {
    let size = parseInt($(".slider").children().length);

    //Botão de fechar função
    function highlightRemove() {
      let highlights = document.querySelectorAll("section.highlight");

      if (highlights.length >= 1) {
        $(highlights).slideUp(250);
        setTimeout(function () {
          $(highlights).remove();
        }, 150);
      } else {
        $(highlights).remove();
      }
    }

    //Setas
    $(".handle").click(function (e) {
      e.preventDefault();
      let slider = $(this).parent().find(".slider");
      let index = parseInt($(slider).css("--slider-index"));
      let itemsPerScreen = parseInt($(":root").css("--images-per-screen"));
      var limite = Math.ceil(size / itemsPerScreen);

      if ($(this).hasClass("left-handle")) {
        if (index > 0) {
          index--;
          $(slider).css("--slider-index", index);
        } else {
          index = limite - 1;
          $(slider).css("--slider-index", index);
        }
      } else {
        if (index + 1 < limite) {
          index++;
          $(slider).css("--slider-index", index);
        } else {
          index = 0;
          $(slider).css("--slider-index", index);
        }
      }
    });

    // Mostrar Highlight
    let items = $(".slider").children();
    $(items).click(function () {
      highlightRemove();
      let slider = $(this).parents(".row");
      let id = $(this).attr("data-curso");
      let highlight = document.importNode(highlightTemp, true);
      let nomeCurso = highlight.querySelector(`[data-highlight="nome-curso"]`);
      let descriCurso = highlight.querySelector(
        `[data-highlight="descri-curso"`
      );
      let previewCurso = highlight.querySelector(
        `[data-highlight="preview-curso"]`
      );
      let info = highlight.querySelector(`[data-highlight="info-curso"]`);

      $(previewCurso).css(
        "background-image",
        `url('../source/imgcurso/${cursos[id - 1].imgcurso}')`
      );

      $(nomeCurso).text(cursos[id - 1].nomecurso);
      $(descriCurso).text(cursos[id - 1].descri);
      $(info).text(cursos[id - 1].pago);
      $(slider).append(highlight).slideDown("slow");
      $(slider).find("section.highlight").slideDown("slow");
      $("html, body").animate(
        {
          scrollTop: $($(slider).find("section.highlight")).offset().top - 40,
        },
        500
      );

      //Botão de fechar
      $(".close-highlight-button").click(highlightRemove);

      //Modal Comments
      $(".open-model").click(function () {
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
      }); //Modal Fim
    });
  }
});
