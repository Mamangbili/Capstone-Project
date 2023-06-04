<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$data = $_GET['usaha_id'];

if ($method == 'GET'){
    $result = GuestController::reqeustProfilTokoModel($data);


    echo json_encode($result);
}
