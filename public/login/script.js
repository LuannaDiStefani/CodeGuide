import { exibirAlerta } from "../js/main.js";

const form = $("form[name='logar']");
const actionUrl = "http://localhost/codeguide/api/public/api/usuario/";

$(form).submit(function (e) {
  e.preventDefault();

  let dados = "logar=logar&";
  dados += $(form).serialize();

  $.ajax({
    method: "POST",
    url: actionUrl,
    data: dados,
  })
    .done((response) => {
      exibirAlerta(`${response.status}: ${response.data}`, 1);
    })
    .fail((response) => {
      let resposta = response.responseJSON;
      exibirAlerta(`${resposta.status}: ${resposta.data}`, 2);
    });
});

function headerLocation() {}
