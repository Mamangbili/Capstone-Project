<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: * ");
header("Access-Control-Allow-Methods: *");

include_once "Controller.php";

$method = $_SERVER['REQUEST_METHOD'];

$nama_produk = $_GET['nama_produk'];
$harga = $_GET['harga'];
$url_gambar_produk = $_GET['url_gambar_produk'];
$deskripsi_produk = $_GET['deskripsi_produk'];