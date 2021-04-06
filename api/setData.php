<?php
include('db.php');
$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
$database = new DB();
$database->connect();
$database->setUserAnswers($data);
