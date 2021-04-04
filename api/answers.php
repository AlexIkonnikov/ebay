<?php
include('db.php');
$sql = "SELECT * FROM answers";
$result = mysqli_query($connection, $sql);
$result = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($result);
?>