<?php

/** DADOS **/

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "codeguide";


try{
    
    $conexao = mysqli_connect($host, $user, $pass, $dbname);

}catch(Exception $err){
    echo "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " . $err->getMessage();
}

?>