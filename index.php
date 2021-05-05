<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>YTES | Home</title>
    <meta name="viewport" content="width=device-width">
    <meta name="google" content="notranslate">
    <meta name="description" content="Landing Page For YTES">
    <!-- <link rel="apple-touch-icon" sizes="194x194" href="/apple-touch-icon.png" type="image/png"> -->
    <style>
        #init {
            width: 100%;
            height: 100%;
            position: fixed;
            background-color: #f0f0f0;
            -moz-user-select: none;
            -webkit-user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
            display: -webkit-box;
            display: -webkit-flex;
            -webkit-align-items: center;
            -webkit-justify-content: center;
            flex-direction: column;
            -webkit-flex-direction: column;
        }

        .spinner-container {
            -webkit-animation: rotate 2s linear infinite;
            animation: rotate 2s linear infinite;
            z-index: 2;
        }

        .spinner-path {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
            stroke: #acb9bf;
            stroke-linecap: round;
            -webkit-animation: dash 1.5s ease-in-out infinite;
            animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }

        @-webkit-keyframes rotate {
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        @keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }

            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }

            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }

        @-webkit-keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }

            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }

            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
    </style>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="main.css">

</head>

<body>

    <div id="init">
        <svg class="spinner-container" width="50" height="50" viewBox="0 0 44 44">
            <circle class="spinner-path" cx="22" cy="22" r="20" fill="none" stroke-width="4"></circle>
        </svg>
    </div>

    <?php require_once 'config/db.php'; ?>
    <div id="app" class="smooth-scroll-wrapper"></div>

    <script src="jquery.js"></script>
    <script defer="defer" src="scripts.js"></script>
    <script defer="defer" src="chart.js"></script>
    <script>
        function clicked() {
            alert("clicked");
        }
        window.addEventListener("rightClick", clicked);
    </script>
</body>

</html>