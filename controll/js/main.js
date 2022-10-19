$(document).ready(function () {
  $("#cad-curso").submit(function (event) {
    event.preventDefault();
  });
});

//Cadastro linguagens
$(document).ready(function () {
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();

    let data = new FormData();

    let file = $('[name="imglinguagem"]')[0].files[0];
    let allowedFileTypes = "image.*|application/pdf";
    let allowedFileSize = 2048;

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
        } else {
          exibirAlerta(2);
        }
      },
    });
  });
});
