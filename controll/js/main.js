$(document).ready(function () {
  $("#cad-curso").submit(function (event) {
    event.preventDefault();

    console.log($(this));

    /* let nomecurso = $('[name="nomecurso"]').val();
    let descri = $('[name="descri"]').val();
    let linguagem = $('[name="linguagem"]').val();
    let pago = $('[name="pago"]:checked').val();
    let plataforma = $('[name="plataforma"]').val();
    let linkcurso = $('[name="linkcurso"]').val();
    let videocurso = $('[name="videocurso"]').val();

    console.log(linguagem);

    $.ajax({
      method: "POST",
      url: "enviar.php",
      data: {
        nomecurso: nomecurso,
        descri: descri,
        linguagem: linguagem,
        pago: pago,
        plataforma: plataforma,
        linkcurso: linkcurso,
        videocurso: videocurso,
      },
    }).done(function (result) {
      $("#cad-form").trigger("reset");
      exibirAlerta(1);
    }); */
  });
});

//Cadastro linguagens
$(document).ready(function () {
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    let formData = new FormData();
    let file = $('[name="imglinguagem"]')[0].files[0];
    formData.append("file", file);

    $.ajax({
      url: "cadastro2.php",
      type: "post",
      data: formData,
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
