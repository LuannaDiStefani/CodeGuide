<?php 

/* header('Content-Type: application/json'); */
/* header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *"); */

include_once "../../path/conn.php";

if(isset($_POST)){

    $data    = $_POST["info"];
    $params = json_decode("$data", true); 

    $nometabela = addslashes($params[0]);
    $campo = addslashes($params[1]);
    $nome = addslashes($params[2]);
    $option = addslashes($params[3]);

    if($option == ""){
        $sql = "SELECT * FROM $nometabela";
    }else{
        if($option == "full"){
            $sql = "SELECT * FROM cursos LEFT JOIN linguagem ON cursos.idlinguagem = linguagem.idlinguagem UNION SELECT * FROM cursos RIGHT JOIN linguagem ON cursos.idlinguagem = linguagem.idlinguagem";
        }else if($option == "inner"){
            $sql = "SELECT * FROM cursos INNER JOIN linguagem ON cursos.idlinguagem = linguagem.idlinguagem";
        }else if($option == "left"){
            $sql = "SELECT * FROM cursos LEFT JOIN linguagem ON cursos.idlinguagem = linguagem.idlinguagem";
        }else if($option == "right"){
            $sql = "SELECT * FROM cursos RIGHT JOIN linguagem ON cursos.idlinguagem = linguagem.idlinguagem";
        }else{
            if($campo == "" || $nome == ""){
                $sql = "SELECT * FROM $nometabela";
            }else{
                $query = array(
                    "where" => "SELECT * FROM $nometabela WHERE $campo = '$nome'",
                    "like" => "SELECT * FROM $nometabela WHERE $campo LIKE '%$nome%'"
                );

                switch ($option) {
                    case where:
                        $sql = $query['where'];
                        break;
                    case like:
                        $sql = $query['like'];
                        break;
                    default:
                        echo "Opção inválida!";
                }
            }
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

