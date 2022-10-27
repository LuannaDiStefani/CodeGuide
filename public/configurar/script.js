import {
  model,
  pictureHoverEffect,
  tabs,
  uploadButtons,
} from "../js/modules.js";
import { exibirAlerta } from "../js/main.js";

model();
uploadButtons();
tabs();
pictureHoverEffect();

const formUsername = $('[name="verificar"]');
const actionUrl = "http://localhost/codeguide/api/public/api/usuario/";
const saveForm = document.getElementById("save-form-container");
const input = document.getElementById("username");

function createSaveButton(name) {
  return `<form action="" id="#${name}">
    <button class="btn-1">Salvar</button>
  </form>`;
}
$(input).keyup(function (e) {
  if ("#cad-username") {
    removeSave();
  }
});

const showSave = () => {
  $(input).css("background", "ForestGreen");
  const saveButton = createSaveButton("cad-username");
  saveForm.insertAdjacentHTML("beforeend", saveButton);
};
const removeSave = () => {
  $(saveForm).empty();
  $(input).css("background", "rgb(0, 0, 0)");
};

$(formUsername).submit(function (e) {
  e.preventDefault();

  const cadUsername = document.getElementById("#cad-username");

  if (!cadUsername) {
    $.ajax({
      method: "POST",
      url: actionUrl,
      data:
        $(formUsername).serialize() +
        "&form_name=" +
        $(formUsername).attr("name"),
    })
      .done((response) => {
        showSave();
      })
      .fail((response) => {
        let resposta = response.responseJSON;
        exibirAlerta(`${resposta.status}: ${resposta.data}`, 2);
        $(input).css("background", "FireBrick");
        $(input).focus();
        setTimeout(() => {
          $(input).css("background", "rgb(0, 0, 0)");
        }, 1000);
      });
  }
});
