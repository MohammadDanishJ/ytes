<?php

require 'constants.php';


$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    die('Database error:' .$conn->connect_error);
    header("Location: pagenotfound.php");
}

mysqli_set_charset($conn,"utf8mb4");
?>