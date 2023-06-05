<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$limit = $_GET['limit'];

$result = GuestController::guestFetch($limit);

echo json_encode($result);

