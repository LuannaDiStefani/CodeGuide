import { firstLetterCamelCase, exibirAlerta, verificarAuth, urlUser, _HOME } from "../js/modules.js";

if (sessionStorage.getItem("dados")) {
  window.location = '../';
}

const form = $("form[name='cadastro']");

$(`[name="nome"]`).blur(function () {
  this.value = firstLetterCamelCase(this.value);
});

$(`[name="nomeuser"`).blur(function () {
  const input = this;
  if (!input.value == "") {
    $.ajax({
      method: "POST",
      url: urlUser,
      data: "username=" + $(input).val() + "&form_name=verificar",
    })
      .done(() => {
        $(input).css("border", "1px solid forestgreen");
      })
      .fail((response) => {
        let err = response.responseJSON.data;
        exibirAlerta(err, 2);
        input.value = "";
      });
  }
});

$(form).submit(function (e) {
  e.preventDefault();

  $.ajax({
    method: "POST",
    url: urlUser,
    data: $(form).serialize() + "&form_name=" + $(form).attr("name"),
  })
    .done((response) => {
      exibirAlerta(`${response.status}: ${response.data}`, 1);
      logar();
    })
    .fail((response) => {
      let resposta = response.responseJSON;
      exibirAlerta(`Error: ${resposta.data}`, 2);
    });
});

function logar(){
    const actionUrl = "../../login/logar.php";
 $.ajax({
    method: "POST",
    url: actionUrl,
    data: `email=${$(`[name="email"]`).val()}&senha=${$(`[name="senha"]`).val()}&form_name=logar`,
  })
    .done((response) => {
      sessionStorage.setItem("session", response);
      verificarAuth();
      setTimeout(() => {
          if (sessionStorage.getItem("dados") !== undefined) {
          sessionStorage.setItem("pass", $('[name="senha"]').val());
          window.location = "../interesses/";
        }
    }, "300");
    })
    .fail((err) => {
      exibirAlerta("Erro ao cadastrar", 2);
    });
}
