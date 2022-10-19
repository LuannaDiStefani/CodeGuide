<?php

include_once "../path/conn.php";


if(isset($_POST)){

    $params = array();
    parse_str($_POST['info'], $params);
    $info = $_POST['info'];
    echo($params['nomecurso']);

    // Generate unique file name 
    $fileName = $_FILES["file"]["name"]; 
     
    // File upload path 
    $targetDir = "../../source/imgcurso/"; 
    $targetFilePath = $targetDir . $fileName; 
     
    // Allow certain file formats 
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
    $allowTypes = array('jpg', 'png', 'jpeg'); 
     
    if(in_array($fileType, $allowTypes)){ 
        // Upload file to server 
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
            // Insert file data into the database if needed 
            //........ 
            /* $sql="INSERT INTO cursos(nomecurso,descri, pago, link, imgcurso, videocurso, idlinguagem) 
            VALUES('$nome','$fileName')";

            $exec = $conexao->query($sql); */
 
            // Success response 
            echo $targetFilePath;
/*             echo $nome; */
        }else{ 
            echo 0;
        } 
    }else{ 
        echo 'type_err'; 
    }

}



?>