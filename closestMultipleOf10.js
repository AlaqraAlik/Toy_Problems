 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 function closestMultipleOf10(num) {
      

    

    var m=num.toString()
    var k=m.split("")
    var c=0
    for(var i=0;i<k.length;i++)
    {
    	 c=k[i]
    }
       if(k[i]<5)
       {
       	parseInt(k[i]="0")
       }

       return parseInt(k)


 	
 }