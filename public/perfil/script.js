import { model, paginationProfile } from "../js/modules.js";

//Pagination
$(".profile-comments").append(
  '<div class="loading">Nenhum comentário no momento</div>'
);
model();
paginationProfile();
