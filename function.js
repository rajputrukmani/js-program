<script>
    /*
      Function/Method :-
        
    */
    function f1(){
        document.write("F1 called.. and executed...");
    }
    function f2(a,b,c, ...d){
       document.write("<br> a : "+a);
       document.write("<br> b : "+b);
       document.write("<br> c : "+c);
       document.write("<br> d : "+d);
document.write("<br> d : "+d[3]);

    }
    //f1();
    f2(10,20,30,40,50,60,70,90);
</script>
