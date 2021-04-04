<?php
include('db.php');
$sql = "SELECT * FROM questions";
$result = mysqli_query($connection, $sql);
$result = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($result);
?>