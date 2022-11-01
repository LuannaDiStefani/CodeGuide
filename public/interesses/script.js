import { buscarApi, dados } from "../js/slider.js";
import { exibirAlerta } from "../js/main.js";

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
      $(this).toggleClass("selected");
    });
  },
  submit() {
    $(submit).click((e) => {
      e.preventDefault();
      const selecionados = document.querySelectorAll(".selected");
      if (selecionados.length < 3) {
        exibirAlerta("Selecione pelo menos 3 itens");
      } else {
        for (let i = 0; i < selecionados.length; i++) {
          const id = $(selecionados[i]).attr("data-id");
          this.selected.push(id);
        }
        console.log(this.selected);
      }
    });
  },
};

interesses.clean();
interesses.fetch();
interesses.submit();
