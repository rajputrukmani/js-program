<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <center>
        <img  id="main" src="imge.jpeg"  width="500" height="200">
        <button onclick="increament()">+</button>
        <button onclick="dcreament()">-</button>
    </center>
    <script>
        function increament(){
        var mainimage = document.getElementById("main");
        mainimage.width =  mainimage.width*1+20;
        mainimage.heigth = mainimage.heigth*1+20;
        }
        function dcreament()
        {
            var mainimage = document.getElementById("main");
            mainimage.width=mainimage.width*1-20;
            mainimage.heigth = mainimage.heigth*1-20;

        }
    </script>
</body>
</html>
