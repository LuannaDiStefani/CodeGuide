<?php 

    namespace App\Services;

    use App\Models\Linguagem;

    class LinguagemService{

        public function get($id = null)
        {
            if ($id){
                return Linguagem::select($id);
            } else{
                return Linguagem::selectAll();
            }
        }

        public function post(){
            $dados = $_POST;
            return Linguagem::insert($dados);
        }

        public function update(){

        }

        public function delete(){

        }

    }


?>