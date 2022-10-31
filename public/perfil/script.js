import { model, paginationProfile } from "../js/modules.js";

function getUser(user) {
  console.log(user);
}
//Pagination
$(".profile-comments").append(
  '<div class="loading">Nenhum comentário no momento</div>'
);
model();
paginationProfile();
