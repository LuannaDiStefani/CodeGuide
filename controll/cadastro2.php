<?php

include_once "conn.php";

$filename = $_FILES['file']['name'];
$location = "../source/imgcurso/".$filename;

if(move_uploaded_file($_FILES['file']['tmp_name'], $location)){
    echo $location;
}else {
    echo 0;
}

?>