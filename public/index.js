import { deepClone, model } from "./js/modules.js";

$(".slider").append('<div class="loading">Carregando...</div>');
const sliderContainer = document.getElementById("slider-container");
let highlightTemp = document.getElementById("highlight").content;
let sliderRow = document.getElementById("slider-row").content;
const urlCursos = "http://localhost/codeguide/api/public/api/curso";
const urlLinguagens = "http://localhost/codeguide/api/public/api/linguagem";
let cursos;
let linguagens;
let listagemTotal;

const buscarApi = {
  async retornoApi(url) {
    const response = await fetch(url);
    return response.json();
  },
  async buscar() {
    let listagemCursos = await buscarApi.retornoApi(urlCursos);
    let listagemLinguagens = await buscarApi.retornoApi(urlLinguagens);
    cursos = listagemCursos.data;
    linguagens = listagemLinguagens.data;
    listagemTotal = deepClone(listagemLinguagens.data);
    this.juntarDados(listagemTotal, cursos);
    slide.allowSLide(linguagens);
    search.allowSearch();
  },
  juntarDados(arrayFinal, arrayOrigem) {
    Object.keys(arrayFinal).map(function (i) {
      Object.keys(arrayOrigem).map(function (j) {
        if (arrayOrigem[j].idlinguagem == arrayFinal[i].idlinguagem) {
          $.extend(arrayFinal[i], arrayOrigem[j]);
        }
      });
    });
  },
};

const highlight = {
  allowHighlight() {
    console.log($(".slider").children());
    let items = $(".slider").children();
    $(items).click(function () {
      highlight.createHighlight(this);
    });
  },
  createHighlight(el) {
    this.highlightRemove();
    const slider = $(el).parents(".row");
    const id = $(el).attr("data-curso");
    const highlightDiv = document.importNode(highlightTemp, true);
    const nomeCurso = highlightDiv.querySelector(
      `[data-highlight="nome-curso"]`
    );
    const descriCurso = highlightDiv.querySelector(
      `[data-highlight="descri-curso"`
    );
    const previewCurso = highlightDiv.querySelector(
      `[data-highlight="preview-curso"]`
    );
    const info = highlightDiv.querySelector(`[data-highlight="info-curso"]`);

    $(previewCurso).css(
      "background-image",
      `url('../source/imgcurso/${cursos[id - 1].imgcurso}')`
    );

    $(nomeCurso).text(cursos[id - 1].nomecurso);
    $(descriCurso).text(cursos[id - 1].descri);
    $(info).text(cursos[id - 1].pago);
    $(slider).append(highlightDiv).slideDown("slow");
    $(slider).find("section.highlight").slideDown("slow");
    $("html, body").animate(
      {
        scrollTop: $($(slider).find("section.highlight")).offset().top - 40,
      },
      500
    );
    model();
    $(".close-highlight").click(function () {
      highlight.highlightRemove();
      $("html, body").animate(
        {
          scrollTop: $($(slider)).offset().top - 70,
        },
        500
      );
    });
  },
  highlightRemove() {
    const highlights = document.querySelectorAll("section.highlight");

    if (highlights.length >= 1) {
      $(highlights).slideUp(250);
      setTimeout(function () {
        $(highlights).remove();
      }, 150);
    } else {
      $(highlights).remove();
    }
  },
};

const slide = {
  allowSLide(linguagem) {
    this.clean();
    Object.entries(linguagem).forEach(([key]) => {
      this.createRow(linguagem[key]);
    });
    $(sliderContainer).fadeIn("slow");
    this.slideControls.arrows();
    highlight.allowHighlight();
  },
  clean() {
    $(sliderContainer).empty();
    $(sliderContainer).fadeOut(100);
  },
  createRow(linguagem) {
    const div = document.createElement("div");
    let content = document.importNode(sliderRow, true);
    this.createItem(linguagem, content);
    content.querySelector(".slider-title h3").textContent = linguagem.nome;
    content
      .querySelector(".row")
      .setAttribute("data-row", `${linguagem.idlinguagem}`);
    sliderContainer.appendChild(div).appendChild(content);
  },
  createItem(linguagem, div) {
    Object.entries(cursos).forEach(([key]) => {
      let idlinguagem = cursos[key].idlinguagem;
      if (idlinguagem != null && idlinguagem != "" && idlinguagem != 0) {
        if (linguagem.idlinguagem == idlinguagem) {
          let img = document.createElement("img");
          img.setAttribute("src", `../source/imgcurso/${cursos[key].imgcurso}`);
          img.setAttribute("data-curso", cursos[key].idcurso);
          img.setAttribute("class", "item-slide");
          div.querySelector(".slider").appendChild(img);
        }
      }
    });
  },
  slideControls: {
    arrows() {
      const size = parseInt($(".slider").children().length);
      $(".handle").click(function (e) {
        e.preventDefault();
        const slider = $(this).parent().find(".slider");
        let index = parseInt($(slider).css("--slider-index"));
        let itemsPerScreen = parseInt($(":root").css("--images-per-screen"));
        const limite = Math.ceil(size / itemsPerScreen);

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
    },
  },
};

const search = {
  allowSearch() {
    const searchBar = document.getElementById("search-box");
    var typingTimer;
    var doneTypingInterval = 650;

    $(searchBar).keyup(function () {
      clearTimeout(typingTimer);
      if ($(searchBar).val) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
    });

    function doneTyping() {
      let searchString = $(searchBar).val().toLowerCase();
      let resultado = listagemTotal.filter((curso) => {
        return curso.nome.toLowerCase().includes(searchString);
      });

      $("html, body").animate(
        {
          scrollTop: $(sliderContainer).offset().top - 70,
        },
        500
      );
      slide.allowSLide(resultado);
    }
  },
};

buscarApi.buscar();

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
});
