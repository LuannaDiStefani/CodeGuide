<?php

 include "../api/vendor/autoload.php";

 header('Content-Type: application/json');

 use Firebase\JWT\JWT;  
 use Firebase\JWT\Key;


 if(isset($_POST['dado']) ){

 $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
 $dotenv->load();

 $token = $_POST['dado'];

 $decoded = JWT::decode($token, new Key($_ENV['KEY'],'HS256'));

 if($decoded == true){


 echo json_encode($decoded);


 }else{

http_response_code(400);
throw new Exception("Falha na requisição");

 }

 }else{

http_response_code(400);
throw new Exception("Falha na requisição");

 }

?>