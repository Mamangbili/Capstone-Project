<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$usaha_id_1 = $_POST['usaha_id_1'];
$usaha_id_2 = $_POST['usaha_id_2'];
$deskripsi = $_POST['deskripsi_permintaan'];
if ($method == 'POST'){
    $result = UserController::getKolabSaya($usaha_id_1,$usaha_id_2,$deskripsi);

    echo json_encode($result);
}
