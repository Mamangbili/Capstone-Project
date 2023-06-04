<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

        include_once "Controller.php";

        $method = $_SERVER['REQUEST_METHOD'];

        $data = json_decode(file_get_contents('php://input'));

switch($method){
    case 'POST':
            $resultValidate = GuestController::validateLogin($data->username, $data->password);
        
        echo json_encode($resultValidate);
}
