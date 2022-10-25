//Menu DropDown
const btnDropdown = document.getElementById("menu-dropdown");
//Menu Mobile
const myMedia = window.matchMedia("(max-width: 595px)");
let searchButton = document.querySelectorAll(".mobile-search-button");
const searchBox = document.querySelector(".search-bar input");
const categoryButton = document.querySelector(".category-button");

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

btnDropdown.addEventListener("click", toggleMenu);

function responsive(media) {
  if (media.matches) {
    $(".search-bar i").addClass("mobile-search-button");
    searchButton = document.querySelectorAll(".mobile-search-button");
    $(searchBox).removeClass("search-active").css("width", "100%");
    $(searchBox).addClass("search-inactive").css("width", "20%");
    searchButton.forEach((item) => {
      $(item).on("click", function () {
        event.preventDefault();
        if ($(searchBox).css("visibility") == "hidden") {
          $(searchBox).removeClass("search-inactive");
          $(searchBox).addClass("search-active").css("width", "100%");
        } else {
          $(searchBox).removeClass("search-active");
          $(searchBox).addClass("search-inactive").css("width", "20%");
        }
      });
    });
  } else {
    $(".search-bar i").removeClass("mobile-search-button");
    $(searchBox).removeClass("search-inactive");
    $(searchBox).addClass("search-active").css("width", "100%");
  }
  //Página cadastro - Menu
  if (media.matches) {
    $(".admin-menu ul li").hover(
      function () {
        $(this).append($("<h4>" + $(this).find("i").attr("title") + "</h4>"));
      },
      function () {
        $(this).find("h4").last().remove();
      }
    );
  } else {
    $(".admin-menu ul li").hover(function () {
      $(this).find("h4").last().remove();
    });
  }
}

responsive(myMedia);
myMedia.addListener(responsive);

//Menu Lateral
$(categoryButton).click(function () {
  event.preventDefault();
  if ($(".mobile-category").css("visibility") == "hidden") {
    $(".mobile-category")
      .css("visibility", "visible")
      .css("opacity", "1")
      .css("width", "200px");
  } else {
    $(".mobile-category")
      .css("visibility", "hidden")
      .css("opacity", "0")
      .css("width", "0");
  }
});

//Página de Perfil - Modal
$(".open-model").click(function () {
  $(".model-container").css("transform", "scale(1)");
  setTimeout(function () {
    $(".model-container").css("background", "rgba(0, 0, 0, 0.8)");
  }, 400);
});

$(".close-button").click(function () {
  $(".model-container").css("background", "transparent");
  setTimeout(function () {
    $(".model-container").css("transform", "scale(0)");
  }, 200);
});

//Editar Imagem Efeito
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

//Upload Button
let uploadButtons = document.querySelectorAll(".upload-button");

uploadButtons.forEach((item) => {
  $(item).change(function () {
    let thisForm = this.parentElement.parentElement;

    let fileName = $(thisForm).children().children(".file-name");
    let choosenImg = $(thisForm).children().children(".choosen-img");
    let uploadButton = this;

    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () => {
      $(choosenImg).attr("src", reader.result);
    };
    $(fileName).text(uploadButton.files[0].name);
  });
});

//Alert
function exibirAlerta(n, cor) {
  let message;
  let color1 = "rgba(115, 234, 129, 0.8)";
  let color2 = "rgba(255, 91, 91, 0.8)";
  divAlert = `<div class="alert"></div>`;

  document
    .querySelector(".container-mobile")
    .insertAdjacentHTML("beforebegin", divAlert);

  switch (n) {
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
  $(".alert").html(message);
  setTimeout(function () {
    $(".alert").fadeOut("fast");
    $(".alert").remove();
  }, 1500);
}

//Switch divs
let painelTabs = document.querySelectorAll("[data-target]");
let painelMenu = document.querySelectorAll("[target]");
$(painelTabs).slice(1).hide();
$(painelMenu).click(function (e) {
  e.preventDefault();
  $(painelTabs).hide();
  const thisTab = e.target.parentElement;
  const currentTarget = parseInt($(thisTab).attr("target"));

  painelTabs.forEach((item) => {
    let currentElement = item.getAttribute("data-target");
    if (currentElement == currentTarget) {
      $(item).fadeIn(300);
    }
  });
});

//Pagination
/* $(".profile-comments").append(
  '<div class="loading">Nenhum comentário no momento</div>'
); */

const commentContainer = document.querySelector("#comment-block").content;

function paginationList() {
  const size = 20;
  const comentarios = new Array();
  for (let i = 0; i < size; i++) {
    comentarios.push(`item ${i + 1}`);
  }

  return comentarios;
}

const commentList = paginationList();

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
    console.log(state.page);
  },
  prev() {
    state.page--;
    if (state.page < 1) {
      state.page++;
    }
    console.log(state.page);
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
