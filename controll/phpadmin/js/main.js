import Cadastrar from "./cadastrar.js";
import Buscar from "./buscar.js";

$(document).ready(function () {
  let formatData = new FormData();
  const cadastrar1 = new Cadastrar("./cadastro1.php", formatData);
  const cadastrar2 = new Cadastrar("./cadastro2.php", formatData);
  const buscar = new Buscar("./buscar.php");

  async function pegarDados(nometabela, campo, nome, option) {
    //exemplo
    /*  return buscar.param("linguagem", "", "", "1"); */
    return buscar.newBuscar(nometabela, campo, nome, option);
  }

  function guardarDados() {
    let dados = buscar.retorno;
    return dados;
  }

  $("#cad-curso").submit(function (event) {
    event.preventDefault();

    let id = "#cad-curso";
    let file = $('[name="imgcurso"]')[0].files[0];
    cadastrar1.cadastrarCurso(id, file);
  });

  //Cadastro linguagens
  $("#cad-linguagem").submit(function (event) {
    event.preventDefault();
    let id = "#cad-linguagem";
    let file = $('[name="imglinguagem"]')[0].files[0];
    cadastrar2.cadastrarCurso(id, file);
  });

  //Options DataList
  let dados;

  function exibir() {
    dados = guardarDados();
    insertDataList("linguagens", dados);
  }

  $.when(pegarDados("linguagem", "", "", "1")).then(exibir());

  function insertDataList(id, dados) {
    let options = "";
    let datalist = document.getElementById(id);
    for (let i = 0; i < dados.length; i++) {
      options += `<option value="${dados[i]["idlinguagem"]} - ${dados[i]["nome"]}" />`;
    }
    datalist.insertAdjacentHTML("afterbegin", options);
  }
});
