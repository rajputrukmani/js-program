<script>
    let n=121;
let s=n;
let rem,res,mul=0;
console.log("hello")
while( n>=0){
    rem=n%10;
    res=rem*10+res;
    n=Math.floor(n/10);

}
if(s==n){
    console.log("yes");
}
else{
    console.log("not");

}
console.log("out")
</script>
