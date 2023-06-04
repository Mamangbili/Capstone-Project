<?php

// require_once __DIR__.'\Model\MyDB.php';
// require_once __DIR__.'\Model\UserModel.php';
// require_once __DIR__.'\Model\CardTokoModel.php';
// require_once __DIR__.'\Model\CardProdukModel.php';
// include_once __DIR__.'\Model\ProfilTokoModel.php';

// class GuestController {
    
//     public static function requestDashboard($limit, $kota=null, $provinsi=null, $id_yg_meminta=null) {
//         $userModel = new CardTokoModel();

//         $result = $userModel->getCardProduk($limit, $kota=null, $provinsi=null, $id_yg_meminta);
//         return $result;
//     }

//     public static function reqeustProfilTokoModel($usaha_id){
//         $ProfilModel = new ProfilTokoModel();
//         $result = $ProfilModel->getProfilToko($usaha_id);
        
//         $CardModels = new CardProdukModel();
//         $result["CardPorduk"] = $CardModels->getCardProduk($usaha_id);
        
//         // [profil : value
//         // CardProduk : [list of card]
//         // ]

//         return $result;
//     }

// }


// class UserContoller extends GuestController {
    
//     public static function validateLogin($usernameOrEmail, $password){
//         $userModel = new UserModel();
        
//         $result = $userModel->verifikasi_account($usernameOrEmail,$password);
//         return $result;
//     }

// }



// $model = new ProfilTokoModel();
// echo json_encode(UserContoller::reqeustProfilTokoModel(2)). PHP_EOL;
// echo json_encode($model->getProfilToko(3)). PHP_EOL;



?>