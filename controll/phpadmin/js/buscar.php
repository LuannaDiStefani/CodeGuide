<?php 

/* header('Content-Type: application/json'); */
/* header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *"); */

include_once "../../path/conn.php";

if(isset($_POST)){

    $data    = $_POST["info"];
    $params = json_decode("$data", true); 

    $nometabela = $params[0];
    $campo = $params[1];
    $nome = $params[2];
    $option = $params[3];

    if($campo || $nome == ""){
        $sql = "SELECT * FROM $nometabela";
    }else{
        $query = array(
            "option0" => "SELECT * FROM $nometabela",
            "option1" => "SELECT * FROM $nometabela WHERE $campo = '$nome'",
            "option2" => "SELECT * FROM $nometabela WHERE $campo LIKE '%$nome%'"
        );
    
        switch ($option) {
            case 0:
                $sql = $query['option0'];
                break;
            case 1:
                $sql = $query['option1'];
                break;
            case 2:
                $sql = $query['option2'];
                break;
        }
    
    }

    $exec = $conexao->query($sql);
    $linguagens = $exec->fetch_all(MYSQLI_ASSOC); 
    $row = mysqli_num_rows($exec);
    
    if ($row){
        echo json_encode($linguagens);
    }else{
        echo "não encontrado";
    }
}


?>

