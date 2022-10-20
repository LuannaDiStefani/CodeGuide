class Busca {
  constructor(path) {
    this.path = path;
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

  ajax(tabela, sql) {
    $.post(this.path, { nometabela: tabela, sql: sql }).done((data) => {
      let dados = JSON.parse(data);
      return dados;
    });
  }

  exibirNaTela(id, dados) {
    $(id).text(dados);
  }

  guardarDados(dados) {}
}

export default Busca;

/*   const busca = new Busca("../buscar.php");

  $("button").click(function () {
    //Exemplo com sql
    busca.buscarDados("linguagem", "nome", "JavaScript");
    busca.buscarLike("linguagem", "imagem", "logo");
    //Exemplo de busca geral
    busca.buscarDados("cursos");
    busca.exibirNaTela("#teste", "teste");
  }); */
