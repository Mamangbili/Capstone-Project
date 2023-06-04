<?php

class MyDB
{
    public mysqli $conn;
    private string $host = "localhost";
    private string $dbname = "test";
    private string $user = "root";
    private string $password ='';
    public $test = "wakwaw";

    public function __construct()
    {
    }

    public function getConnection()
    {
        $this->conn = mysqli_connect($this->host, $this->user, $this->password, $this->dbname );
    }

    public function execute($query){


        $result = mysqli_query($this->conn, $query);

        return $result;
    }
}
