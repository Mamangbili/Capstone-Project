<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$usaha_id = $_GET['usaha_id'];

$result = UserController::fetchInvoices($usaha_id);

echo json_encode($result);