<?php

include "conexao.php";

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confirmacao = $_POST['conf'];

 
$sql = "SELECT * FROM usuario WHERE email = '$email'";
    

$result = mysqli_query($conexao,$sql);

$verificacao = mysqli_num_rows($result);

if($verificacao > 0){

echo "Este login já existe";

}else if ($senha != $confirmacao){

echo"As senhas estão diferentes";


}else{

    $sql="INSERT INTO usuario (nome,email,senha)
                    value('$nome','$email','$senha')";  

  $result_dois= mysqli_query($conexao,$sql);

}




?>