<?php 

namespace App\Models;

    class Usuario{
        private static $table = 'usuario';
        
        public static function select(int $id){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE iduser = (?)";
            $query = $conexao->prepare($sql);
            $query->bind_param('s', $id);
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
            $confirmacao = $_POST['conf'];
            if(Usuario::verificarEmail($email)){
                if ($senha != $confirmacao){
                    throw new \Exception("As senhas estão diferentes");

                }else{
                    $sql="INSERT INTO ".self::$table." (nome,email,senha)
                                        value(?, ?, ?)";
                    
                    $query = $conexao->prepare($sql);
                    $query->bind_param('sss', $nome, $email, $senha);
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

        public static function logar(){

            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $email = $_POST['email'];
            $senha = $_POST['senha'];
            $sql = "SELECT * FROM ".self::$table." WHERE email = (?) AND senha = (?)";
            $query = $conexao->prepare($sql);
            $query->bind_param('ss', $email, $senha);
            $query->execute();
            $result = $query->get_result();
            $num = mysqli_num_rows($result);
            $dados = $result->fetch_all(MYSQLI_ASSOC); // Mesma coisa que o fetch array porém puxando só os associativos.
            
            
            if($num == 1){
                $adm = $dados[0]['adm'];
                return $dados;
            }else{
                throw new \Exception("A senha ou e-mail estão incorretos");
            }
        }

    }


?>