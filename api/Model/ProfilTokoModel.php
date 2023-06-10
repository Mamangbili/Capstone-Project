<?php
include_once 'MyDB.php';

class ProfilTokoModel
{
    public function __construct()
    {
    }

    public function getProfilToko($usaha_id)
    {
        $myDB = new MyDB();
        $myDB->getConnection();

        $query = "select
        users.url_gambar_profil,
        users.no_hp,
        users.user_id,
        users.nama,
        users.email,

        usaha.url_gambar_toko,
        usaha.nama_usaha, 
        usaha.alamat,
        usaha.kota,
        usaha.provinsi,
        usaha.deskripsi_usaha,
        usaha.jenis_usaha
        
        from usaha
        inner join users on usaha.user_id = users.user_id
        where usaha.usaha_id = {$usaha_id}
        ";

        $result = $myDB->execute($query);

        while ($row = mysqli_fetch_assoc($result)) {

            $data = [
                'user_id'           => $row['user_id'],
                'url_gambar_toko'           => $row['url_gambar_toko'],
                'nama_usaha'            => $row['nama_usaha'],
                'alamat'            => $row['alamat'],
                'kota'          => $row['kota'],
                'provinsi'          => $row['provinsi'],
                'deskripsi_usaha'           => $row['deskripsi_usaha'],
                'url_gambar_profil'         => $row['url_gambar_profil'],
                'no_hp'         => $row['no_hp'],
                'jenis_usaha'         => $row['jenis_usaha'],
                'nama'         => $row['nama'],
                'email'         => $row['email']
            ];

        }

        return $data;
    }


    public function buatUsaha($nama_usaha, $alamat, $kota, $provinsi, $jenis_usaha, $deskripsi_usaha, $url_gambar_toko, $user_id)
    {
        $query = "INSERT INTO `usaha`( `nama_usaha`, `alamat`, `kota`, `provinsi`, `jenis_usaha`, `deskripsi_usaha`, `url_gambar_toko`, `user_id`) 
        VALUES 
        ('{$nama_usaha}','{$alamat}','{$kota}','{$provinsi}','{$jenis_usaha}','{$deskripsi_usaha}','{$url_gambar_toko}','{$user_id}')";

        $myDB = new MyDB();
        $myDB->getConnection();

        $myDB->execute($query);

        $queryLastInserted = 'SELECT LAST_INSERT_ID() as last_id';
        $result = $myDB->execute($queryLastInserted);
        $row = $result->fetch_assoc(); // Fetch the result as an associative array
        $lastInsertedId = $row['last_id'];

        return ['usaha_id' => $lastInsertedId, 'user_id' => $user_id];
    }

    public function ubahToko(
        $usaha_id
        ,$nama_usaha
        ,$alamat
        ,$kota
        ,$provinsi
        ,$deskripsi_toko
        ,$url_gambar_toko
    )
    {
        $query = "
        UPDATE `usaha` SET `nama_usaha`='$nama_usaha',`alamat`='$alamat',`kota`='$kota',`provinsi`='$provinsi',`deskripsi_usaha`='$deskripsi_toko',`url_gambar_toko`='$url_gambar_toko' WHERE `usaha_id`=$usaha_id
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

        return $result;
    }

    public function ubahTokoNoImage(
        $usaha_id
        ,$nama_usaha
        ,$alamat
        ,$kota
        ,$provinsi
        ,$deskripsi_toko
    )
    {
        $query = "
        UPDATE `usaha` SET `nama_usaha`='$nama_usaha',`alamat`='$alamat',`kota`='$kota',`provinsi`='$provinsi',`deskripsi_usaha`='$deskripsi_toko', WHERE `usaha_id`=$usaha_id
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

        return $result;
    }
}


