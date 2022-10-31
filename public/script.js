import { search, slide, dados } from "./js/slider.js";

const carregarIndex = async () => {
  await search.getData().then(mostrarSlides);
};

const mostrarSlides = async () => {
  slide.allowSlide(dados.linguagens.slice(0, 9), dados.cursos);
};

carregarIndex();
