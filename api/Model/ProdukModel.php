<?php
include_once 'MyDB.php';

class ProdukModel{
    public function __construct()
    {
        
    }

    public function buatProduk($nama_produk, $harga, $url_gambar_produk, $deskripsi_produk){
        $query = "
        INSERT INTO `produk`
        ( `nama_produk`, `harga`, `url_gambar_produk`, `deskripsi_produk`) 
        VALUES ('{$nama_produk}', '{$harga}', '{$url_gambar_produk}',  '{$deskripsi_produk}') 
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $myDB->execute($query);

        $queryLastInserted = 'SELECT LAST_INSERT_ID() as last_id';
        $result = $myDB->execute($queryLastInserted);
        $row = $result->fetch_assoc(); // Fetch the result as an associative array
        $lastInsertedId = $row['last_id'];
        return $lastInsertedId;
    }
}


