export const urlCursos =
  "http://exposoftalcina.com/3tid/codeguide/api/public/curso/";
export const urlUser =
  "http://exposoftalcina.com/3tid/codeguide/api/public/usuario/";
export const urlLinguagens =
  "http://exposoftalcina.com/3tid/codeguide/api/public/linguagem/";

export function model() {
  const methods = {
    open() {
      $(".model-container").css("transform", "scale(1)");
      setTimeout(function () {
        $(".model-container").css("background", "rgba(0, 0, 0, 0.8)");
      }, 400);
    },
    close() {
      $(".model-container").css("background", "transparent");
      setTimeout(function () {
        $(".model-container").css("transform", "scale(0)");
      }, 200);
    },
  };

  $(".open-model").click(function () {
    methods.open();
  });

  $(".close-model").click(function () {
    methods.close();
  });
}

export const exibirAlerta = (n, cor) => {
  let color1 = "rgba(115, 234, 129, 0.8)";
  let color2 = "rgba(255, 91, 91, 0.8)";
  let divAlert = `<div class="alert"></div>`;
  let aviso;

  document
    .querySelector(".container-mobile")
    .insertAdjacentHTML("beforebegin", divAlert);

  switch (+n) {
    case 1:
      $(".alert").css("background", color1);
      aviso = "Operação realizada com sucesso!";
      break;
    case 2:
      $(".alert").css("background", color2);
      aviso = "Preencha os dados corretamente!";
      break;
    case 3:
      $(".alert").css("background", color1);
      aviso = "Atualizado com sucesso!";
      break;
    case 4:
      $(".alert").css("background", color2);
      aviso = "Apenas imagens permitidas! Verifique o tipo corretamente.";
      break;
    case 5:
      $(".alert").css("background", color2);
      aviso = "Arquivo muito grande! Escolha outra arquivo menor.";
      break;
    default:
      if (cor == 1) {
        $(".alert").css("background", color1);
      } else if (cor == 2) {
        $(".alert").css("background", color2);
      }

      aviso = n;
  }

  $(".alert").text(aviso);

  $(".alert").slideToggle("fast");
  setTimeout(function () {
    $(".alert").fadeOut("fast");
    $(".alert").remove();
  }, 1500);
};

export const deepClone = (obj) => {
  // Se não for array ou objeto, retorna null
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let cloned, i;

  // Handle: Date
  if (obj instanceof Date) {
    cloned = new Date(obj.getTime());
    return cloned;
  }

  // Handle: array
  if (obj instanceof Array) {
    let l;
    cloned = [];
    for (i = 0, l = obj.length; i < l; i++) {
      cloned[i] = deepClone(obj[i]);
    }

    return cloned;
  }

  // Handle: object
  cloned = {};
  for (i in obj)
    if (obj.hasOwnProperty(i)) {
      cloned[i] = deepClone(obj[i]);
    }

  return cloned;
};

export const insertDataList = (id, dados) => {
  let options = "";
  let datalist = document.getElementById(id);
  for (let i = 0; i < dados.length; i++) {
    options += `<option value="${dados[i]["idlinguagem"]} - ${dados[i]["nome"]}" />`;
  }
  datalist.insertAdjacentHTML("beforeend", options);
};

export const uploadButtons = () => {
  const uploadButtons = document.querySelectorAll(".upload-button");

  uploadButtons.forEach((item) => {
    $(item).change(function () {
      let thisForm = this.getAttribute("form");
      const formElements = document.querySelectorAll(`[form="${thisForm}"]`);

      let fileName;
      let choosenImg;
      formElements.forEach((item) => {
        switch (item.className) {
          case "file-name":
            fileName = item;
            break;
          case "choosen-img":
            choosenImg = item;
            break;
        }
      });

      let uploadButton = this;
      let reader = new FileReader();
      reader.readAsDataURL(uploadButton.files[0]);
      reader.onload = () => {
        $(choosenImg).attr("src", reader.result);
      };
      $(fileName).text(uploadButton.files[0].name);
    });
  });
};

export const tabs = () => {
  const divs = document.querySelectorAll("[data-target]");
  const option = document.querySelectorAll("[target]");
  $(divs).slice(1).hide();
  $(option).click(function (e) {
    e.preventDefault();
    $(divs).hide();
    const thisTab = e.target.parentElement;
    const currentTarget = parseInt($(thisTab).attr("target"));

    divs.forEach((item) => {
      let currentElement = item.getAttribute("data-target");
      if (currentElement == currentTarget) {
        $(item).fadeIn(100);
      }
    });
  });
};

export function doAjax(url, dados) {
  console.log(dados);
  $.ajax({
    url: url,
    type: "POST",
    data: dados,
    contentType: false,
    processData: false,
    success: function (response) {
      console.log(response);
      $("form").trigger("reset");
      exibirAlerta(`${response.status}: ${response.data}`, 1);
    },
  });
}

export const verificaFile = (file) => {
  const allowedFileTypes = "image.*|application/pdf";
  const allowedFileSize = 1024;
  if (!file) {
    exibirAlerta(2);
  } else {
    if (!file.type.match(allowedFileTypes)) {
      // Check file type
      exibirAlerta(4);
      return false;
    } else if (file.size > allowedFileSize * 1024) {
      // Check file size (in bytes)
      exibirAlerta(5);
      return false;
    } else {
      return true;
    }
  }
};

export const pictureHoverEffect = () => {
  $(".edit-user-picture").hover(
    function () {
      $(".edit-user-picture img").css("opacity", "0.3");
      $(".edit-user-picture span").fadeTo(100, 0.15, function () {
        $(this).css("opacity", "1");
      });
    },
    function () {
      $(".edit-user-picture img").css("opacity", "1");
      $(".edit-user-picture span").fadeTo(100, 0.15, function () {
        $(this).css("opacity", "0");
      });
    }
  );
};

export const getNewToken = () => {
  let userData = JSON.parse(sessionStorage.getItem("dados"));
  const actionUrl = "../login/logar.php";

  $.ajax({
    method: "POST",
    url: actionUrl,
    data: `email=${userData.email}&senha=${sessionStorage.getItem(
      "pass"
    )}&form_name=logar`,
  })
    .done((response) => {
      sessionStorage.setItem("session", response);
      verificarAuth();
    })
    .fail((err) => {
      exibirAlerta("Sessão expirou", 2);
    });
};

export const verificarAuth = async () => {
  const url = "../login/auth.php";

  if (sessionStorage.getItem("session")) {
    $.ajax({
      method: "POST",
      url: url,
      data: { dado: sessionStorage.getItem("session") },
    })
      .done(function (result) {
        sessionStorage.setItem("dados", JSON.stringify(result.dados));
        sessionStorage.setItem("interesses", JSON.stringify(result.interesses));
        sessionStorage.setItem("favoritos", JSON.stringify(result.favoritos));
      })
      .fail(function () {
        sessionStorage.clear();
        return false;
      });
  } else {
    sessionStorage.clear();
    return false;
  }
};

//Recebe uma palavra e dexa a primeira letra maiuscula
export function firstLetterCamelCase(string) {
  const newString =
    string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
  return newString;
}
