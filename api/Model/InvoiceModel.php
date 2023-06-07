<?php
include_once 'MyDB.php';
class InvoiceModel
{





    public function fetchMyInvoice($usaha_id)
    {
        $query = "
        select * from invoice
        where usaha_id = $usaha_id
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);


        $datas = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $data = [
                'invoice_id' => $row['invoice_id'],
                'tgl_invoice' => $row['tgl_invoice'],
                'klien' => $row['klien'],
                'harga' => $row['harga'],
                'metode_bayar' => $row['metode_bayar'],
                'status_bayar' => $row['status_bayar'],
                'email_pembeli' => $row['email_pembeli'],
                'alamat_pembeli' => $row['alamat_pembeli'],
                'no_hp_pembeli' => $row['no_hp_pembeli'],
            ];

            array_push($datas, $data);
        }

        return $datas;
    }

    private function generateInvoiceNumber($prefix)
    {
        $microtime = microtime(true);
        $timestamp = substr(str_replace(['.', ' '], '', $microtime), -6);
        $randomNum = rand(100, 999); // 
        $invoiceNumber = $prefix . '-' . $timestamp . '-' . $randomNum;
        return $invoiceNumber;
    }

    public function addInvoice($usaha_id, $klien, $harga, $metode_bayar, $email_pembeli, $alamat_pembeli, $no_hp_pembeli)
    {
        $invoice_id = $this->generateInvoiceNumber('INV');
        $query = "
        INSERT INTO `invoice`
        (`invoice_id`, `usaha_id`, `klien`, `harga`,`status_bayar`, `metode_bayar`,  `email_pembeli`, `alamat_pembeli`, `no_hp_pembeli`) 
        VALUES 
        ('{$invoice_id}',{$usaha_id},'{$klien}',{$harga},false,'{$metode_bayar}','{$email_pembeli}','{$alamat_pembeli}','{$no_hp_pembeli}')";

        $myDB = new MyDB();
        $myDB->getConnection();
        $myDB->execute($query);

        return $invoice_id;
    }

    public function addPembelian($produk_id, $invoice_id, $kuantitas)
    {
        $query = "INSERT INTO pembelian 
        (invoice_id, produk_id, kuantitas)
    VALUES
        ('$invoice_id', $produk_id, $kuantitas)
        ";

        $myDB = new MyDB();
        $myDB->getConnection();

        $result = $myDB->execute($query);

        return $result;
    }


    public function ubahStatus($invoice_id)
    {
        $query = "
        UPDATE invoice
        SET status_bayar = NOT status_bayar
        WHERE invoice_id = '$invoice_id'
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

    

        return $result;
    }

    public function hapusInvoice($invoice_id){
        $query = "
        DELETE FROM `invoice` WHERE `invoice_id` = '$invoice_id'
        ";

        $myDB = new MyDB();
        $myDB->getConnection();
        $result = $myDB->execute($query);

        return $result;
    }
}
