<script>
    var arr = [2,1,4,3,2,1,4]
      
    for(var i=0 ;i<arr.length;i++)
  {
    for(var j=i+1;j<arr.length;j++)
  {
   if(arr[i]==arr[j])
     {
      document.write("<br>"+"print duplicate value"+arr[j])
      break
        
     }
   
    }
   }
</script>
