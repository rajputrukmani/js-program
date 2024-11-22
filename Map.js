const arr = [1, -4, 12, 0, -3, 29, -150];
 function sum(n){
    
    if(n>0)
    {
        return n
    }
    else
    {
        return 0;
    }
 }
     let a=  arr.filter(sum)
      console.log(a)

      let s=a.reduce((x,y)=>{
        let sum=0;
         return sum=x+y
         
      })
      console.log(sum)
       
