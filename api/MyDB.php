<?php

class MyDB{

    public function __construct(private string $host,
    private string $name,
    private string $user,
    private string $password)
    {
        
    }

    public function getConnection() : PDO
    {
       $conString = "mysql:host={$this->host};dbname={$this->name};chartset=utf8"; 

       return new PDO($conString, $this->user, $this->password);
    }
}
