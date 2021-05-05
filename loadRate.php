<?php
require_once 'config/db.php';

$sql = "SELECT * FROM rate ORDER BY date desc";

$rating = array();
$sql_rs = mysqli_query($conn, $sql) or die($conn);
$sql_data = mysqli_fetch_array($sql_rs);
//$rating = [
//    'likes' => $likes[0]
//];
//return json_encode($rating);
if ($sql_data > 0) {
    //login user

    $rate = $sql_data[1] . '.00';
} else {
    $rate = '00.00';
}

$data = '
        <section class="prel">
        <div id="lander"></div>
        <canvas class="pabs b0"></canvas>
        <header class="pabs t0">
            <div class="fl flc w100 h100 fldcl">
                <h1 class="welcome-text text-center prel cd lhinit">1 Unit, <span class="highlight">INR ' . $rate . '</span></h1>
            </div>
        </header>
        </section>
        <section class="prel fl flc fldcl">
        <h1 class="welcome-text text-center prel cd lhinit"><span class="highlight">Contact Us</h1>
            <div class="fl flc flww"><button data-action="whatsapp" class="prel call cp">Whatsapp</button><button data-action="call" class="prel call cp">Call</button></div>
        </section>
            <footer class="prel b0 w100 fl flc b-grey">Proud To Serve You: YTES</footer>
    ';
echo $data;
