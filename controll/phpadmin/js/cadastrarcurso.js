$(document).ready(function () {
  const allowedFileTypes = "image.*|application/pdf";
  const allowedFileSize = 1024;
  let formData = new FormData();

  $("#cad-curso").submit(function (event) {
    event.preventDefault();
    const id = "#cad-curso";
    const data = $(id).serialize();
    formData.append("dados", data);
    let file = $('[name="imgcurso"]')[0].files[0];
    let filename = file["name"];
    let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");

    verificaFile(file, newFileName);

    /*    $.ajax({
      url: "../../../api/public/api/curso/",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        exibirAlerta(`${response.status}: ${response.data}`);
      },
    }); */

    doAjax("../../../api/public/api/curso/", formData);
  });

  function verificaFile(file, filename) {
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
        formData.append("file", file, filename);
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
        exibirAlerta(`${response.status}: ${response.data}`);
      },
    });
  }

  //Cadastro linguagens
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    let id = "#cad-linguagem";
    let file = $('[name="imglinguagem"]')[0].files[0];
    let filename = file["name"];
    console.log(filename);
    let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");
    console.log(newFileName);

    cadastrar2.cadastrarCurso(id, file, newFileName);
  });

  //Options DataList
  /* $.when(pegarDados("linguagem", "", "", "")).then(
    insertDataList("linguagens", buscar.retorno)
  );

  function insertDataList(id, dados) {
    let options = "";
    let datalist = document.getElementById(id);
    for (let i = 0; i < dados.length; i++) {
      options += `<option value="${dados[i]["idlinguagem"]} - ${dados[i]["nome"]}" />`;
    }
    datalist.insertAdjacentHTML("beforeend", options);
  } */
});
