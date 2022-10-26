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
      } else {
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

export const uploadButtons = () => {
  const uploadButtons = document.querySelectorAll(".upload-button");

  uploadButtons.forEach((item) => {
    $(item).change(function () {
      let thisForm = this.parentElement.parentElement;

      let fileName = $(thisForm).children().children(".file-name");
      let choosenImg = $(thisForm).children().children(".choosen-img");
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

export const paginationProfile = () => {
  const commentContainer = document.querySelector("#comment-block").content;
  const loadingDiv = document.querySelector(".loading");

  function paginationList() {
    const size = 20;
    const comentarios = new Array();
    for (let i = 0; i < size; i++) {
      comentarios.push(`item ${i + 1}`);
    }

    return comentarios;
  }

  const commentList = paginationList();
  $(loadingDiv).remove();

  let perPage = 2;
  const state = {
    page: 1,
    totalPages: Math.ceil(commentList.length / perPage),
    maxButtons: 5,
  };

  function update() {
    list.update();
    buttons.update();
  }

  const controls = {
    next() {
      state.page++;
      if (state.page > state.totalPages) {
        state.page--;
      }
    },
    prev() {
      state.page--;
      if (state.page < 1) {
        state.page++;
      }
    },
    goTo(page) {
      state.page = +page;

      if (page < 1) {
        state.page = 1;
      }
      if (page > state.totalPages) {
        state.page = state.totalPages;
      }
    },
    createListeners() {
      $(".first").click(function () {
        controls.goTo(1);
        update();
      });
      $(".last").click(function () {
        controls.goTo(state.totalPages);
        update();
      });
      $(".next").click(function () {
        controls.next();
        update();
      });
      $(".prev").click(function () {
        controls.prev();
        update();
      });
    },
  };

  const list = {
    update() {
      $(".profile-comments .comment-block").remove();
      let page = state.page - 1;
      let start = page * perPage;
      let end = start + perPage;
      const paginatedItems = commentList.slice(start, end);
      paginatedItems.forEach(list.create);
    },
    create(item) {
      let content = document.importNode(commentContainer, true);
      content.querySelector("blockquote").textContent = item;
      $(".profile-comments").append(content);
    },
  };

  const buttons = {
    create(number) {
      const active = (e) => {
        $(e).css("color", "var(--color1)");
      };
      const button = document.createElement("div");
      button.insertAdjacentHTML("afterbegin", number);
      if (state.page == number) {
        active(button);
      }
      $(".comment-pagination .numbers > div").append(button);
      button.addEventListener("click", (e) => {
        let page = e.target.innerText;
        controls.goTo(page);
        update();
      });
    },
    update() {
      const { maxLeft, maxRight } = buttons.calculateMaxVisible();
      $(".comment-pagination .numbers > div").empty();
      for (let page = maxLeft; page <= maxRight; page++) {
        buttons.create(page);
      }
    },
    calculateMaxVisible() {
      const { maxButtons } = state;
      let maxLeft = state.page - Math.floor(maxButtons / 2);
      let maxRight = state.page + Math.floor(maxButtons / 2);

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = maxButtons;
      }
      if (maxRight > state.totalPages) {
        maxLeft = state.totalPages - (maxButtons - 1);
        maxRight = state.totalPages;
      }
      return { maxLeft, maxRight };
    },
  };

  controls.createListeners();
  update();
};
