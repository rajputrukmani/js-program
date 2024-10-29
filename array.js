<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var arr = [10,20,50,60,30,50];
    
        document.write("<br>"+arr);
        
        arr.push(1000);
        document.write("<br>After Push : "+arr);
    
        arr.pop();
        document.write("<br>After pop"+arr);
    
        arr.unshift(1000);
        document.write("<br>After Unshift "+arr);
    
        arr.shift();
        document.write("<br>After Shift"+arr);
    
        var arr = ["X","Y","Z","A","B","C"];
        arr.sort();
        document.write(arr);
    
    
    </script>
</body>
</html>



 




