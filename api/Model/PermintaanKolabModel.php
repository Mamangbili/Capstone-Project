<?php
include_once 'MyDB.php';

class PermintaanKolabModel{
    public function __construct(){}

    public function getPermintaanKolab($user_id_2){
        $myDB = new MyDB();
        $myDB->getConnection();

        $query = "
        select 
        kolaborator.user_id_1,
        kolaborator.deskripsi_permintaan,
        usaha.jenis_usaha,
        usaha.url_gambar_toko,
        usaha.kota,
        users.url_gambar_profil,
        usaha.usaha_id,
        usaha.nama_usaha

        from kolaborator
        inner join usaha on usaha.usaha_id = kolaborator.user_id_1
        inner join users on usaha.user_id = users.user_id
        where 
        kolaborator.user_id_2 = '{$user_id_2}' and 
        kolaborator.status_kolab = 'pending'

        ";

        $result = mysqli_query($myDB->conn,$query);
        
        $datas=[];
        while($row = mysqli_fetch_assoc($result)){
            $data = [
                    'user_id_1'             => $row['user_id_1'],
                    'deskripsi_permintaan'  => $row['deskripsi_permintaan'],
                    'jenis_usaha'           => $row['jenis_usaha'],
                    'url_gambar_toko'      => $row['url_gambar_toko'],
                    'kota'                  => $row['kota'],
                    'url_gambar_profil'     => $row['url_gambar_profil'],
                    'usaha_id'              => $row['usaha_id'],
                    'nama_usaha'              => $row['nama_usaha']
            ];

            array_push($datas,$data);
            
        }

        return $datas;
    }

    //yg login usaha id
    public function hapusPermintaan($usaha_id, $user_id_1){
        $query = "
        delete from kolaborator where user_id_2 = {$usaha_id} and user_id_1 = {$user_id_1}
        ";
        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        return $result;
    }

    //yg login usaha_id
    public function terimaPermintaan($usaha_id, $user_id_1){
        $query = "
        update kolaborator 
        set status_kolab='berteman'
        where user_id_2 = {$usaha_id} and user_id_1 = {$user_id_1}
        ";
        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        $queryMenambahListPadaUsahaId ="
        INSERT INTO `kolaborator`
        ( `user_id_1`, `user_id_2`, `status_kolab` ) 
        VALUES ($usaha_id,$user_id_1,'berteman')
        ";

        $result2 = $myDB->execute($queryMenambahListPadaUsahaId);

        $finalResult = ($result==$result2) ? true : false;

        return $finalResult;
    }

    //yg login user 1
    public function buatPermintaan($user_id_1,$user_id_2,$deskripsi_permintaan){
        $query ="
        INSERT INTO kolaborator( `user_id_1`, `user_id_2`, `status_kolab`, `deskripsi_permintaan`) 

        VALUES ('$user_id_1', '$user_id_2', 'pending', '$deskripsi_permintaan' )
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

        return $result;
    }

}




