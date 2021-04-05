<?php
mysqli_report(MYSQLI_REPORT_STRICT);
class DB {
    private $host;
    private $user;
    private $password;
    private $db_name;
    private $questions_table = 'questions';
    private $answers_table = 'answers';
    private $error;

    public function __construct ($host = 'localhost', $user = 'root', $password = '', $db_name = 'ebay') {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->db_name = $db_name;
    }

    public function connect() {
        try {
        $connection = mysqli_connect($this->host, $this->user, $this->password, $this->db_name);
        mysqli_set_charset($connection, "utf8");
        $this->connection = $connection;
        } catch (Exception $err) {
            $this->error = 'Ошибка сервера (Код: '. mysqli_connect_errno() . ')';
        }
    }

    public function getAllData($table) {
        $data = "SELECT * FROM $table";
        $result = mysqli_query($this->connection, $data);
        $result = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return $result;
    }

    public function getData() {
        header('Content-Type: application/json; charset=UTF-8');
        if ($this->error) {
            echo json_encode(
               ['error' => $this->error]
            );
            return;
        } 
        echo json_encode(
            [
                'questions' => $this->getAllData($this->questions_table),
                'answers' => $this->getAllData($this->answers_table),
            ]
        );
    }
}
?>


