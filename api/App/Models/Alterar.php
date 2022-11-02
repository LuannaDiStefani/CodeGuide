<?php 

namespace App\Models;

    class Alterar{
        private static $table = 'usuario';

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


    }


?>