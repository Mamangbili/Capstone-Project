<?php
include_once 'MyDB.php';

class KolaboratorModel{

    public function __construct()
    {
        
    }

    public function getKolaborator($usaha_id){
        $myDB = new MyDB();
        $myDB->getConnection();

        //friendlist si toko yg sedang dilihat
        $query="
        SELECT 
        usaha.nama_usaha,
        usaha.kota,
        usaha.jenis_usaha,
        users.url_gambar_profil,
        usaha.usaha_id

        from kolaborator
        inner join usaha on usaha.usaha_id = kolaborator.user_id_2
        inner join users on usaha.user_id = users.user_id
        where kolaborator.user_id_1 = '{$usaha_id}'
        ";

        $result = mysqli_query($myDB->conn,$query);

        $datas=[];
        while($row = mysqli_fetch_array($result)){
            $data = [
                'nama_usaha'    => $row['nama_usaha'],
                'kota'  => $row['kota'],
                'jenis_usaha'   => $row['jenis_usaha'],
                'url_gambar_profil'   => $row['url_gambar_profil'],
                'usaha_id'   => $row['usaha_id']
            ];

            array_push($datas, $data);
        }

        return $datas;
    }

    //$usaha_id_1 yg menghapus
    public function hapusKolaborator($usaha_id_1, $usaha_id_2){
        $query1 = "
        DELETE FROM `kolaborator` WHERE user_id_1 = '{$usaha_id_1}' and user_id_2 = '{$usaha_id_2}'
        ";
        $query2 = "
        DELETE FROM `kolaborator` WHERE user_id_1 = '{$usaha_id_2}' and user_id_2 = '{$usaha_id_1}'
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result1  =$myDB->execute($query1);
        $result2 =$myDB->execute($query2);

        return $result1 && $result2;

        
    }
}

    

?>

