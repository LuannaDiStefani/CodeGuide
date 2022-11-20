import {
  model,
  pictureHoverEffect,
  tabs,
  uploadButtons,
  verificaFile,
  insertDataList,
  exibirAlerta,
  doAjax,
  getNewToken,
  firstLetterCamelCase,
} from "../js/modules.js";
import { buscarApi, dados, search } from "../js/slider.js";

if (sessionStorage.getItem("dados")) {
  let userData = JSON.parse(sessionStorage.getItem("dados"));

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
    const getFavorites = async () => {
      const favoritos = JSON.parse(sessionStorage.getItem("favoritos"));
      await search.getData();
      favoritos.map((item) => {
        dados.cursos.map((index) => {
          if (item.idcurso == index.idcurso) {
            $(".edit-field-fav").append(
              `<div class="wrapper">
              <div data-id="${
                index.idcurso
              }" class="remove-fav">Remover<i class="fa-regular fa-rectangle-xmark"></i></div>
                  <div class="container-fav">
                      <div class="favoritos-img">
                        <img src="../../source/imgcurso/${index.imgcurso}">
                      </div>
                      <div class="favoritos-info">
                          <h3>${index.nomecurso}</h3>
                          <p>Plataforma: <span>${firstLetterCamelCase(
                            index.plataforma
                          )}</span></p>
                          <p>Pago: <span>${firstLetterCamelCase(
                            index.pago
                          )}</span></p>
                          <a href="${
                            index.link
                          }" target="_blank">Assistir agora <i class="fa-solid fa-arrow-up-right-from-square"></i></a>       
                      </div>
                  </div>
              </div> `
            );
          }
        });
      });

      $(".remove-fav").click(function () {
        let idcurso = $(this).attr("data-id");
        let confirmacao = confirm("Deseja excluir favorito?");
        if (confirmacao) {
          $.ajax({
            method: "POST",
            url: actionUrl,
            data: `iduser=${
              userData.iduser
            }&idcurso=${idcurso}&form_name=${"del-fav"}`,
          }).done((response) => {
            exibirAlerta(`${response.status}: ${response.data}`, 1);
            getNewToken();
            setTimeout(function () {
              location.reload();
            }, 500);
          });
        }
      });
    };

    getFavorites();

    const getInterestsIcon = () => {
      const interesses = JSON.parse(sessionStorage.getItem("interesses"));

      interesses.map((item) => {
        dados.linguagens.map((index) => {
          if (item.idlinguagem == index.idlinguagem) {
            $(".info-stacks-icon").append(
              `<i class="${index.icon}"></i>
              <span><i data-function="delete-interest" data-id=${index.idlinguagem} class="fa-solid fa-xmark"></i></span>`
            );
          }
        });
      });
    };

    getInterestsIcon();

    $(`[data-function="delete-interest"]`).click(function () {
      let idlinguagem = $(this).attr("data-id");
      let confirmacao = confirm("Deseja excluir interesse?");
      if (confirmacao) {
        $.ajax({
          method: "POST",
          url: actionUrl,
          data: `iduser=${
            userData.iduser
          }&idlinguagem=${idlinguagem}&form_name=${"del-interesse"}`,
        })
          .done((response) => {
            exibirAlerta(`${response.status}: ${response.data}`, 1);
            getNewToken();
            setTimeout(function () {
              location.reload();
            }, 500);
          })
          .fail((response) => {
            exibirAlerta(`${response.status}: ${response.data}`, 2);
          });
      }
    });

    $(".info-stacks-icon").append(
      `<i class="fa-regular fa-square-plus open-model"></i>`
    );

    if (userData.fotoperfil !== "") {
      $(".edit-user-picture img").attr(
        "src",
        `../../source/imguser/${userData.fotoperfil}`
      );
      $(".img-preview img").attr(
        "src",
        `../../source/imguser/${userData.fotoperfil}`
      );
    }

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
    return `<form id="${name}">
    <button type="submit" class="btn-1">Salvar</button>
  </form>`;
  }

  //Quando digitar, remove botão de save.
  $(input).keyup(function () {
    if ("cad-username") {
      removeSave();
    }
  });

  //Mostrar botão de save
  const showSave = () => {
    $(input).css("background", "ForestGreen");
    const saveButton = createSaveButton("cad-username");
    saveForm.insertAdjacentHTML("beforeend", saveButton);
    allowSend();
  };
  const removeSave = () => {
    $(saveForm).empty();
    $(input).css("background", "rgb(0, 0, 0)");
  };
  function allowSend() {
    $("#cad-username").submit(function (e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: actionUrl,
        data:
          $(input).serialize() +
          "&form_name=" +
          $(this).attr("id") +
          "&id=" +
          userData.iduser,
      })
        .done((response) => {
          exibirAlerta(`${response.status}: ${response.data}`, 1);
          getNewToken();
          input.value = "";
          $(input).css("background", "rgb(0, 0, 0)");
        })
        .fail((response) => {
          exibirAlerta(`${response.status}: ${response.data}`, 2);
        });
    });
  }

  // Alterar Username
  $(formUsername).submit(function (e) {
    e.preventDefault();

    //Selecionar username
    const cadUsername = document.getElementById("cad-username");

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
    const pass = $(`[name="nova-senha"]`).val();
    const confPass = $(`[name="confirmar-senha"]`).val();

    if (pass === confPass) {
      $.ajax({
        method: "POST",
        url: actionUrl,
        data: `senha=${pass}&form_name=${$(this).attr("id")}&id=${
          userData.iduser
        }`,
      })
        .done((response) => {
          exibirAlerta(`${response.status}: ${response.data}`, 1);
          getNewToken(pass);
          $(this).trigger("reset");
        })
        .fail((response) => {
          exibirAlerta(`${response.status}: ${response.data}`, 2);
        });
    } else {
      exibirAlerta("Senhas diferentes", 2);
    }
  });

  //Trazer upload de foto de perfil do usuário para enviar para o PHP
  $(changePicture).submit(function (e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", userData.iduser);
    formData.append("form_name", "update-picture");
    let file = $('[name="userpicture"]')[0].files[0];
    let filename = file["name"];
    let newFileName = filename.split(".");
    newFileName[0] = userData.iduser;
    newFileName = newFileName.join(".");
    const verified = verificaFile(file);
    if (verified) {
      formData.append("file", file, newFileName);
      doAjax("http://localhost/codeguide/api/public/api/usuario", formData);
      $(".edit-user-picture img").attr(
        "src",
        `../../source/imguser/${userData.fotoperfil}`
      );
      $(".close-model").trigger("click");

      getNewToken();

      setTimeout(function () {
        location.reload();
      }, 400);
    }
  });

  $(`[data-function="send-interest"]`).click(function () {
    const idlinguagem = $("#search-stack").val()[0];
    $.ajax({
      method: "POST",
      url: actionUrl,
      data: `iduser=${
        userData.iduser
      }&idlinguagem=${idlinguagem}&form_name=${"cad-interesse"}`,
    })
      .done((response) => {
        exibirAlerta(`${response.status}: ${response.data}`, 1);
        getNewToken();
        setTimeout(function () {
          location.reload();
        }, 500);
      })
      .fail((response) => {
        exibirAlerta(`${response.status}: ${response.data}`, 2);
      });
  });
} else {
  window.location = "http://localhost/codeguide/public/login/";
}
