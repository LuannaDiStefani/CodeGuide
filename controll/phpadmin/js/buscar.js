class Buscar {
  constructor(path) {
    this.path = path;
    this.arr = [];
    this.retorno;
  }

  result = {};

  buscarDados(nometabela, campo, nome) {
    let query;

    if (typeof campo === "undefined" || typeof nome === "undefined") {
      query = `SELECT * FROM ${nometabela}`;
    } else {
      query = `SELECT * FROM ${nometabela} WHERE ${campo} = '${nome}'`;
    }

    return this.ajax(nometabela, query);
  }

  buscarLike(nometabela, campo, nome) {
    let query;

    if (typeof campo === "undefined" || typeof nome === "undefined") {
      query = `SELECT * FROM ${nometabela}`;
    } else {
      query = `SELECT * FROM ${nometabela} WHERE ${campo} LIKE '%${nome}%'`;
    }

    return this.ajax(nometabela, query);
  }

  newBuscar(nometabela, campo, nome, option) {
    this.arr[0] = nometabela;
    this.arr[1] = campo;
    this.arr[2] = nome;
    this.arr[3] = option;
    /* this.ajax(); */
    $.when(this.ajax()).done((response) => {
      /* console.log(response); */
      this.retorno = JSON.parse(response);
    });
  }

  ajax() {
    let dados = JSON.stringify(this.arr);
    return $.ajax({
      async: false,
      url: this.path,
      method: "POST",
      data: { info: dados },
    });
  }

  exibirNaTela(id, dados) {
    $(id).text(dados);
  }
}

export default Buscar;
