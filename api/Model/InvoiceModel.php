<?php

class InvoiceModel{
    
    
    
    //invoice id tgl/id_pembuat/


    public function getInvoice($invoice_id){
        $query = "select *
        from invoice
        where invoice_id = '{$invoice_id}'
        ";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);


    }
} 