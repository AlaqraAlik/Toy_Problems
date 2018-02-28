	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input)
     {  var arr=input.split("")
         var x
		  for (var i =0;i<arr.length; i++) {
		 
		   if(arr[i]===arr[i].toLowerCase())
		   {
		   
		   	x=arr[i].toUpperCase()

           }

		   if(arr[i]===arr[i].toUpperCase())
		   {
		   	x=arr[i].toLowerCase()
		   	debugger;
		   }
           
		}
		return x

	}
