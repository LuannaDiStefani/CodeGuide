<?php

 include "../api/vendor/autoload.php";

 use Firebase\JWT\JWT;
 use Firebase\JWT\Key;
 

 $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
 $dotenv->load();

  if(isset($_POST['email']) && isset($_POST['senha'])){

  $conexao = new mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

  $email = $_POST['email'];
  $senha = $_POST['senha'];
  

  $sql = "SELECT * FROM usuario WHERE email = (?)";
  $query = $conexao->prepare($sql);
  $query->bind_param('s', $email);
  $query->execute();
  $result = $query->get_result();
  $num = $result->num_rows;
  $dados = $result->fetch_assoc();
  $senha_db = $dados['senha'];

 
   if(password_verify($senha, $senha_db) == true){
    if ($num == 1){
      $adm = $dados['adm'];
      $id = $dados['iduser'];
      
    $payload = [
      "exp" => time() + 3600,
      "iat" => time(), 
      "email" => $email,
      "dados" => $dados,
      
     ];
   
    $encode = JWT::encode($payload,$_ENV['KEY'],'HS256');
    http_response_code(200);
    echo($encode);
  
  }else {
    http_response_code(400);
    throw new Exception("Requisição inválida");
  }
     }else {
       http_response_code(400);
       throw new Exception("Senha inválida");
     }
  
  
  }

?>