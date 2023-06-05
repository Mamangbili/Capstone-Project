<?php
include_once 'MyDB.php';

class ProdukModel{
    public function __construct()
    {
        
    }

    public function buatProduk($nama_produk, $harga, $url_gambar_produk, $deskripsi_produk,$usaha_id){
        $query = "
        INSERT INTO `produk`
        ( `nama_produk`, `harga`, `url_gambar_produk`, `deskripsi_produk`,`usaha_id`) 
        VALUES ('{$nama_produk}', '{$harga}', '{$url_gambar_produk}',  '{$deskripsi_produk}',{$usaha_id}) 
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


    public function fetchProdukUsaha($usaha_id){
        $query = "select * from produk where usaha_id = {$usaha_id}";
        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);
        
        $datas = [];
        while($row = mysqli_fetch_assoc($result)){
            $data = [
                'produk_id' => $row['produk_id'],
                'nama_produk' => $row['nama_produk'],
                'harga' => $row['harga'],
                'url_gambar_produk' => $row['url_gambar_produk'],
                'deskripsi_produk' => $row['deskripsi_produk'],
                'usaha_id' => $row['usaha_id'],
            ];

            array_push($datas, $data);
        }

        return $datas;
    }
}



