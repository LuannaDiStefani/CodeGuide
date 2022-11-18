<?php 

    namespace App\Services;

    use App\Models\Usuario;

    class UsuarioService{

        public function get(){}

        public function post(){

             if(isset($_POST)){
              $method = $_POST['form_name'];
              
                switch($method){
                    case "cadastro":
                        return Usuario::insert();
                        break;
                    case "verificar":
                        return Usuario::verificar();
                        break;
                    case "alterar-senha":
                        return Usuario::alterarSenha();
                        break;
                    case "cad-username":
                        return Usuario::updateUsername();
                        break;
                    case "update-picture":
                        return Usuario::updatePicture();
                        break;
                    default:
                        throw new \Exception("Requisição Inválida.");
                        break;
                }
            }
        }

        public function update(){

        }

        public function delete(){

        }

    }

?>