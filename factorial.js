<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
      <p>enter a no</p> <input type="number" id="factor"></input>
      <button onclick="factorial()">chlick</button>
      <p id="result"></p>


    <script>
         
        function factorial()
        {
            let a =document.getElementById("factor").value;
            let f=1;
            for(let i=1;i<=a;i++)
        {
            f=f*i;

        } 
        document.getElementById("result").innerHTML=`factorial:${f}`;
        }
    </script>
    
</body>
</html>
