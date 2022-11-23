import { buscarApi, dados } from "../js/slider.js";
import { exibirAlerta, getNewToken } from "../js/modules.js";

if (sessionStorage.getItem("dados")) {
  let userData = JSON.parse(sessionStorage.getItem("dados"));
  const actionUrl = "../../api/public/api/usuario/";

  const interessesContainer = document.querySelector(".interesses");
  const submit = document.querySelector(".enviar button");

  const interesses = {
    linguagens: [],
    selected: [],
    clean() {
      $(interessesContainer).empty();
    },
    async fetch() {
      await buscarApi.buscarLinguagem();
      if (this.linguagens) {
        this.linguagens = dados.linguagens;
        this.create();
      }
    },
    create() {
      this.linguagens.forEach((item) => {
        const linguagem = document.createElement("div");
        linguagem.classList.add("itens");
        $(linguagem).css(
          "background-image",
          `url(../../source/imglinguagem/${item.imagem})`
        );
        $(linguagem).attr("data-id", item.idlinguagem);
        $(linguagem).attr("title", item.nome);
        interessesContainer.appendChild(linguagem);
      });
      this.select();
    },
    select() {
      $(".itens").click(function () {
        $(this).toggleClass("selected");
      });
    },
    submit() {
      $(submit).click((e) => {
        e.preventDefault();
        this.selected = [];
        const selecionados = document.querySelectorAll(".selected");
        if (selecionados.length < 3) {
          exibirAlerta("Selecione pelo menos 3 itens");
        } else {
          for (let i = 0; i < selecionados.length; i++) {
            const id = $(selecionados[i]).attr("data-id");
            $.ajax({
              method: "POST",
              url: actionUrl,
              data: `iduser=${
                userData.iduser
              }&idlinguagem=${id}&form_name=${"cad-interesse"}`,
            });
          }
          getNewToken();
          setTimeout(function () {
            window.location = "../";
          }, 500);
        }
      });
    },
  };

  interesses.clean();
  interesses.fetch();
  interesses.submit();
} else {
  window.location = "../login/";
}
