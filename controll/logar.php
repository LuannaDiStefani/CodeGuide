<?php
session_start();

include "./path/conn.php";



if(isset($_POST['email']) && isset($_POST['senha'])){

 $adm;

 $email = $_POST['email'];
 $senha = $_POST['senha'];

 $sql = mysqli_query($conexao,"SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'");

 $num = mysqli_num_rows($sql);

 if( $num == 1){

  while($dados = mysqli_fetch_array($sql)){
 
  $adm = $dados['adm'];

 }

 if($adm == 1){
 
    $_SESSION['comum'] = $email;
 header("Location:../public/perfil/index.php");

 }else{

    $_SESSION['adimin'] = $email;  
 header("Location:phpadmin/index.php");


  }

}else{

echo" A senha ou e-mail estão incorretos";


}
}

?>
