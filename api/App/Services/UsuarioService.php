<?php 

    namespace App\Services;

    use App\Models\Usuario;

    class UsuarioService{

        public function get($id = null)
        {
            if ($id){
                return Usuario::select($id);
            } else{
                return Usuario::selectAll();
            }
        }

        public function post(){
            if(isset($_POST['cadastrar'])){
                $dados = $_POST["cadastrar"];
                return Usuario::insert($dados); 
            }else if(isset($_POST['logar'])){
                $dados = $_POST["logar"];
                return Usuario::logar($dados);
            }else{
                throw new \Exception("Requisição Inválida.");
            }
        }

        public function update(){

        }

        public function delete(){

        }

    }

?>