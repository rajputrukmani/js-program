function f1(a,b,callbackFirst, callbackSecond){
      var result = a + b;
      document.write("<br>Addition : "+result);
      callbackFirst(result);
      callbackSecond(result);
    }
    f1()

    f1(-20,11,function(x){
       x % 2 ? document.write("<br>ODD") : document.write("<br>EVEN");
    }, function(x){
        if(x > 0)
          document.write("<br>Positive Result");
        else if(x < 0)
              document.write("<br>Negative Result");
             else
              document.write("<br>Neutral Result");   
    });
