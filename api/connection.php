<?php

class DBconnectoin{
    

    protected conn;
    
    public $setServername = fn($servername) => this->servername = $servername;
    public $setusername = fn($username) => this->username = $username;
    public $setpassword = fn($password) => this->password = $password;
    public $setdbname = fn($dbname) => this->dbname = $dbname;
    
    function __constructor (){
        $this->conn = new mysqli($servername, $username, $password,$dbname);
    }

}

?>