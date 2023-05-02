<?php

class UpdateProfile{
    private PDO $conn;

    public function __construct(private MyDB $database)
    {
        $this->conn = $database->getConnection();
    }


    public function setPassword(string $password){
        $new_pass = password_hash($password, PASSWORD_DEFAULT);

        #verify
        
        #store to database

        $sql = "Update users
                set password = {$new_password}
                where user_id = {}"; #user id
        $this->conn->query()

    }
    public function set1(string ){}
    public function set1(string ){}
    public function set1(string ){}
    public function set1(string ){}
}

?>