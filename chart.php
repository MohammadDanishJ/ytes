<?php

require_once 'config/db.php';


$array = array();
$sql = "SELECT * FROM rate ORDER BY date DESC LIMIT 7";

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $array[($row[2])] = $row[1];
    }
}
echo json_encode($array);
