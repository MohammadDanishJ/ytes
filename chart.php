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
// while ($post = mysqli_fetch_array($result)) {
//     $array = [
//         $post[0] => $post[1],
//     ];
// }

// if ($stmt === TRUE) {
//     while ($rowtag = mysqli_fetch_array($resulttag)) {

//         $array = [
//             $rowtag[1] => $rowtag[2],
//         ];
//     }

// } else {
//     $array = [
//         'status' => false,
//         'rate' => false,
//     ];
// }

echo json_encode($array);
