<?php 

    namespace App\Services;

    use App\Models\Curso;

    class CursoService{

        public function get($id = null)
        {
            if ($id){
                return Curso::select($id);
            } else{
                return Curso::selectAll();
            }
        }

        public function post(){
            $dados = $_POST;
            return Curso::insert($dados); 
        }

        public function update(){

        }

        public function delete(){

        }

    }


?>