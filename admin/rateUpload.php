<?php
date_default_timezone_set("Asia/Calcutta");

require_once 'C:\xampp\htdocs\projects\ytes\config\db.php';

$array = array();
$rate = $_POST['rate'];

//$conn->query($conn, "SET SESSION time_zone = 'Asia/Calcutta'");//for active session, timezone

$date = date("Y-m-d G:i:s");

$sql = "INSERT INTO rate (rate, date) VALUES ('$rate','$date')";

$stmt = $conn->query($sql) or die($conn);

if ($stmt === TRUE) {
    $id = $conn->insert_id;
    $array = [
        'status' => true,
        'rate' => 'INR '.$rate.'.00',
    ];
} else {
    $array = [
        'status' => false,
        'rate' => false,
    ];
}

echo json_encode($array);


?>