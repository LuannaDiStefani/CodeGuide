import Buscar from "./buscar.js";

$(document).ready(function () {
  const buscar = new Buscar("./buscar.php");

  $("button").click(() => {
    async function pegarDados() {
      return buscar.newBuscar("linguagem", "", "", "1");
    }

    pegarDados().then(guardarDados());

    function guardarDados() {
      let x = buscar.retorno;
      console.log(x[0]);
    }

    /*     buscar.newBuscar("linguagem", "", "", "1");
     console.log(buscar.retorno); */
  });
});
