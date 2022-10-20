import Cadastrar from "./cadastrar.js";

$(document).ready(function () {
  let formatData = new FormData();
  const cadastrar1 = new Cadastrar("./cadastro1.php", formatData);
  const cadastrar2 = new Cadastrar("./cadastro2.php", formatData);

  $("#cad-curso").submit(function (event) {
    event.preventDefault();

    let id = "#cad-curso";
    let file = $('[name="imgcurso"]')[0].files[0];
    cadastrar1.cadastrarCurso(id, file);
  });

  //Cadastro linguagens
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    let id = "#cad-linguagem";
    let file = $('[name="imglinguagem"]')[0].files[0];
    cadastrar2.cadastrarCurso(id, file);
  });
});
