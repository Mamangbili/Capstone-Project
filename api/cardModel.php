<?php
class CardQuery{
    
    private PDO $conn;

    public function __construct(MyDB $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getCard(string $limit)
    {
        $sql = "SELECT * 
                FROM usaha 
                inner join user
                on usaha.user_id = user.user_id
                ";

        $stmt = $this->conn->query($sql);
        $data = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            //ambil per baris
            $record= new CardModel
            (
                $row['nama_usaha']
                ,$row['kota']
                ,$row['jenis_produk']
                ,$row['deskripsi']
                ,$row['harga']
                ,$row['url_toko']
                ,$row['url_profil']
            );
            // ubah kedalam bentuk json
            $json = json_encode($record);
            array_push($data, $json);
        };

        //send to client
        echo $data;

    }
};


class CardModel implements JsonSerializable{

    public function __construct (
    private $nama_usaha,
    private $kota,
    private $jenisProduk,
    private $deskripsi,
    private $harga,
    private $urlToko,
    private $urlProfil)
    {
        
    }

    public function jsonSerialize(): mixed
    {
        return [
            'namaToko' => $this->nama_usaha,
            'kota' => $this->kota,
            'jenisProduk' => $this->jenisProduk,
            'deskripsi' => $this->deskripsi,
            'harga' => $this->harga,
            'urlToko' => $this->urlToko,
            'urlProfil' => $this->urlProfil            
        ];

    }
}
