<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$keyword = $_GET['keyword'];
$limit = $_GET['limit'];

$result = GuestController::cariUsaha($keyword,$limit);

echo json_encode($result);