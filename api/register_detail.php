<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once 'Controller.php';

$method = $_SERVER['REQUEST_METHOD'];

$nama_usaha = $_POST['nama_usaha'];
$alamat = $_POST['alamat'];
$kota = $_POST['kota'];
$provinsi = $_POST['provinsi'];
$deskripsi_usaha = $_POST['deskripsi_usaha'];
$nama_produk = $_POST['nama_produk'];
$jenis_usaha = $_POST['jenis_usaha'];
$deskripsi_produk = $_POST['deskripsi_produk'];
$harga = $_POST['harga'];
$user_id = $_POST['user_id'];

$url_gambar_toko = $_POST['url_gambar_toko'];
$url_gambar_produk = $_POST['url_gambar_produk'];
$url_gambar_profil = $_POST['url_gambar_profil'];

$file_gambar_toko = $_FILES['file_gambar_toko'];
$file_gambar_produk = $_FILES['file_gambar_produk'];
$file_gambar_profil = $_FILES['file_gambar_profil'];

$currentDir = getcwd();
$parentDir = dirname($currentDir);
$destinationPath = $parentDir . '\\src\\images\\src\\';

$datas = [
    'nama_usaha'    => $nama_usaha, 
    'alamat'    => $alamat, 
    'kota'    => $kota, 
    'provinsi'    => $provinsi, 
    'deskripsi_usaha'   => $deskripsi_usaha, 
    'nama_produk'   => $nama_produk, 
    'jenis_usaha'  => $jenis_usaha, 
    'deskripsi_produk'  => $deskripsi_produk, 
    'harga' => $harga, 
    'url_gambar_toko'   => $url_gambar_toko, 
    'url_gambar_produk' => $url_gambar_produk, 
    'url_gambar_profil' => $url_gambar_profil,
    'user_id' => $user_id

];


if ($method == 'POST' ){
        move_uploaded_file($file_gambar_produk['tmp_name'], $destinationPath.$url_gambar_produk);
        move_uploaded_file($file_gambar_toko['tmp_name'], $destinationPath.$url_gambar_toko);
        move_uploaded_file($file_gambar_profil['tmp_name'], $destinationPath.$url_gambar_profil);


    $result = GuestController::buatDetailRegister($datas);

    echo json_encode($result);
}