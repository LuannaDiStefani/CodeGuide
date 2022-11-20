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
      //Pegar interesses
      $id = $dados['iduser'];
      $sql = "SELECT idlinguagem FROM userinteresse WHERE iduser = (?)";
      $query = $conexao->prepare($sql);
      $query->bind_param('i', $id);
      $query->execute();
      $result = $query->get_result();
      $interesses = $result->fetch_all(MYSQLI_ASSOC);

      //Pegar favoritos
      $sql = "SELECT idcurso FROM favoritos WHERE iduser = (?)";
      $query = $conexao->prepare($sql);
      $query->bind_param('i', $id);
      $query->execute();
      $result = $query->get_result();
      $favoritos = $result->fetch_all(MYSQLI_ASSOC);
      
      $payload = [
      "exp" => time() + 3600,
      "iat" => time(), 
      "dados" => $dados,
      "interesses" => $interesses,
      "favoritos" => $favoritos,
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