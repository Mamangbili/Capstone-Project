<?php
require_once 'MyDB.php';
class IklanModel{

    public function __construct()
    {
        
    }
    
    public function savedIklan($usaha_id,$url_gambar_iklan, $url_gambar_bukti){
        $query = "
        insert into `iklan` 
        (`usaha_id`,`url_gambar_iklan`,`url_gambar_bukti`,`status_iklan`) 
        values
        ($usaha_id,'$url_gambar_iklan', '$url_gambar_bukti',false )
        ";
        
        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);
        
        
        return $result;
    }
    
    
    public function terimaIklan($iklan_id){
        $query = "
            update `iklan` 
            set `status_iklan` = 1 
            ,`tayang_date` = now()
            ,`expired_date` = now()+interval 3 day
            where
            `iklan_id` = $iklan_id
        ";
        
        $myDB = new MyDB();
        $myDB->getConnection();
        
        $result = $myDB->execute($query);
        return $result;
    }
    
    public function hapusIklan($iklan_id){
        $query = "
        delete from `iklan`
        where `iklan_id` = $iklan_id
        ";
        
        $myDB = new MyDB();
        $myDB->getConnection();
        
        $result = $myDB->execute($query);
        return $result;
    
    }
    
    public function fetchIklanTayang(){
        $query = "
        SELECT 
        iklan.iklan_id,
        iklan.tayang_date,
        iklan.expired_date,
        iklan.url_gambar_iklan,
        iklan.url_gambar_bukti,
        iklan.usaha_id,
        users.url_gambar_profil,
        usaha.kota,
        usaha.nama_usaha
        
        
        FROM iklan 
        inner join `usaha` on usaha.usaha_id = iklan.usaha_id
        inner join `users` on usaha.user_id = users.user_id
        WHERE expired_date >= DATE_SUB(CURDATE(), INTERVAL 3 DAY) 
        and status_iklan = 1;
        ";
        
        $myDB = new MyDB();
        $myDB->getConnection();
        
        $result = $myDB->execute($query);
        $datas = [];
        
        while ($row = mysqli_fetch_assoc($result)){
            $data = [
                'iklan_id' => $row['iklan_id'],
                'tayang_date' => $row['tayang_date'],
                'expired_date' => $row['expired_date'],
                'url_gambar_iklan' => $row['url_gambar_iklan'],
                'url_gambar_bukti' => $row['url_gambar_bukti'],
                'usaha_id' => $row['usaha_id'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'kota' => $row['kota'],
                'nama_usaha' => $row['nama_usaha'],
                
        
            ];
            
            array_push($datas,$data);
        
        }
        return $datas;
    }
    
    public function fetchPermintaanIklan(){
        $query = '
        SELECT 
        iklan.iklan_id,
        iklan.tayang_date,
        iklan.expired_date,
        iklan.url_gambar_iklan,
        iklan.url_gambar_bukti,
        iklan.usaha_id,
        users.url_gambar_profil,
        usaha.kota,
        usaha.nama_usaha
        
        
        FROM iklan 
        inner join `usaha` on usaha.usaha_id = iklan.usaha_id
        inner join `users` on usaha.user_id = users.user_id
        WHERE status_iklan = 0;
        ';
        
        $myDB = new MyDB();
        
        $myDB->getConnection();
        $result = $myDB->execute($query);
        $datas=[];
        
        while ($row  = mysqli_fetch_array($result)){
            $data = [
                'iklan_id' => $row['iklan_id'],
                'tayang_date' => $row['tayang_date'],
                'expired_date' => $row['expired_date'],
                'url_gambar_iklan' => $row['url_gambar_iklan'],
                'url_gambar_bukti' => $row['url_gambar_bukti'],
                'usaha_id' => $row['usaha_id'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'kota' => $row['kota'],
                'nama_usaha' => $row['nama_usaha'],
            ];
            
            array_push($datas,$data);
        
        }
        
        return $datas;
    
    
    }
    
}

// $model = new IklanModel();

// var_dump($model->terimaIklan(11));



// $query = "
//         insert into `iklan` 
//         (`usaha_id`,`url_gambar_iklan`,`url_gambar_bukti`,`status_iklan`,`tayang_date`,`expired_date`) 
//         values
//         ($usaha_id,'$url_gambar_iklan', '$url_gambar_bukti',false, now(), now()+ interval 3 day )
//         ";