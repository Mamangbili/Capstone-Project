<?php
class CardModel{
    
    private PDO $conn;

    public function __construct(MyDB $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getCard(string $limit)
    {
        $sql = "SELECT * 
                FROM usaha";

        $stmt = $this->conn->query($sql);
        $data = [];

        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $data[] = $row ;
        }

        return $data;

    }


}
?>