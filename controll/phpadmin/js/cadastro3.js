$(document).ready(function () {
  class Cadastrar {
    constructor(path, formatData) {
      this.path = path;
      this.formatData = formatData;
      this.allowedFileTypes = "image.*|application/pdf";
      this.allowedFileSize = 1024;
    }

    cadastrarCurso(id, file) {
      this.verificaFile(file);
      this.organizarDados(id);
    }

    verificaFile(file) {
      if (!file) {
        exibirAlerta(2);
      } else {
        if (!file.type.match(this.allowedFileTypes)) {
          // Check file type
          exibirAlerta(4);
        } else if (file.size > this.allowedFileSize * 1024) {
          // Check file size (in bytes)
          exibirAlerta(5);
        } else {
          if (this.formatData.append("file", file, file.name)) {
            console.log("add");
          }
        }
      }
    }

    organizarDados(id) {
      let info = $(id).serialize();
      this.formatData.append("info", info);
      this.doAjax(id);
    }

    doAjax(id, data) {
      $.ajax({
        url: this.path,
        type: "POST",
        data: this.formatData,
        contentType: false,
        processData: false,
      }).done(function (result) {
        $(id)[0].reset();
        exibirAlerta(1);
        console.log(result);
      });
    }
  }

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
