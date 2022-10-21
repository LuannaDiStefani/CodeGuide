import Buscar from "../../controll/phpadmin/js/buscar";

$(document).ready(function () {
  const buscar = new Buscar("../../controll/phpadmin/js/buscar.php");
  $(".slider").append('<div class="loading">Carregando...</div>');

  async function pegarDados(nometabela, campo, nome, option) {
    //exemplo
    /* return buscar.param("linguagem", "", "", "1"); */
    return buscar.newBuscar(nometabela, campo, nome, option);
  }

  $.when(pegarDados("cursos", "", "", "")).then(exibirNoSlide);

  function exibirNoSlide() {
    $(".slider").empty();
    let infoCursos = buscar.retorno;
    Object.keys(infoCursos).forEach((key) => {
      /* console.log(infoCursos[key]["imagem"]); */
      $(".slider").append(
        `<img src="../../source/imglinguagem/${infoCursos[key]["imgcurso"]}" class="item-slide" data-curso="${infoCursos[key]["idcurso"]}">`
      );
    });

    allowSlide(infoCursos);
  }

  //Slider
  function allowSlide(infoCursos) {
    let size = parseInt($(".slider").children().length);

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
