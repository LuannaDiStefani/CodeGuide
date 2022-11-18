import { verificarAuth, exibirAlerta } from "../js/modules.js";

if (sessionStorage.getItem("dados")) {
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
      verificarDados();
    })
    .fail((err) => {
      exibirAlerta("Erro ao logar, verifique seus dados corretamente", 2);
    });
});

const verificarDados = async () => {
  await verificarAuth();

  setTimeout(() => {
    if (sessionStorage.getItem("dados")) {
      window.location = "http://localhost/CodeGuide/public/";
    }
  }, "200");
};
