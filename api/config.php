<?php 
const DBHOST = "localhost";
const DBUSER = "root";
const DBPASS = "";
const DBNAME = "codeguide";

try{
     
    $conexao = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

}catch(Exception $err){
    echo "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " . $err->getMessage();
}

?>
