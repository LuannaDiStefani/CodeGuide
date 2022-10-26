$(document).ready(function () {
  const allowedFileTypes = "image.*|application/pdf";
  const allowedFileSize = 1024;
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

    verificaFile(file, newFileName, formCursos);

    doAjax("../../api/public/api/curso/", formCursos);
  });

  function verificaFile(file, filename, form) {
    if (!file) {
      exibirAlerta(2);
    } else {
      if (!file.type.match(allowedFileTypes)) {
        // Check file type
        exibirAlerta(4);
      } else if (file.size > allowedFileSize * 1024) {
        // Check file size (in bytes)
        exibirAlerta(5);
      } else {
        form.append("file", file, filename);
      }
    }
  }

  function doAjax(url, data) {
    $.ajax({
      url: url,
      type: "POST",
      data: data,
      contentType: false,
      processData: false,
      success: function (response) {
        $("form").trigger("reset");
        exibirAlerta(`${response.status}: ${response.data}`, 1);
      },
    });
  }

  //Cadastro linguagens
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    const id = "#cad-linguagem";
    const data = $(id).serialize();
    formLinguagens.append("dados", data);
    let file = $('[name="imglinguagem"]')[0].files[0];
    let filename = file["name"];
    let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");

    verificaFile(file, newFileName, formLinguagens);

    doAjax("../../api/public/api/linguagem/", formLinguagens);
  });
});
