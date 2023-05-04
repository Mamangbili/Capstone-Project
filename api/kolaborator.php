<?php
class Kolaborator{
    private PDO $conn;

    function __construct($id)
    {
        $this->conn = new MyDB();
    }

    function cari_kolaborasi($id, mysqli  $conn){
        $kolabQuery = "select * from kolaborator where user_id_1={$id} or user_id_2 =={$id}  ";
        $stmt = $this->conn->query($kolabQuery);

        $datas = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $data = new KolaboratorModel
            (
                $row['kolaborasi_id'],
                $row['user_id_1'],
                $row['user_id_2'],
                $row['tgl_mulai_kolab']
            );
            $json_data = json_encode($data);
            array_push($datas, $json_data);
        };

        echo $datas;
    }
}

class KolaboratorModel implements JsonSerializable{
    private $kolborasiId;
    private $userId1;
    private $userId2;
    private $tglMulaiKolab;

    public function jsonSerialize()
    {
        return [
            'kolborasiId'   => $this->kolborasiId,
            'userId1'       => $this->userId1,
            'userId2'       => $this->userId2,
            'tglMulaiKolab' => $this->tglMulaiKolab
        ];
    }
}
