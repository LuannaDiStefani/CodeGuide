export function model() {
  $(".open-model").click(function () {
    $(".model-container").css("transform", "scale(1)");
    setTimeout(function () {
      $(".model-container").css("background", "rgba(0, 0, 0, 0.8)");
    }, 400);
  });

  $(".close-model").click(function () {
    $(".model-container").css("background", "transparent");
    setTimeout(function () {
      $(".model-container").css("transform", "scale(0)");
    }, 200);
  });
}

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

export const verificaFile = (file, filename, form) => {
  if (!file) {
    exibirAlerta(2);
  } else {
    if (!file.type.match(allowedFileTypes)) {
      // Check file type
      exibirAlerta(4);
    } else if (file.size > allowedFileSize * 1024) {
      // Check file size (in bytes)
      exibirAlerta(5);
    } else {
      form.append("file", file, filename);
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

export const verificarAuth = () => {
  const url = "http://localhost/CodeGuide/login/auth.php";
  if (sessionStorage.getItem("session")) {
    return $.ajax({
      method: "POST",
      url: url,
      data: { dado: sessionStorage.getItem("session") },
    })
      .done(function (result) {
        sessionStorage.setItem("dados", JSON.stringify(result));
        const dados = sessionStorage.getItem("dados");
        return JSON.parse(dados);
      })
      .fail(function () {
        return false;
      });
  } else {
    return false;
  }
};
