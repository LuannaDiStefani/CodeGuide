import Buscar from "./buscar.js";

$(document).ready(function () {
  const buscar = new Buscar("../../controll/phpadmin/js/buscar.php");
  $(".slider").append('<div class="loading">Carregando...</div>');
  let sliderContainer = document.getElementById("slider-container");
  let highlightContainer = document.getElementById("highlight-container");
  let highlightTemp = document.getElementById("highlight").content;
  let sliderRow = document.getElementById("slider-row").content;

  async function pegarDados(nometabela, campo, nome, option) {
    //exemplo
    /* return buscar.param("linguagem", "", "", "1"); */
    return buscar.newBuscar(nometabela, campo, nome, option);
  }

  $.when(pegarDados("cursos", "", "", "full")).then(exibirNoSlide);

  function exibirNoSlide() {
    $(".slider").empty();
    let response = buscar.retorno;
    let totalLinguagens = [];

    allowSlide(response);

    /* totalLinguagens = [...new Set(totalLinguagens)]; */

    /*  Object.keys(infoCursos).forEach((key) => {
      let linguagens = infoCursos[key].idlinguagem;

      console.log(linguagens.lenght);

      /* console.log(infoCursos[key]["imagem"]); */
    /*  $(".slider").append(
        `<img src="../../source/imglinguagem/${infoCursos[key]["imgcurso"]}" class="item-slide" data-curso="${infoCursos[key]["idcurso"]}">`
      );
    });

    allowSlide(infoCursos); */
  }

  //Slider
  function allowSlide(infoCursos) {
    let size = parseInt($(".slider").children().length);
    let totalLinguagens = [];

    console.log(infoCursos);

    for (let i = 0; i < infoCursos.length; i++) {
      if (infoCursos[i].idlinguagem != "") {
        totalLinguagens.push(infoCursos[i].idlinguagem);
      }
    }

    totalLinguagens = [...new Set(totalLinguagens)];
    console.log(totalLinguagens);

    for (let i = 0; i < totalLinguagens.length; i++) {
      criarRow(infoCursos[i]);
    }

    function criarRow(dados) {
      //Selecionando elementos
      const div = document.createElement("div");
      let highlightHTML = document.importNode(highlightTemp, true);
      let content = document.importNode(sliderRow, true);
      //Criando items na slide

      //Loop criar img
      let img = document.createElement("img");
      for (let i = 0; i < infoCursos.length; i++) {
        if (infoCursos[i].nome == dados.nome) {
          img.setAttribute(
            "src",
            `../../source/imglinguagem/${dados.imgcurso}`
          );
          img.setAttribute("class", "item-slide");
          img.setAttribute("data-curso", `${dados.idcurso}`);
          content.querySelector(".slider").appendChild(img);
        }
      }
      //Adicionando ao template e ao HTML
      content.querySelector(".slider").appendChild(img);
      content.querySelector(".slider-title h3").textContent = dados.nome;
      sliderContainer.appendChild(div).appendChild(content);
    }

    //Setas
    $(".handle").click(function (e) {
      e.preventDefault();
      let index = parseInt($(".slider").css("--slider-index"));
      let itemsPerScreen = parseInt($(":root").css("--images-per-screen"));
      var limite = Math.ceil(size / itemsPerScreen);

      if ($(this).hasClass("left-handle")) {
        if (index > 0) {
          index--;
          $(".slider").css("--slider-index", index);
        } else {
          index = limite - 1;
          $(".slider").css("--slider-index", index);
        }
      } else {
        if (index + 1 < limite) {
          index++;
          $(".slider").css("--slider-index", index);
        } else {
          index = 0;
          $(".slider").css("--slider-index", index);
        }
      }
    });
    // Slider fim

    // Mostrar Highlight
    let cursos = $(".slider").children();
    $(cursos).click(function () {
      let id = $(this).attr("data-curso");
      let highlight = $(".highlight");
      let nomeCurso = $(`[data-highlight="nome-curso"]`);
      let descriCurso = document.querySelector(
        `[data-highlight="descri-curso"`
      );
      let previewCurso = document.querySelector(
        `[data-highlight="preview-curso"]`
      );
      let info = document.querySelector(`[data-highlight="info-curso"]`);

      $(previewCurso).css(
        "background-image",
        `url('../../source/imglinguagem/${infoCursos[id - 1].imgcurso}')`
      );

      $(nomeCurso).text(infoCursos[id - 1].nomecurso);
      $(descriCurso).text(infoCursos[id - 1].descri);
      $(info).text(infoCursos[id - 1].pago);

      console.log(info);
    });
  }
});
