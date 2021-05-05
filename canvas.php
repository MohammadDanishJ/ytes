<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>canvas</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            display: flex;
            justify-content:center;
            align-items:center;
            width: 100%;
            height: 100vh;
            background: #050c1c;
        }
        canvas{
            
            border: 2px solid #ececec;
            border-radius: 25px;
        }
        .c-w{
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
        }
        .c{
            width: 26px;
            height: 26px;
            border-radius: 50%;
            cursor: pointer;
            background-color: #fff;
            display: inline-block;
            margin: 6px;
            transition: 250ms ease;
        }
        .c:active{
            transform: scale(0.9);
        }
        .c:hover{
            opacity: 0.8;
        }
        .c-b{
            background-color: #2028BD;
        }
        .c-o{
            background-color: #F0A27B;
        }
        .c-g{
            background-color: #87C38F;
        }
        .c-e{
            background-color: #050C1C;
            border: 1px solid #ececec;
        }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>

    <div class="c-w">
    <div data-color="#2028BD" onclick="setColor(this)" class="c c-b"></div>
    <div data-color="#F0A27B" onclick="setColor(this)" class="c c-o"></div>
    <div data-color="#87C38F" onclick="setColor(this)" class="c c-g"></div>
    <div data-color="#FFFFFF" onclick="setColor(this)" class="c"></div>
    <div data-color="#050C1c" onclick="erase()" class="c c-e"></div>
    </div>
    <script defer="defer" src="canvas.js"></script>
</body>
</html>