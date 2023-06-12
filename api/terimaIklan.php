<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$iklan_id = $_POST['iklan_id'];

var_dump($iklan_id);
$result = AdminController::terimaIklan($iklan_id);

echo json_encode($result);