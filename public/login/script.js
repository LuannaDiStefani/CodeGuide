import { exibirAlerta } from "../js/main.js";

const form = $("form[name='logar']");
const actionUrl = "http://localhost/codeguide/login/logar.php";

$(form).submit(function (e) {
  e.preventDefault();

  $.ajax({
    method: "POST",
    url: actionUrl,
    data: $(form).serialize() + "&form_name=" + $(form).attr("name"),
  })
    .done((response) => {
      console.log(response);
    }).fail((err) => {
      exibirAlerta("Erro ao logar, verifique seus dados corretamente", 2);
    });
});

function headerLocation() {}
