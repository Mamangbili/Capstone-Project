<?php
include_once 'MyDB.php';
class CardTokoModel
{

    public function __construct()
    {
    }

    //model usaha / model produk 
    public function getCardToko($limit = null, $kota = null, $provinsi = null, $usaha_id = null)
    {

        $myDB = new MyDB();
        $myDB->getConnection();

        if ($usaha_id) {
            $query = "SELECT 
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha, 
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            
            usaha.usaha_id,
            produk.produk_id,
            users.user_id

            from usaha
            inner join users on usaha.user_id = users.user_id
            inner join produk on usaha.usaha_id = produk.usaha_id

            where usaha.usaha_id <> {$usaha_id} and usaha.usaha_id <> 35
            ORDER BY field(usaha.kota, '{$kota}') DESC, field(usaha.provinsi, '{$provinsi}') DESC
            LIMIT {$limit}";
        } else {
            $query = "SELECT 
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha, 
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            
            usaha.usaha_id,
            produk.produk_id,
            users.user_id
            
            from usaha
            inner join users on usaha.user_id = users.user_id
            inner join produk on usaha.usaha_id = produk.usaha_id

            where usaha.usaha_id <> 35
            ORDER BY field(usaha.kota, '{$kota}') DESC, field(usaha.provinsi, '{$provinsi}') DESC
            LIMIT {$limit}";
        }



        $result = mysqli_query($myDB->conn, $query);

        $datas = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $object_of_card = [
                'url_gambar_toko' => $row['url_gambar_toko'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'kota' => $row['kota'],
                'nama_usaha' => $row['nama_usaha'],
                'jenis_usaha' => $row['jenis_usaha'],
                'deskripsi_toko' => $row['deskripsi_usaha'],
                'usaha_id' => $row['usaha_id'],
                'produk_id' => $row['produk_id'],
                'user_id' => $row['user_id']
            ];

            array_push($datas, $object_of_card);
        }

        //jika kurang dari limit jika sudah lebih skip ae
        $fetched = mysqli_num_rows($result);
        $remainder = $limit - $fetched;

        if ($fetched < $limit) {
            $query = "SELECT 
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha, 
            produk.jenis_produk,
            usaha.deskripsi_usaha,
            
            usaha.usaha_id,
            produk.produk_id,
            users.user_id
            
            from usaha
            inner join users on usaha.user_id = users.user_id
            inner join produk on usaha.usaha_id = produk.usaha_id
            
            order by RAND()
            limit {$remainder}
            ";

            $result = mysqli_query($myDB->conn, $query);
            if (mysqli_num_rows($result) > 1)
                while ($row = mysqli_fetch_assoc($result)) {
                    $object_of_card = [
                        'url_gambar_toko' => $row['usaha.url_gambar_toko'],
                        'url_gambar_profil' => $row['users.url_gambar_profil'],
                        'kota' => $row['usaha.kota'],
                        'nama_usaha' => $row['usaha.nama_usaha'],
                        'jenis_produk' => $row['produk.jenis_produk'],
                        'deskripsi_toko' => $row['usaha.deskripsi_toko'],
                        'usaha_id' => $row['usaha_id'],
                        'produk_id' => $row['produk_id'],
                        'user_id' => $row['user_id']
                    ];

                    array_push($datas, $object_of_card);
                }
        }

        return $datas;
    }


    public function fetchRandom($limit)
    {
        $myDB = new MyDB();
        $myDB->getConnection();

        $query = "SELECT
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha,
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            usaha.usaha_id,
            MIN(produk.produk_id) AS produk_id, -- Use MIN() or MAX() to make produk_id distinct
            users.user_id
        FROM usaha
        INNER JOIN users ON usaha.user_id = users.user_id
        INNER JOIN produk ON usaha.usaha_id = produk.usaha_id
        GROUP BY
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha,
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            usaha.usaha_id,
            users.user_id
        ORDER BY RAND()
        LIMIT $limit";


        $result = mysqli_query($myDB->conn, $query);

        $datas = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $object_of_card = [
                'url_gambar_toko' => $row['url_gambar_toko'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'kota' => $row['kota'],
                'nama_usaha' => $row['nama_usaha'],
                'jenis_usaha' => $row['jenis_usaha'],
                'deskripsi_toko' => $row['deskripsi_usaha'],
                'usaha_id' => $row['usaha_id'],
                'produk_id' => $row['produk_id'],
                'user_id' => $row['user_id']
            ];

            array_push($datas, $object_of_card);
        }

        return $datas;
    }

    public function searchUsaha($keyword)
    {
        $query = "
    SELECT
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha,
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            usaha.usaha_id,
            produk.produk_id , 
            users.user_id
        FROM usaha
        INNER JOIN users ON usaha.user_id = users.user_id
        INNER JOIN produk ON usaha.usaha_id = produk.usaha_id
        WHERE
        usaha.nama_usaha like '%$keyword%' or
		usaha.deskripsi_usaha like '%$keyword%' or
		produk.nama_produk like '%$keyword%' 
        GROUP BY
            usaha.url_gambar_toko,
            users.url_gambar_profil,
            usaha.kota,
            usaha.nama_usaha,
            usaha.jenis_usaha,
            usaha.deskripsi_usaha,
            usaha.usaha_id,
            users.user_id
        ORDER BY RAND()
    ";
        $myDB = new MyDB();
        $myDB->getConnection();

        $result = mysqli_query($myDB->conn, $query);

        $datas = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $object_of_card = [
                'url_gambar_toko' => $row['url_gambar_toko'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'kota' => $row['kota'],
                'nama_usaha' => $row['nama_usaha'],
                'jenis_usaha' => $row['jenis_usaha'],
                'deskripsi_toko' => $row['deskripsi_usaha'],
                'usaha_id' => $row['usaha_id'],
                'produk_id' => $row['produk_id'],
                'user_id' => $row['user_id']
            ];

            array_push($datas, $object_of_card);
        }

        return $datas;
    }
}

