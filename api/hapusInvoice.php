<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';



$invoice_id = $_POST['invoice_id']; 

$result = UserController::hapusInvoice($invoice_id);

echo json_encode($result);