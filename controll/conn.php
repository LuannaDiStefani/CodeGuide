<?php

/** DADOS **/

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "codeguide";
$port = "80";

try{

    $conexao = mysqli_Connect("localhost","root","","codeguide");

    echo "Conexão com banco de dados realizada com sucesso!";


}catch(Exception $err){
    echo "Erro: Conexão com banco de dados não foi realizada com sucesso. Erro gerado " . $err->getMessage();
}

?>