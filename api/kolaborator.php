<?php
class Kolaborator{

    function __construct($id)
    {
        
    }

    function cari_kolaborasi($id,msqli  $conn){
        kolabQuery = "select * from kolaborator where user_id_1={$id} or user_id_2 =={$id}  "
        $conn->query("Select")
    }
}
?>