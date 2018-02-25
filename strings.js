// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character)
	{ 
         var arr=["a","b","c","d","e","f","g","h","i","g","k","l","m","n","o",
         "p","q","r","s","t","u","v","w","x","y","z"]
		  character.toLowerCase

        for (var i=1;i<i<27;i++) {
              
              if(character==="a")
              	return "Position of alphabet: 1 "
              else
              	if (character===arr[i]) {
                          var x=i+1
              		return "Position of alphabet: "+ x
                 
              	}

             }
         }

        	// if(character==="a")
        	// 	return  "Position of alphabet: 1 "
        	// else
        	// if(character===arr[i])
        	// 	var x=i-1
        	// 	 //debugger;
        	// 	return "Position of alphabet: "+ x
        	
 //        }

	// }

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) 
	{  var x=""
		for(var i=0;i<s;i++)
		{
            x+=n
		}
		return x;
	}