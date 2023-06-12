<?php


include_once __DIR__.'\Model\MyDB.php';
include_once __DIR__.'\Model\UserModel.php';
include_once __DIR__.'\Model\CardTokoModel.php';
include_once __DIR__.'\Model\CardProdukModel.php';
include_once __DIR__.'\Model\ProfilTokoModel.php';
include_once __DIR__.'\Model\ProdukModel.php';
include_once __DIR__.'\Model\KolaboratorModel.php';
include_once __DIR__.'\Model\PermintaanKolabModel.php';
include_once __DIR__.'\Model\InvoiceModel.php';
include_once __DIR__.'\Model\IklanModel.php';

class GuestController {

    
    public static function cariUsaha($keyword,$limit){
        if (strlen($keyword)>0){
        $CardTokoModels = new CardTokoModel();
        $result = $CardTokoModels->searchUsaha($keyword);
        }
        else {
        $result = self::guestFetch($limit);
        }
        
        return $result;
    }
    public static function  guestFetch($limit){
        $CardTokoModels = new CardTokoModel();
        $result = $CardTokoModels->fetchRandom($limit);
        return $result;
    }
    
    public static function requestKolabList($usaha_id){
        $kolabModel =new KolaboratorModel();
        $result = $kolabModel->getKolaborator($usaha_id);
        return $result;
    }


    public static function reqeustProfilTokoModel($usaha_id){
        $ProfilModel = new ProfilTokoModel();
        $result = $ProfilModel->getProfilToko($usaha_id);
        
        // $CardModels = new CardProdukModel();
        // $result["CardPorduk"] = $CardModels->getCardProduk($usaha_id);

        return $result;
    }

    public static function getCardToko($limit, $usaha_id ){
        $ProfilModel = new ProfilTokoModel();
        $data = $ProfilModel->getProfilToko($usaha_id);
        
        $tokoModel = new CardTokoModel();
        $result = $tokoModel->getCardToko($limit, $data['kota'], $data['provinsi'], $usaha_id);
        return $result;
    }

    public static function validateLogin($usernameOrEmail, $password){
        $userModel = new UserModel();
        
        $result = $userModel->verifikasi_account($usernameOrEmail,$password);
        return $result;
    }

    public static function register($nama,$username,$no_hp,$email,$password){
        $userModel = new UserModel();
    
        $result = $userModel->buatUser($nama,$username,$no_hp,$email,$password);
    
        return $result;
    }

    public static function buatDetailRegister($datas){
        $usahaModel = new ProfilTokoModel();
        $result_usaha_user_id= $usahaModel->buatUsaha(
            $datas['nama_usaha'],
            $datas['alamat'],
            $datas['kota'],
            $datas['provinsi'],
            $datas['jenis_usaha'],
            $datas['deskripsi_usaha'],
            $datas['url_gambar_toko'],
            $datas['user_id']
        );

        $produkModel = new ProdukModel();
        $result_produk_id = $produkModel->buatProduk(
            $datas['nama_produk'],
            $datas['harga'] ,
            $datas['url_gambar_produk'],
            $datas['deskripsi_produk'],
            $result_usaha_user_id['usaha_id']
        );
    
        $userModel = new UserModel();
        $userModel->changeGambarProfil($datas['user_id'],$datas['url_gambar_profil']);
    
    
        return $result_usaha_user_id;
    }
}

class AdminController{
    public static function terimaIklan($iklan_id){
        $iklanModel = new IklanModel();
        $result = $iklanModel->terimaIklan($iklan_id);
        
        return $result;
        
    }
    
    
    
    public static function hapusIklan($iklan_id){
        $iklanModel = new IklanModel();
        $result = $iklanModel->hapusIklan($iklan_id);
        
        return $result;
    }
    
    public static function fetchPermintaanIklan(){
        $iklanModel = new IklanModel();
        $result = $iklanModel->fetchPermintaanIklan();
        
        return $result;
        
        
    }
    
    public static function fetchIklanTayang(){
        $iklanModel = new IklanModel();
        $result = $iklanModel->fetchIklanTayang();
        
        return $result;
    }


}


class UserController extends GuestController {
    public static function invoiceDetail($invoice_id){
        $model = new InvoiceModel();
        $result = $model->fetchDetailInvoice($invoice_id);
        
        return $result;
    }


