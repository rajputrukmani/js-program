<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let s = "this is an \"String\" ";
        document.writeln(s+"<br> <br>") 
        
        let pr = "the\'sun\'risce in the east"
        document.writeln(pr)

        let x ="priya is a - 'pgl girl' "
        document.write(x)

        let c = document.createElement('p')
        c.textContent=s;

        let p = document.getElementsByTagName('body')[0]
        p.appendChild(c)
       </script>
    
</body>
</html>
