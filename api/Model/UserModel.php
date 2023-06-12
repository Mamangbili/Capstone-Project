<?php
include_once "MyDB.php";
class UserModel
{

    public static function getRandom(int $size_limit, int $id_user_meminta = null)
    {
        //yg request punya akun
        if ($id_user_meminta) {
            $query = "SELECT *
            FROM users
            WHERE user_id <> {$id_user_meminta}
            ORDER BY RAND()
            limit {$size_limit}";
        }
        //yg request guest
        else {
            $query = "SELECT *
            FROM users
            ORDER BY RAND()
            LIMIT {$size_limit}
            ";
        }


        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

        $datas = [];
        while ($row = mysqli_fetch_array($result)) {

            $object_of_user = [
                'user_id' => $row['user_id'],
                'username' => $row['username'],
                'email' => $row['email'],
                'tgl_gabung' => $row['tgl_gabung'],
                'url_gambar_profil' => $row['url_gambar_profil'],
                'tipe_user' => $row['tipe_user']
            ];
            array_push($datas, $object_of_user);
        }

        return $datas;
    }

    public function verifikasi_account($usernameOrEmail, $password)
    {
        $query = "SELECT * 
        FROM `users` 
        inner join usaha on users.user_id = usaha.user_id
        WHERE username='{$usernameOrEmail}' or email='{$usernameOrEmail}' ";
        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);


        while ($row = mysqli_fetch_array($result)) {
            //verifikasi password yg dimasukan
            if (password_verify($password, $row['password'])) {
                return [
                    'validation' => true,
                    'tipe_user' => $row['tipe_user'],
                    'user_id' => $row['user_id'],
                    'usaha_id' => $row['usaha_id']
                ];
            }
        }

        return [
            'validation' => false,
            'tipe_user' => -1,
            'user_id' => -1
        ];
    }

    public function changeEmail($user_id, $email): bool
    {
        $query = "update users
        set email='{$email}'
        where user_id = {$user_id}";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = mysqli_query($myDB->conn, $query);

        return $result;
    }

    public function changeHP($user_id, $HP_baru)
    {
        $query = "update users
        set no_hp='{$HP_baru}'
        where user_id = {$user_id}";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        return $result;
    }

    public function changeGambarProfil($user_id, $url_gambar)
    {
        $query = "update users
        set url_gambar_profil='{$url_gambar}'
        where user_id = {$user_id}";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        return $result;
    }

    public function changeNama($user_id,$nama_baru){
        $query = "update users
        set nama='{$nama_baru}'
        where user_id = '{$user_id}'
        ";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);
        return $result;
    }

    public function buatUser($nama, $username,  $no_hp,  $email, $password)
    {
        $password = password_hash($password,PASSWORD_DEFAULT);
        $query = "insert into users
        ( nama, username, password, email, no_hp,tipe_user)
        values
        (  '{$nama}', '{$username}', '{$password}', '{$email}','{$no_hp}', 2)
        ";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        $queryLastInserted = 'SELECT LAST_INSERT_ID() as last_id';
        $result = $myDB->execute($queryLastInserted);
        $row = $result->fetch_assoc(); // Fetch the result as an associative array
        $lastInsertedId = $row['last_id'];

        return ['status'=>true, 'user_id'=>$lastInsertedId];
    }
}


// echo password_hash('admin',PASSWORD_DEFAULT);
