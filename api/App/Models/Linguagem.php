<?php 

namespace App\Models;

    class Linguagem{
        private static $table = 'linguagem';
        
        public static function select(int $id){

        
            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE idlinguagem = (?)";
            $stmt = $conexao->prepare($sql);
            $stmt->bind_param('s', $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $rows = $result->num_rows;
            $dados = $result->fetch_assoc();
            
            if ($rows > 0){
                return $dados;
            }else{
                throw new \Exception("Nada encontrado.");
            }

        }

        public static function selectAll(){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table;
            $stmt = $conexao->prepare($sql);
            $stmt->execute();
            $result = $stmt->get_result();
            $rows = $result->num_rows;
            $dados = $result->fetch_all(MYSQLI_ASSOC);
            
            if ($rows > 0){
                return $dados;
            }else{
                throw new \Exception("Nada encontrado.");
            }

        }

        public static function insert($data){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = 'INSERT INTO '.self::$table.' (nome,imagem, icon) 
            VALUES(?,?,?)';

            $params = array();
            parse_str($data["dados"], $params);

            $fileName = $_FILES["file"]["name"];
            $targetDir = "../../source/imglinguagem/"; 
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
            $allowTypes = array('jpg', 'png', 'jpeg'); 

            if(in_array($fileType, $allowTypes)){ 
                // Upload file to server 
                if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
                    // Insert file data into the database if needed 
                    //........ 
                    $stmt = $conexao->prepare($sql);
                    $stmt->bind_param('sss', $params['nomelinguagem'], $fileName, $params['icon']);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    $number_of_rows_affected = mysqli_affected_rows($conexao);
         
                    // Success response 
                    if ($number_of_rows_affected > 0){
                        return 'Linguagem cadastrado com sucesso!';
                    }else{
                        throw new \Exception("Nada encontrado.");
                    }
                }else{ 
                    echo "Falha na operação";
                } 
            }else{ 
                echo 'Arquivo inválido!'; 
            }     

        }
    }


?>