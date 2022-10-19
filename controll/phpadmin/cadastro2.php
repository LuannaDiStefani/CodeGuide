<?php

include_once "../path/conn.php";

    if(isset($_POST)){

    $nome = $_POST['nome'];

    // Generate unique file name 
    $fileName = $_FILES["file"]["name"]; 
     
    // File upload path 
    $targetDir = "../../source/imglinguagem/"; 
    $targetFilePath = $targetDir . $fileName; 
     
    // Allow certain file formats 
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
    $allowTypes = array('jpg', 'png', 'jpeg'); 
     
    if(in_array($fileType, $allowTypes)){
        if(!getimagesize($_FILES["file"]['tmp_name'])){
            echo 'Apenas imagens são permitidas.'; 
        }else{
            // Upload file to server 
            if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
                // Insert file data into the database if needed 
                //........ 
                $sql="INSERT INTO linguagem(nome,imagem) 
                VALUES('$nome','$fileName')";
    
                $exec = $conexao->query($sql); 
     
                // Success response 
                echo $targetFilePath; 
                echo $fileName;
            }else{ 
                echo 0;
            } 
        }
    }else{ 
        echo 'Apenas imagens são permitidas.'; 
    } 


}
?>