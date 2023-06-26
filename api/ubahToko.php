<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

// $method = $_SERVER['REQUEST_METHOD'];


$nama_usaha = $_POST['nama_usaha'];
$alamat = $_POST['alamat'];
$kota = $_POST['kota'];
$provinsi = $_POST['provinsi'];
$deskripsi_toko = $_POST['deskripsi_usaha'];
$usaha_id = $_POST['usaha_id'];

$url_gambar_toko = $_POST['url_gambar_toko'];
$file_gambar_toko =$_FILES['files_gambar_toko'];


var_dump($file_gambar_toko);
if ($file_gambar_toko !== null){
    $currentDir = getcwd();
    $parentDir = dirname($currentDir);
    $destinationPath = $parentDir . '\\src\\images\\src\\';
    move_uploaded_file($file_gambar_toko['tmp_name'], $destinationPath.$url_gambar_toko);
    
    $result = UserController::ubahToko(
        $nama_usaha
        ,$alamat
        ,$kota
        ,$provinsi
        ,$deskripsi_toko
        ,$url_gambar_toko
        ,$usaha_id
    );
    if ($result) {

    }
    
    echo $result;

}
else{
    $result = UserController::ubahToko2(
        $nama_usaha,$alamat,$kota,$provinsi,$deskripsit_toko,$usaha_id
    );

    echo $result;
}