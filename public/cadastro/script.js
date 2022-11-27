import { firstLetterCamelCase, exibirAlerta, urlUser, _HOME } from "../js/modules.js";

if (sessionStorage.getItem("dados")) {
  window.location = `${_HOME}/public/`;
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
    })
    .fail((response) => {
      let resposta = response.responseJSON;
      exibirAlerta(`Error: ${resposta.data}`, 2);
    });
});