    public static function tambahIklan($usaha_id,$url_gambar_iklan, $url_gambar_bukti){
        $iklanModel = new IklanModel();
        $result = $iklanModel->savedIklan($usaha_id,$url_gambar_iklan,$url_gambar_bukti);
        
        return $result;
        
    }
    
    
    public static function ubahToko(
        $nama_usaha
        ,$alamat
        ,$kota
        ,$provinsi
        ,$deskripsi_toko
        ,$url_gambar_toko
        ,$usaha_id
    )   
    {
        $modelProfil = new ProfilTokoModel();
        $modelProfil->ubahToko(
            $usaha_id
            ,$nama_usaha
            ,$alamat
            ,$kota
            ,$provinsi
            ,$deskripsi_toko
            ,$url_gambar_toko
        );

        return true;
    }

    public static function ubahToko2(
        $nama_usaha
        ,$alamat
        ,$kota
        ,$provinsi
        ,$deskripsi_toko
        ,$usaha_id
    )   
    {
        $modelProfil = new ProfilTokoModel();
        $modelProfil->ubahTokoNoImage(
            $usaha_id
            ,$nama_usaha
            ,$alamat
            ,$kota
            ,$provinsi
            ,$deskripsi_toko
        );

        return true;
    }

    public static function requestKolab($usaha_id_1,$usaha_id_2,$deskripsi_permintaan){
        $modelKolabrequest = new PermintaanKolabModel(); 
        $result = $modelKolabrequest->buatPermintaan($usaha_id_1,$usaha_id_2,$deskripsi_permintaan);

        return $result;
    }

    public static function getKolabSaya($usaha_id){
        $modelPermintaan = new PermintaanKolabModel();
        $modelKolab = new KolaboratorModel();

        $resultPermintaan = $modelPermintaan->getPermintaanKolab($usaha_id);
        $resultKolab = $modelKolab->getKolaborator($usaha_id);

        return [
            'permintaan' => $resultPermintaan,
            'kolab'=> $resultKolab
        ];
    }

    public static function hapusMitra($usaha_id_1,$usaha_id_2){
        $modelKolab = new KolaboratorModel();
        $result = $modelKolab->hapusKolaborator($usaha_id_1, $usaha_id_2);
        return $result;
    }

    public static function terimaPermintaan($usaha_id_1, $usaha_id_2){
        $modelPermintaan = new PermintaanKolabModel();
        $modelPermintaan->terimaPermintaan($usaha_id_1,$usaha_id_2);

        return true;
    }

    public static function tolakPermintaan($usaha_id_1, $usaha_id_2){
        $modelPermintaan = new PermintaanKolabModel();
        $result = $modelPermintaan->hapusPermintaan($usaha_id_1,$usaha_id_2);
        return $result;
    }

    public static function ubahProfil($user_id,$nama,$email,$no_hp,$url_gambar_profil){
        $modelUser = new UserModel();
        $modelUser->changeEmail($user_id,$email);
        $modelUser->changeGambarProfil($user_id,$url_gambar_profil);
        $modelUser->changeHP($user_id,$no_hp);
        $modelUser->changeNama($user_id,$nama);

        return true;

    }

    public static function fetchProdukSaya($usaha_id){
        $model = new ProdukModel();
        $result = $model->fetchProdukUsaha($usaha_id);

        return $result;
    }

    public static function savedInvoice($usaha_id,$klien,$harga_total,$metode_bayar,$email_pembeli,$alamat_pembeli,$no_hp_pembeli, $list_produk ){
        $modelInvoice = new InvoiceModel();
        $invoice_id = $modelInvoice->addInvoice($usaha_id,$klien,$harga_total,$metode_bayar,$email_pembeli,$alamat_pembeli,$no_hp_pembeli);
        
    
        foreach($list_produk as $each){
            $modelInvoice->addPembelian($each['produk_id'],$invoice_id,$each['kuantitas']);
        }

        return true;

    }

    public static function tambahProduk($nama_produk, $harga, $url_gambar_produk, $deskripsi_produk, $usaha_id){
        $produkModel = new ProdukModel();
        $result = $produkModel->buatProduk($nama_produk, $harga, $url_gambar_produk, $deskripsi_produk, $usaha_id);
        
        return $result;
    }

    public static function ubahStatus($invoice_id){
        $invoiceModel = new InvoiceModel();
        $result = $invoiceModel->ubahStatus($invoice_id);
        return $result;
    }

    public static function fetchInvoices($usaha_id){
        $InvoiceModel = new InvoiceModel();
        $result = $InvoiceModel->fetchMyInvoice($usaha_id);

        return $result;
    }

    public static function hapusInvoice($invoice_id){
        $invoiceModel = new InvoiceModel();
        $result = $invoiceModel->hapusInvoice($invoice_id);

        return $result;
    }
}




