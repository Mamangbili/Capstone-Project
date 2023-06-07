<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$method = $_SERVER['REQUEST_METHOD'];

$nama_produk = $_POST['nama_produk'];
$deskripsi_produk = $_POST['deskripsi_produk'];
$usaha_id = $_POST['usaha_id'];
$harga = $_POST['harga'];
$url_gambar_produk = $_POST['url_gambar_produk'];


$file_gambar_produk = $_FILES['file_gambar_produk'];


$result = UserController::tambahProduk($nama_produk,$harga,$url_gambar_produk,$deskripsi_produk,$usaha_id);

if ($result == true){
    $currentDir = getcwd();
    $parentDir = dirname($currentDir);
    $destinationPath = $parentDir . '\\src\\images\\src\\';

    move_uploaded_file($file_gambar_produk['tmp_name'], $destinationPath.$url_gambar_produk);

}

echo json_encode($result);