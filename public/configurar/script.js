import {
  model,
  pictureHoverEffect,
  tabs,
  uploadButtons,
  verificaFile,
  insertDataList,
} from "../js/modules.js";
import { exibirAlerta } from "../js/main.js";
import { buscarApi, dados } from "../js/slider.js";

const getLanguagens = async () => {
  await buscarApi.buscarLinguagem();
  insertDataList("stacks", dados.linguagens);
  allowInput();
  getUser();
};

getLanguagens();

function allowInput() {
  $("#search-stack").on("blur", function () {
    let selected = this.value.charAt(0);

    if (selected != "") {
      if (!isNaN(selected)) {
        $(".search-stack-icon")
          .empty()
          .append(
            `<img src="../../source/imglinguagem/${
              dados.linguagens[selected - 1].imagem
            }">`
          );
      }
    }
  });

  $(".close-model").click(function () {
    $(".search-stack-icon").empty();
    $("#search-stack").val("");
  });
}

function getUser() {
  dados.linguagens.forEach((item) => {
    $(".info-stacks-icon").append(`<i class="${item.icon}"></i>`);
  });

  $(".info-stacks-icon").append(
    `<i class="fa-regular fa-square-plus open-model"></i>`
  );

  model();
}

//Permitindo: modal, upload de foto de usuário e sistema de troca de abas

uploadButtons();
tabs();
pictureHoverEffect();

// Selecionando elementos
const formUsername = $('[name="verificar"]');
const actionUrl = "http://localhost/codeguide/api/public/api/usuario/";
const saveForm = document.getElementById("save-form-container");
const input = document.getElementById("username");
const changePicture = document.getElementById("send-picture");

//Botão de Save na aba de username
function createSaveButton(name) {
  return `<form action="" id="#${name}">
    <button class="btn-1">Salvar</button>
  </form>`;
}

//Quando digitar, remove botão de save.
$(input).keyup(function () {
  if ("#cad-username") {
    removeSave();
  }
});

//Mostrar botão de save
const showSave = () => {
  $(input).css("background", "ForestGreen");
  const saveButton = createSaveButton("cad-username");
  saveForm.insertAdjacentHTML("beforeend", saveButton);
};
const removeSave = () => {
  $(saveForm).empty();
  $(input).css("background", "rgb(0, 0, 0)");
};

// Alterar Username
$(formUsername).submit(function (e) {
  e.preventDefault();

  //Selecionar username
  const cadUsername = document.getElementById("#cad-username");

  //Checar se username já existe, caso encontre pede para o usuário digitar outro nome.
  if (!cadUsername) {
    $.ajax({
      method: "POST",
      url: actionUrl,
      data:
        $(formUsername).serialize() +
        "&form_name=" +
        $(formUsername).attr("name"),
    })
      .done(() => {
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

//Enviar dados do formulario para o php
$("#alterar-senha").submit(function (e) {
  e.preventDefault();

  console.log("enviar senha");
});

//Trazer upload de foto de perfil do usuário para enviar para o PHP
$(changePicture).submit(function (e) {
  e.preventDefault();
  const allowedFileTypes = "image.*|application/pdf";
  const allowedFileSize = 1024;
  let formData = new FormData();
  let file = $('[name="userpicture"]')[0].files[0];
  let filename = file["name"];
  let newFileName = filename.split(".");
  newFileName[0] = "01";
  newFileName = newFileName.join(".");
  verificaFile(file, newFileName, formData);

  //Enviar para o php
});
