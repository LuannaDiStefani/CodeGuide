import {
  verificaFile,
  doAjax,
  urlCursos,
  urlLinguagens,
} from "../../../public/js/modules";

$(document).ready(function () {
  let formCursos = new FormData();
  let formLinguagens = new FormData();

  $("#cad-curso").submit(function (event) {
    event.preventDefault();
    const id = "#cad-curso";
    const data = $(id).serialize();
    formCursos.append("dados", data);
    let file = $('[name="imgcurso"]')[0].files[0];
    let filename = file["name"];
    let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");

    const verified = verificaFile(file);
    if (verified) {
      formCursos.append("file", file, newFileName);
      doAjax(urlCursos, formCursos);
    }
  });

  //Cadastro linguagens
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    const id = "#cad-linguagem";
    const data = $(id).serialize();
    formLinguagens.append("dados", data);
    let file = $('[name="imglinguagem"]')[0].files[0];
    let filename = file["name"];
    let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");

    const verified = verificaFile(file);
    if (verified) {
      formLinguagens.append("file", file, newFileName);
      doAjax(urlLinguagens, formLinguagens);
    }
  });
});
