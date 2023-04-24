<?php
    require 'connection.php';
     $servername = "localhost";
     $username = "entahlah";
     $password = "klo ada";
     $dbname = "isi ini";

   function search($querySelect){
    global $servername;
    global $username;
    global $password;
    global $dbname;
    if (preg_match('/select/i',$querySelect)){
        return new Exception("bukan select query");
    }
        $conn = new mysqli($servername, $username, $password, $dbname);

        $result = $conn->query($querySelect);

        
        $result = $result->fetch_all(PDO::FETCH_ASSOC);

        $result = json_encode($result);

        return $result;
    }
