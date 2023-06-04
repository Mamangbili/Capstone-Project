<?php

class ListInvoiceModel{

public function __construct(){}

public function getInvoice($usaha_id){
    $myDB = new MyDB();
    $myDB->getConnection();

    $query = "
    select 
    invoice_id,
    tgl_invoice,
    harga,
    klien,
    status_bayar
    from invoice

    where usaha_id = '{$usaha_id}'
    ";

    $result = $myDB->execute($query);

    $datas=[];

    while ($row = mysqli_fetch_array($result)){
        $data = [
            'select'    => $row['select'],
            'invoice_id'    => $row['invoice_id'],
            'tgl_invoice'   => $row['tgl_invoice'],
            'harga' => $row['harga'],
            'pembeli'   => $row['pembeli'],
            'status'    => $row['status']
        ];

        array_push($datas,$data);
    }

    return $datas;
}
}
