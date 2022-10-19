$(document).ready(function () {
  $("#cad-curso").submit(function (event) {
    event.preventDefault();

    let formatData = new FormData();
    let file = $('[name="imgcurso"]')[0].files[0];
    let values = {};
    let inputs = Array.from($(this).find(":input"));
    let radio = $(inputs).filter(":checked").val();
    let allowedFileTypes = "image.*|application/pdf";
    let allowedFileSize = 1024;

    for (let i = 0; i < inputs.length - 2; i++) {
      if ($(inputs[i]).is(":radio")) {
        values[$(inputs[i]).attr("name")] = radio;
        i++;
      } else {
        values[$(inputs[i]).attr("name")] = $(inputs[i]).val();
      }
    }

    values.linguagem = values.linguagem[0];

    if (!file) {
      exibirAlerta(2);
    } else {
      if (!file.type.match(allowedFileTypes)) {
        // Check file type
        exibirAlerta(
          "File extension error! Please select the allowed file type only",
          2
        );
      } else if (file.size > allowedFileSize * 1024) {
        // Check file size (in bytes)
        exibirAlerta(
          "File size error! Sorry, the selected file size is larger than the allowed size",
          2
        );
      } else {
        // Append the uploadable file to FormData object
        formatData.append("file", file, file.name);
        /* let json = JSON.stringify(values); */
        let info = $("#cad-curso").serialize();
        formatData.append("info", info);

        $.ajax({
          url: "cadastro1.php",
          type: "POST",
          data: formatData,
          contentType: false,
          processData: false,
        }).done(function (result) {
          $("#cad-form").trigger("reset");
          exibirAlerta(result, 1);
          console.log(result);
        });
      }
    }
  });
});

//Cadastro linguagens
$(document).ready(function () {
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();

    let data = new FormData();

    let nome = $('[name="nomelinguagem"]').val();
    let file = $('[name="imglinguagem"]')[0].files[0];
    let allowedFileTypes = "image.*|application/pdf";
    let allowedFileSize = 1024;

    if (!file) {
      exibirAlerta(2);
    } else if (nome == "") {
      exibirAlerta(2);
    } else {
      if (!file.type.match(allowedFileTypes)) {
        // Check file type
        exibirAlerta(
          "File extension error! Please select the allowed file type only",
          2
        );
      } else if (file.size > allowedFileSize * 1024) {
        // Check file size (in bytes)
        exibirAlerta(
          "File size error! Sorry, the selected file size is larger than the allowed size",
          2
        );
      } else {
        // Append the uploadable file to FormData object
        data.append("file", file, file.name);
        data.append("nome", nome);
      }

      $.ajax({
        url: "cadastro2.php",
        type: "POST",
        data: data,
        contentType: "application/json; charset=utf-8",
        contentType: false,
        processData: false,
        success: function (result) {
          if (result != 0) {
            $("#cad-form").trigger("reset");
            exibirAlerta(result, 1);
            console.log(result);
          } else {
            exibirAlerta(2);
          }
        },
      });
    }
  });
});
