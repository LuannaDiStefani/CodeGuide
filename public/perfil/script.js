import { model, insertDataList } from "../js/modules.js";
import { buscarApi, dados } from "../js/slider.js";

const getLanguagens = async () => {
  await buscarApi.buscarLinguagem();
  console.log("teste");
  insertDataList("stacks", dados.linguagens);
  allowInput();
  getUser();
  paginationProfile();
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
  console.log("entrou");
  dados.linguagens.forEach((item) => {
    $(".info-stacks-icon").append(`<i class="${item.icon}"></i>`);
  });

  $(".info-stacks-icon").append(
    `<i class="fa-regular fa-square-plus open-model"></i>`
  );
}

//Pagination
$(".profile-comments").append(
  '<div class="loading">Nenhum comentário no momento</div>'
);
model();

const paginationProfile = () => {
  const commentContainer = document.querySelector("#comment-block").content;
  const loadingDiv = document.querySelector(".loading");

  function paginationList() {
    const size = 20;
    const comentarios = new Array();
    for (let i = 0; i < size; i++) {
      comentarios.push(`
      Corrupti animi suscipit beatae laboriosam quam incidunt deleniti. 
      Eveniet minus eos illum minima, veritatis sunt ut soluta deserunt reiciendis, error sint voluptate.
      Corrupti animi suscipit beatae laboriosam quam incidunt deleniti. 
      Eveniet minus eos illum minima, veritatis sunt ut soluta deserunt reiciendis, error sint voluptate.
      Corrupti animi suscipit beatae laboriosam quam incidunt deleniti. 
      Eveniet minus eos illum minima, veritatis sunt ut soluta deserunt reiciendis, error sint voluptate.
      Corrupti animi suscipit beatae laboriosam quam incidunt deleniti. 
      Eveniet minus eos illum minima, veritatis sunt ut soluta deserunt reiciendis, error sint voluptate. ${
        i + 1
      }`);
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
