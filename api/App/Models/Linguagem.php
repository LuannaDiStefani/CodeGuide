<?php 

namespace App\Models;

    class Linguagem{
        private static $table = 'linguagem';
        
        public static function select(int $id){


            $conexao = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE idlinguagem = $id";
            $exec = $conexao->query($sql);
            $response = $exec->fetch_all(MYSQLI_ASSOC); 
            $row = mysqli_num_rows($exec);
            
            if ($row){
                return $response;
            }else{
                throw new \Exception("Nada encontrado.");
            }

        }

        public static function selectAll(){

            $conexao = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = 'SELECT * FROM '.self::$table;
            $exec = $conexao->query($sql);
            $response = $exec->fetch_all(MYSQLI_ASSOC); 
            $row = mysqli_num_rows($exec);
            
            if ($row){
                return $response;
            }else{
                throw new \Exception("Nada encontrado.");
            }

        }
    }


?>