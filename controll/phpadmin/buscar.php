<?php 

/* header('Content-Type: application/json'); */

include_once "../path/conn.php";

$sql = $_POST['sql'];
$exec = $conexao->query($sql);
$linguagens = $exec->fetch_all(MYSQLI_ASSOC); 
$row = mysqli_num_rows($exec);


if ($row){
    echo json_encode($linguagens);
}else{
    echo "não encontrado";
}

?>

