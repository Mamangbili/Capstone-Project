<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$usaha_id = $_POST['usaha_id'];
$url_gambar_iklan = $_POST['url_gambar_iklan'];
$file_gambar_iklan = $_FILES['files_gambar_iklan'];

$url_gambar_bukti = $_POST['url_gambar_bukti'];
$file_gambar_bukti = $_FILES['files_gambar_bukti'];


$result = UserController::tambahIklan($usaha_id,$url_gambar_iklan,$url_gambar_bukti);

if ($result){
    $currentDir = getcwd();
    $parentDir = dirname($currentDir);
    $destinationPath = $parentDir . '\\src\\images\\src\\';
    move_uploaded_file($file_gambar_iklan['tmp_name'], $destinationPath.$url_gambar_iklan);
    move_uploaded_file($file_gambar_bukti['tmp_name'], $destinationPath.$url_gambar_bukti);
}


echo $result;