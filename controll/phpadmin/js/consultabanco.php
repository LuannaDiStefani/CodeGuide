<?php if(isset($_POST)){

include_once '../../path/conn.php';

/* var_dump($_POST["data"]); */

/* dados  = $_POST;
$params = json_decode("$data", true); 

$nometabela = "cursos";
$nometabela = "linguagem";

$exec = $conexao->query($sql);
$linguagens = $exec->fetch_all(MYSQLI_ASSOC); 
$row = mysqli_num_rows($exec);  */

if ($row){
    echo json_encode($linguagens);
}else{
    echo "não encontrado";
}
}

?>