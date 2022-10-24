$(document).ready(function () {
  $(".slider").append('<div class="loading">Carregando...</div>');
  let sliderContainer = document.getElementById("slider-container");
  let highlightTemp = document.getElementById("highlight").content;
  let sliderRow = document.getElementById("slider-row").content;
  let cursos;
  let linguagens;
  let listagemTotal;

  //Deep Clone para Objeto
  const deepClone = (obj) => {
    // Se não for array ou objeto, retorna null
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    let cloned, i;

    // Handle: Date
    if (obj instanceof Date) {
      cloned = new Date(obj.getTime());
      return cloned;
    }

    // Handle: array
    if (obj instanceof Array) {
      let l;
      cloned = [];
      for (i = 0, l = obj.length; i < l; i++) {
        cloned[i] = deepClone(obj[i]);
      }

      return cloned;
    }

    // Handle: object
    cloned = {};
    for (i in obj)
      if (obj.hasOwnProperty(i)) {
        cloned[i] = deepClone(obj[i]);
      }

    return cloned;
  };
  //Fim Deep Clone

  const getApi = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const fetchData = async () => {
    let listagemCursos = await getApi("../api/public/api/curso");
    let listagemLinguagens = await getApi("../api/public/api/linguagem");

    cursos = listagemCursos.data;
    linguagens = listagemLinguagens.data;

    listagemTotal = deepClone(listagemLinguagens.data);

    Object.keys(listagemTotal).map(function (i) {
      Object.keys(cursos).map(function (j) {
        if (cursos[j].idlinguagem == listagemTotal[i].idlinguagem) {
          $.extend(listagemTotal[i], cursos[j]);
        }
      });
    });

    exibirNoSlide(linguagens);
    allowSearch();
  };
  fetchData();

  function allowSearch() {
    const searchBar = document.getElementById("search-box");
    var typingTimer;
    var doneTypingInterval = 550;

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
          scrollTop: $("#slider-container").offset().top - 40,
        },
        500
      );
      exibirNoSlide(resultado);
    }
  }

  function exibirNoSlide(object) {
    $("#slider-container").empty();

    Object.entries(object).forEach(([key]) => {
      criarRow(object[key]);
    });

    allowSlide();
  }

  function criarRow(linguagemKey) {
    let linguagem = linguagemKey;
    const div = document.createElement("div");
    let content = document.importNode(sliderRow, true);
    Object.entries(cursos).forEach(([key]) => {
      let idlinguagem = cursos[key].idlinguagem;
      if (idlinguagem != null && idlinguagem != "" && idlinguagem != 0) {
        if (linguagem.idlinguagem == idlinguagem) {
          let img = document.createElement("img");
          img.setAttribute("src", `../source/imgcurso/${cursos[key].imgcurso}`);
          img.setAttribute("class", "item-slide");
          img.setAttribute("data-curso", `${cursos[key].idcurso}`);
          content.querySelector(".slider").appendChild(img);
        }
      }
    });

    content.querySelector(".slider-title h3").textContent = linguagem.nome;
    content
      .querySelector(".row")
      .setAttribute("data-row", `${linguagem.idlinguagem}`);
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
