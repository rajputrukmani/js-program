var a = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
];

var b=[];
for(let i=0;i<a.length;i++)
{
    for(let j=0;j<a[i].length;j++)
    {
       b.push(a[i][j])
    }
}
console.log(b)
 
var newarr=[];
 for(let i=0;i<b.length;i++)
 {
     let count=0;
     let a=b[i];
     let e = false;
     for(let j=0;j<newarr.length;j++)
     {
         if(newarr[j] === a)
        {
            e=true;
            break;
        }  
     }
     if(e)
     {
         continue;
     }
     for(let k=0;k<b.length;k++)
     {
         if(b[k]==a)
         {
             count++;
         }

     }
        newarr.push(a);
        console.log(a + " "+count);
 }
 

