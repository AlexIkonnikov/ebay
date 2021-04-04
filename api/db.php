<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db_name = 'ebay';

$connection = mysqli_connect($host, $user, $password, $db_name);
mysqli_set_charset($connection, "utf8");
?>


