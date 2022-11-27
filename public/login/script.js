import { verificarAuth, exibirAlerta, _HOME } from "../js/modules.js";

if (sessionStorage.getItem("dados")) {
  window.location = `${_HOME}/public`;
}

const form = $("form[name='logar']");
const actionUrl = "../../login/logar.php";

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
    if (sessionStorage.getItem("dados") !== undefined) {
      sessionStorage.setItem("pass", $('[name="senha"]').val());
      window.location = `${_HOME}/public`;
    }
  }, "300");
};
