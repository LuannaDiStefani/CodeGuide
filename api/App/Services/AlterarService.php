<?php 

    namespace App\Services;

    use App\Models\Alterar;

    class AlterarService{

        public function post(){
            $dados = $_POST;
            return Alterar::insert($dados); 
        }

        public function update(){

        }

        public function delete(){

        }

    }


?>