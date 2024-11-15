<script>
    var arr = [1,-3,5,-2,6,-1,3]
    var positive=[]
    var nagative=[]
    for(let  i=0;i<arr.length;i++)
    {
        let a= arr[i]
        if(a>0)
        {
             positive.push(a)
        }
        else

        {
             nagative.push(a)
        }
     }
     document.write(`positive value : ${positive+nagative}`)
 
</script>
