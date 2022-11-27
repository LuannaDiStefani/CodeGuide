import {
  deepClone,
  model,
  verificarAuth,
  firstLetterCamelCase,
  getNewToken,
  urlCursos,
  urlLinguagens,
  urlUser,
  _HOME,
} from "./modules.js";

const session = verificarAuth();

$(".slider").append('<div class="loading">Carregando...</div>');
const sliderContainer = document.getElementById("slider-container");
let highlightTemp = document.getElementById("highlight").content;
let sliderRow = document.getElementById("slider-row").content;

export const dados = {
  cursos: [],
  linguagens: [],
  listagemTotal: [],
};

export const buscarApi = {
  async retornoApi(url) {
    const response = await fetch(url);
    return response.json();
  },
  async buscarLinguagem() {
    let listagemLinguagens = await buscarApi.retornoApi(urlLinguagens);
    dados.linguagens = listagemLinguagens.data;
  },
  async buscarCurso() {
    let listagemCursos = await buscarApi.retornoApi(urlCursos);
    dados.cursos = listagemCursos.data;
  },
  clonarArray(array, array2) {
    let listagemTotal = deepClone(array);
    this.juntarDados(listagemTotal, array2);
    return listagemTotal;
  },
  juntarDados(arrayFinal, arrayOrigem) {
    Object.keys(arrayFinal).map(function (i) {
      Object.keys(arrayOrigem).map(function (j) {
        if (arrayOrigem[j].idlinguagem == arrayFinal[i].idlinguagem) {
          $.extend(arrayFinal[i], arrayOrigem[j]);
        }
      });
    });
    dados.listagemTotal = arrayFinal;
  },
};

export const highlight = {
  allowHighlight() {
    let items = $(".slider").children();
    $(items).click(function () {
      highlight.createHighlight(this);
    });
  },
  createHighlight(el) {
    this.highlightRemove();
    setTimeout(function () {
      const slider = $(el).parents(".row");
      const id = $(el).attr("data-curso");
      const highlightDiv = document.importNode(highlightTemp, true);

      const nomeCurso = highlightDiv.querySelector(
        `[data-highlight="nome-curso"]`
      );
      const linkCurso = highlightDiv.querySelector(
        `[data-highlight="link-curso"]`
      );
      const descriCurso = highlightDiv.querySelector(
        `[data-highlight="descri-curso"`
      );
      const previewCurso = highlightDiv.querySelector(
        `[data-highlight="preview-curso"]`
      );
      const plataformaCurso = highlightDiv.querySelector(
        `[data-highlight="plataforma-curso"]`
      );
      const favLink = highlightDiv.querySelector(`[data-highlight="fav-link"]`);
      const info = highlightDiv.querySelector(`[data-highlight="info-curso"]`);
      var highlightId = highlightDiv.querySelector("[data-id]");

      $(previewCurso).css(
        "background-image",
        `url('${_HOME}/public/source/imgcurso/${dados.cursos[id - 1].imgcurso}')`
      );
      

      if (sessionStorage.getItem("session")) {
        let userFav = JSON.parse(sessionStorage.getItem("favoritos"));
        userFav.map((item) => {
          if (item.idcurso == id) {
            $(favLink).children().addClass("active-rate");
          }
        });
        let userData = JSON.parse(sessionStorage.getItem("dados"));
        $(favLink).click(function (e) {
          e.preventDefault();
          $(favLink).children().toggleClass("active-rate");

          $.ajax({
            method: "POST",
            url: urlUser,
            data: `iduser=${
              userData.iduser
            }&idcurso=${id}&form_name=${"add-fav"}`,
          }).done((response) => {
            getNewToken();
          });
        });
      }else{
          $(favLink).attr("href", `${_HOME}/public/login/`);
      }

      $(nomeCurso).text(dados.cursos[id - 1].nomecurso);
      $(linkCurso).attr("href", dados.cursos[id - 1].link);
      $(descriCurso).text(dados.cursos[id - 1].descri);
      $(info).text(firstLetterCamelCase(dados.cursos[id - 1].pago));
      $(plataformaCurso).text(
        firstLetterCamelCase(dados.cursos[id - 1].plataforma)
      );
      $(slider).append(highlightDiv).slideDown("slow");
      $(slider).find("section.highlight").slideDown("slow");
      $("html, body").animate(
        {
          scrollTop: $(highlightId).offset().top - 50,
        },
        500
      );
      model();
      if (
        !(
          $(".course-description p").prop("scrollHeight") >
          $(".course-description").height()
        )
      ) {
        $(".read-more").hide();
      }
      $(".read-more").click((el) => {
        $(".course-description").toggleClass("showContent");
        let buttonText = el.currentTarget;
        if (buttonText.innerText == "Leia mais") {
          buttonText.innerText = "Fechar";
        } else {
          $("html, body").animate(
            {
              scrollTop: $(highlightId).offset().top - 50,
            },
            500
          );
          buttonText.innerText = "Leia mais";
        }
      });

      $(".close-highlight").click(function () {
        highlight.highlightRemove();
        $("html, body").animate(
          {
            scrollTop: $($(slider)).offset().top - 70,
          },
          500
        );
      });
    }, 150);
  },
  highlightRemove() {
    const highlights = document.querySelector("section.highlight");

    if (highlights) {
      $(highlights).slideUp(250);
      setTimeout(function () {
        $(highlights).remove();
      }, 150);
    }
  },
};

export const slide = {
  allowSlide(linguagem) {
    dados.linguagens = linguagem;
    this.clean();
    Object.entries(dados.linguagens).forEach(([key]) => {
      this.createRow(dados.linguagens[key]);
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
    if (content.querySelector(".slider").childElementCount > 0) {
      sliderContainer.appendChild(div).appendChild(content);
    }
  },
  createItem(linguagem, div) {
    Object.entries(dados.cursos).forEach(([key]) => {
      let idlinguagem = dados.cursos[key].idlinguagem;
      if (idlinguagem != null && idlinguagem != "" && idlinguagem != 0) {
        if (linguagem.idlinguagem == idlinguagem) {
          let img = document.createElement("img");
          img.setAttribute(
            "src",
            `${_HOME}/public/source/imgcurso/${dados.cursos[key].imgcurso}`
          );
          img.setAttribute("data-curso", dados.cursos[key].idcurso);
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

export const search = {
  async getData() {
    await buscarApi.buscarLinguagem();
    await buscarApi.buscarCurso();
    buscarApi.clonarArray(dados.linguagens, dados.cursos);
  },
  async allowSearch() {
    const searchBar = document.getElementById("search-box");
    var typingTimer;
    const doneTypingInterval = 650;

    $(searchBar).keyup(function () {
      clearTimeout(typingTimer);
      if ($(searchBar).val) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
      function doneTyping() {
        doSearch($(searchBar).val());
      }
    });
  },
};

export const doSearch = async (param) => {
  const searchString = param.toLowerCase();
  if (!dados.linguagens.length) {
    await search.getData();
  }

  let resultado = dados.listagemTotal.filter((curso) => {
    return curso.nome.toLowerCase().includes(searchString);
  });

  if (resultado) {
    $("html, body").animate(
      {
        scrollTop: $(sliderContainer).offset().top - 70,
      },
      500
    );
    $("main").empty();
    slide.allowSlide(resultado);
  }
};
