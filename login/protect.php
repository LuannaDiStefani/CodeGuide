<?php 

if(!isset($_SESSION)){
	session_start();
}

if(!isset($_SESSION['cargo'])){
	die("<h1><b>Você não tem autorização para acessar essa página. <br><br> <a href=\"http://localhost/codeguide/public/logar.php\">Login</a></b></h1>");
}else if($_SESSION['cargo'] == 'administrador'){
	
}else{
	die("<h1><b>Você não tem autorização para acessar essa página. <br><br> <a href=\"logar.php\">Login</a></b></h1>");
}


?>