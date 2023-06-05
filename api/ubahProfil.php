<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];



$nama = $_POST['nama'];
$email = $_POST['email'];
$no_hp = $_POST['no_hp'];
$user_id = $_POST['user_id'];
$url_gambar_profil = $_POST['url_gambar_profil'];
$file_gambar_profil = $_FILES['file_gambar_profil'];


$currentDir = getcwd();
$parentDir = dirname($currentDir);
$destinationPath = $parentDir.'\\src\\images\\src\\';
$result = UserController::ubahProfil($user_id,$nama,$email,$no_hp,$url_gambar_profil);
move_uploaded_file($file_gambar_profil['tmp_name'], $destinationPath.$url_gambar_profil);

echo true;
