<?php 
const DBHOST = "localhost";
const DBUSER = "u413309708_codeguidetec";
const DBPASS = "Oliver_0108";
const DBNAME = "u413309708_codeguide";

try{
     
    $conexao = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);

}catch(Exception $err){
    echo "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " . $err->getMessage();
}

?>