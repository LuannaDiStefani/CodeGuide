<?php

include_once "conn.php";

    // Generate unique file name 
    $fileName = $_FILES["file"]["name"]; 
     
    // File upload path 
    $targetDir = "../source/imglinguagem/"; 
    $targetFilePath = $targetDir . $fileName; 
     
    // Allow certain file formats 
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
    $allowTypes = array('jpg', 'png', 'jpeg', 'gif'); 
     
    if(in_array($fileType, $allowTypes)){ 
        // Upload file to server 
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
            // Insert file data into the database if needed 
            //........ 
 
            // Success response 
            echo $targetFilePath;
        }else{ 
            echo 0;
        } 
    }else{ 
        echo 'type_err'; 
    } 
     
    // Render response data in JSON format

?>