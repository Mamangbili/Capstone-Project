<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';


$result = AdminController::fetchIklanTayang();

echo json_encode($result);