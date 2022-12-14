import {
  tabs,
  uploadButtons,
  insertDataList,
  exibirAlerta,
  urlCursos,
  urlLinguagens,
  _HOME,
} from "../../../public/js/modules.js";

if (sessionStorage.getItem("dados")) {
  let dados = JSON.parse(sessionStorage.getItem("dados"));
  if (dados.adm === 0) {
    let formCursos = new FormData();
    let formLinguagens = new FormData();

    const adminPage = {
      allowedFileTypes: "image.*|application/pdf",
      allowedFileSize: 1024,
      fetchApi() {
        fetch(urlLinguagens)
          .then((response) => response.json())
          .then((data) => insertDataList("linguagens", data.data));
      },
      cadastrarLinguagem(id) {
        const data = $(id).serialize();
        formLinguagens.append("dados", data);
        let file = $('[name="imglinguagem"]')[0].files[0];
        let filename = file["name"];
        let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");

        this.verificaFile(file, newFileName, formLinguagens);

        this.doAjax(urlLinguagens, formLinguagens);
      },
      cadastrarCurso(id) {
        const data = $(id).serialize();
        formCursos.append("dados", data);
        let file = $('[name="imgcurso"]')[0].files[0];
        let filename = file["name"];
        let newFileName = filename.replace(/[^A-Z0-9._]+/gi, "_");
        this.verificaFile(file, newFileName, formCursos);
        this.doAjax(urlCursos, formCursos);
      },
      doAjax(url, data) {
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
      },
      verificaFile(file, filename, form) {
        if (!file) {
          exibirAlerta(2);
        } else {
          if (!file.type.match(adminPage.allowedFileTypes)) {
            // Check file type
            exibirAlerta(4);
          } else if (file.size > adminPage.allowedFileSize * 1024) {
            // Check file size (in bytes)
            exibirAlerta(5);
          } else {
            form.append("file", file, filename);
          }
        }
      },
    };

    uploadButtons();
    tabs();
    adminPage.fetchApi();

    $("#cad-linguagem").submit(function (event) {
      event.preventDefault();
      adminPage.cadastrarLinguagem("#cad-linguagem");
    });

    $("#cad-curso").submit(function (event) {
      event.preventDefault();
      adminPage.cadastrarCurso("#cad-curso");
    });
  } else {
    /*window.location = "../../../public/";*/
  }
} else {
 /* window.location = "../../../public/login/";*/
}
