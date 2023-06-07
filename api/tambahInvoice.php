<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$data = json_decode(file_get_contents('php://input'));

$penagih = $_POST['penagih'];
$klien = $_POST['klien'];
$metode_pembayaran = $_POST['metode_pembayaran'];
$email_pembeli = $_POST['email_pembeli'];
$alamat_pembeli = $_POST['alamat_pembeli'];
$no_hp_pembeli = $_POST['no_hp_pembeli'];
$hargaTotal = $_POST['harga'];
$usaha_id = $_POST['usaha_id'];
$list_produk = json_decode($_POST['list_produk'] , true);


$result = UserController::savedInvoice($usaha_id, $klien, $hargaTotal, $metode_pembayaran, $email_pembeli, $alamat_pembeli, $no_hp_pembeli, $list_produk);

echo $result;