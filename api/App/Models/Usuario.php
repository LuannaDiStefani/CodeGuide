<?php 

namespace App\Models;


    class Usuario{
        private static $table = 'usuario';
        
        public static function select(int $id){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE iduser = (?)";
            $query = $conexao->prepare($sql);
            $query->bind_param('i', $id);
            $query->execute();
            $result = $query->get_result();
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
            $query = $conexao->prepare($sql);
            $query->execute();
            $result = $query->get_result();
            $rows = $result->num_rows;
            $dados = $result->fetch_all(MYSQLI_ASSOC);
            
            if ($rows > 0){
                return $dados;
            }else{
                throw new \Exception("Nada encontrado.");
            }

        }

        public static function insert(){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
                       
            $nome = $_POST['nome'];
            $email = $_POST['email'];
            $senha = $_POST['senha'];
            $nomeuser = $_POST['nomeuser'];
            $confirmacao = $_POST['conf'];
        
            if(Usuario::verificarEmail($email)){
                if ($senha != $confirmacao){
                    throw new \Exception("As senhas estão diferentes");

                }else{
                    $senha = password_hash($senha, PASSWORD_DEFAULT);
                    $sql="INSERT INTO ".self::$table." (nome,email,nomeuser, senha)
                                        value(?, ?, ?, ?)";
                    
                    $query = $conexao->prepare($sql);
                    $query->bind_param('ssss', $nome, $email, $nomeuser, $senha);
                    $query->execute();
                    $result_dois= $query->get_result();
                    $number_of_rows_affected = mysqli_affected_rows($conexao);
         
                    // Conseguiu cadastrar 
                    if ($number_of_rows_affected > 0){
                        return 'Usuário cadastrado.';
                    }else{
                        throw new \Exception("Falha ao cadastrar usuário.");
                    } 
                }
            }

        }

        public static function updateUsername(){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

            if(isset($_POST['id']) and isset($_POST['username'])){
                $id = $_POST['id'];
                $username = $_POST['username'];
                $sql = "UPDATE ".self::$table." SET nomeuser = (?) WHERE iduser = (?)";
                $query = $conexao->prepare($sql);
                $query->bind_param('si', $username, $id);
                $query->execute();
                $result_dois= $query->get_result();
                $number_of_rows_affected = mysqli_affected_rows($conexao);
                // Conseguiu cadastrar 
                if ($number_of_rows_affected > 0){
                    return 'Dados alterados com sucesso.';
                }else{
                    throw new \Exception("Falha ao alterar dados.");
                } 
            }else{
                throw new \Exception("Requisição inválida.");
            }
            
        }

        public static function verificarEmail($email){
            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE email = (?)";
            $query = $conexao->prepare($sql);
            $query->bind_param('s', $email);
            $query->execute();
            $result = $query->get_result();
            $verificacao = mysqli_num_rows($result);
            if($verificacao > 0){
                throw new \Exception("Este login já existe");
            }else{
                return true;
            }

        }

        public static function verificar(){
            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $username = $_POST['username'];
            $sql = "SELECT * FROM ".self::$table." WHERE nomeuser = (?)";
            $query = $conexao->prepare($sql);
            $query->bind_param('s', $username);
            $query->execute();
            $result = $query->get_result();
            $verificacao = mysqli_num_rows($result);
            if($verificacao > 0){
                throw new \Exception("Este username já existe");
            }else{
                return $username;
            }
        }

        public static function alterarSenha(){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);

            if(isset($_POST['id']) and isset($_POST['senha'])){
                $id = $_POST['id'];
                $senha = $_POST['senha'];
                $senha_db = password_hash($senha, PASSWORD_DEFAULT);
                $sql = "UPDATE ".self::$table." SET senha = (?) WHERE iduser = (?)";
                $query = $conexao->prepare($sql);
                $query->bind_param('si', $senha_db, $id);
                $query->execute();
                // Conseguiu cadastrar 
                return 'Senha alterada com sucesso.';

                }else{
                    throw new \Exception("Requisição inválida.");
                }


        }

        public static function updatePicture(){
            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "UPDATE ".self::$table." SET fotoperfil = (?) WHERE iduser = (?)";
            $id = $_POST['id'];
            $fileName = $_FILES["file"]["name"];
            $targetDir = "../../source/imguser/"; 
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 
            $allowTypes = array('jpg', 'png', 'jpeg'); 
            if(in_array($fileType, $allowTypes)){ 
                // Upload file to server 
                if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
                    // Insert file data into the database if needed 
                    //........ 
                    $stmt = $conexao->prepare($sql);
                    $stmt->bind_param('si', $fileName, $id);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    $number_of_rows_affected = mysqli_affected_rows($conexao);
         
                    // Success response 
                    return "Foto atualizada com sucesso";

                }else{ 
                    return "Falha na operação";
                } 
            }else{ 
                return 'Arquivo inválido!'; 
            }     
        }

        public static function cadInteresse(){
            if(isset($_POST['idlinguagem']) and isset($_POST['iduser'])){
                $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
                $iduser = $_POST['iduser'];
                $idlinguagem = $_POST['idlinguagem'];
                $searchSql = "SELECT * FROM userinteresse WHERE iduser = (?) AND idlinguagem = (?)";       
                $query = $conexao->prepare($searchSql);
                $query->bind_param('ii', $iduser, $idlinguagem);
                $query->execute();
                $result = $query->get_result();
                $number_of_rows_affected = mysqli_affected_rows($conexao);

                if($number_of_rows_affected > 0){  
                    return "Linguagem já cadastrada";
                }else{
                   $sql="INSERT INTO userinteresse (iduser,idlinguagem)
                                                value(?, ?)";
                    $query = $conexao->prepare($sql);
                    $query->bind_param('ii', $iduser, $idlinguagem);
                    $query->execute();
                    $result = $query->get_result();
                    $number_of_rows_affected = mysqli_affected_rows($conexao);
                    if($number_of_rows_affected > 0){
                        return "Linguagem adicionada com sucesso.";
                    }else{
                        throw new \Exception("Falha na operação.");
                    }
                }


            }else{
                throw new \Exception("Requisição inválida.");
            }

        }

        public static function delInteresse(){
            if(isset($_POST['idlinguagem']) and isset($_POST['iduser'])){
                $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
                $iduser = $_POST['iduser'];
                $idlinguagem = $_POST['idlinguagem'];
                $sql = "DELETE FROM userinteresse WHERE iduser = (?) AND idlinguagem = (?)";       
                $query = $conexao->prepare($sql);
                $query->bind_param('ii', $iduser, $idlinguagem);
                $query->execute();
                $result = $query->get_result();
                $number_of_rows_affected = mysqli_affected_rows($conexao);

                if($number_of_rows_affected > 0){  
                    return "Linguagem removida com sucesso";
                }else{
                    throw new \Exception("Falha na operação.");
                }
            }else{
                throw new \Exception("Requisição inválida.");
            }

        }

    }


?>