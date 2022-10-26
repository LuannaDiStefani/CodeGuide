import { slide, dados, search } from "./js/slider.js";

const carregarSlides = async () => {
  await search.getData();
  search.allowSearch();
  slide.allowSlide(dados.linguagens.slice(0, 9), dados.cursos);
};

carregarSlides();

let url = window.location.pathname.split("/");
console.log(url[url.length - 1]);
