<?php
include('db.php');
$database = new DB();
$database->connect();
$database->getData();
?>