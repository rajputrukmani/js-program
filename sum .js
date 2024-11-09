<!--  Write a program to find the sum of all elements in an array.
Input: [1, 2, 3, 4, 5] -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .div1{
            border: red solid;
            background-color: blanchedalmond;
            height: 200px;
            width: 200px;
            text-align: center;
            padding: 10px;
            margin-left: 20pc;
            
        }
        p{
            border: black;
        }
    </style>
</head>
<body>
    <div class="div1"> 
        <p id="arr"></p> 
    <script>
        let arr = [21,2,4,14,53]
        let sum=0;
        for(let i =0;i<arr.length;i++)
    {
      sum += arr[i]
    }
       document. getElementById("arr").innerHTML=`sum of all elemnet:${sum}`;
    </script>
    </div>
</body>
</html>
