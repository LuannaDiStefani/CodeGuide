//Input
const urlLinguagens = "http://localhost/codeguide/api/public/api/linguagem";
fetch(urlLinguagens)
  .then((response) => response.json())
  .then((data) => insertDataList("linguagens", data.data));

//Painel Select
function insertDataList(id, dados) {
  let options = "";
  let datalist = document.getElementById(id);
  for (let i = 0; i < dados.length; i++) {
    options += `<option value="${dados[i]["idlinguagem"]} - ${dados[i]["nome"]}" />`;
  }
  datalist.insertAdjacentHTML("beforeend", options);
}
