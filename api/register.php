<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$method = $_SERVER['REQUEST_METHOD'];

$data = json_decode(file_get_contents('php://input'));

if ($method == 'POST' ){
    $result = GuestController::register($data->nama,$data->username,$data->no_hp,$data->email,$data->password);

    echo json_encode($result);
}