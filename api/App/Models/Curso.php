<?php 

namespace App\Models;

    class Curso{
        private static $table = 'cursos';
        
        public static function select(int $id){


            $conexao = new \mysqli(DBHOST, DBUSER, DBPASS, DBNAME);
            $sql = "SELECT * FROM ".self::$table." WHERE idcurso = (?)";
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
    }


?>