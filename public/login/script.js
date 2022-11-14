import { exibirAlerta } from "../js/main.js";
import { verificarAuth } from "../js/modules.js";

const session = verificarAuth();
if (session) {
  window.location = "http://localhost/codeguide/public/";
}

const form = $("form[name='logar']");
const actionUrl = "http://localhost/CodeGuide/login/logar.php";

$(form).submit(function (e) {
  e.preventDefault();

  $.ajax({
    method: "POST",
    url: actionUrl,
    data: $(form).serialize() + "&form_name=" + $(form).attr("name"),
  })
    .done((response) => {
      sessionStorage.setItem("session", response);
      const session = verificarAuth();
      if (session) {
        window.location = "http://localhost/codeguide/public/";
      }
    })
    .fail((err) => {
      exibirAlerta("Erro ao logar, verifique seus dados corretamente", 2);
    });
});
