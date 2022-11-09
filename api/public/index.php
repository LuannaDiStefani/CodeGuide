<?php 

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

require_once "../vendor/autoload.php";


if($_GET['url']){
    $url = explode('/', $_GET['url']);
    if($url[0] === 'api'){
        array_shift($url);
        $service = 'App\Services\\'.ucfirst($url[0]).'Service';
        array_shift($url);

        $method = strtolower($_SERVER['REQUEST_METHOD']);

        try{
            $response = call_user_func_array(array(new $service, $method), $url);

            http_response_code(200);

            echo json_encode(array('status' => 'success', 'data' => $response), JSON_UNESCAPED_UNICODE); 
        }catch(\Exception $e){
            
            echo json_encode(array('status' => 'error', 'data' => $e->getMessage()), JSON_UNESCAPED_UNICODE);
            
            http_response_code(400);
            
        }

    }
}

?>