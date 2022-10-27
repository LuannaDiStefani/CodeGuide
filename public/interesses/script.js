import { buscarApi, dados } from "../js/slider.js";

const interessesContainer = document.querySelector(".interesses");

const interesses = {
  linguagens: [],
  clean() {
    $(interessesContainer).empty();
  },
  async fetch() {
    await buscarApi.buscarLinguagem();
    this.linguagens = dados.linguagens;
    this.create();
  },
  create() {
    this.linguagens.forEach((item) => {
      const linguagem = document.createElement("div");
      linguagem.classList.add("itens");
      $(linguagem).css(
        "background-image",
        `url(http://localhost/codeguide/source/imglinguagem/${item.imagem})`
      );
      $(linguagem).attr("data-id", item.idlinguagem);
      $(linguagem).attr("title", item.nome);
      interessesContainer.appendChild(linguagem);
    });
    this.select();
  },
  select() {
    $(".itens").click(function () {
      console.log(this);
    });
  },
};

interesses.clean();
interesses.fetch();
