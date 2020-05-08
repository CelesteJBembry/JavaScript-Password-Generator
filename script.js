// Assignment Code
  var generateBtn = document.querySelector("#generate");
  var password = generatePassword("#password");
 // var criteria = document.querySelector(input["criteria"]);
  //var length = document.querySelector(input["length"]);
  //var lower = document.querySelector(input["lowercase"]);
  //var upper = document.querySelector(input["uppercase"]);
  //var numeric = document.querySelector(input["number"]);
  //var special = document.querySelector(input["special"]);
  //var input = document.querySelector(input["input"]);
  //var passAlert = document.querySelector(input["passAlert"]);


// Write password to the #password input
function writePassword() {
  
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


//var x = document.getElementById("myCheck").checked;
  //var lengthCheck= length.valueOf()
 // var lower2 = document.getElementById(lower).checked
  //var upper2 = document.getElementById(upper).checked
 // var numeric2 = document.getElementById(numeric).checked
 // var special2 = document.getElementById(special).checked
 // var password = length2, lower2, upper2, numeric2, special2

  

//var i = 0, i<10, i++)
//math.random() : generates # between 0 and 1
//math.floor() :returns the largest integer <= a number.
//math.floor(math.random()) returns random whole numbers between 1-10


//WHEN prompted for password criteria, THEN I select which criteria to include in the password
//1. criteria
//WHEN prompted for the length of the password, THEN I choose a length of at least 8 characters and no more than 128 characters
//2. length
//WHEN prompted for character types to include in the password, THEN I choose lowercase, uppercase, numeric, and/or special characters
//3. lower, upper, numeric, special
//WHEN I answer each prompt, THEN my input should be validated and at least one character type should be selected
//4. input w/ @ least one character type
//WHEN all prompts are answered,THEN a password is generated that matches the selected criteria
//5. password generated
//WHEN the password is generated, THEN the password is either displayed in an alert or written to the page
//6. password alert

  //function generateBtn() { 
  //var password ="  "; 
  //var test = document.getElementById("password")
  
  
    //for (i = 0; i <= 8; i++) {
      //var char = special[Math.floor(Math.random() * special.length)] || lower[Math.floor(Math.random() * lower.length)] || upper[Math.floor(Math.random() * lower.length)]
      //|| Math.floor(Math.random() * numeric.length) + 1; 
      //console.log(char);}
      //password += passAlert.charAt(char) 
  //				var char = Math.floor(Math.random()* passAlert.length + 1); 

  var test = document.getElementById("password"); 

		function generateBtn() { 
			var password = ''; 
      var passAlert = "0123456789#!$%&'()*+,-./\:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
			for (i = 1; 128<= i <= 8; i++) { 
      
        password = password + passAlert.charAt(Math.floor(Math.random() 
        * passAlert.length -1))
			}
			document.getElementById("password") = password
    } 
    
    function password () {
      return  password = password + passAlert.charAt(Math.floor(Math.random() 
      * passAlert.length -1)); 
    }

    


    for (i = 0; i <= 8; i++) {
      var special = "#!$%&'()*+,-./\:;<=>?@[]^_`{|}~"
      var lower = "abcdefghijklmnopqrstuvwxyz"
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      var numeric = "0123456789"
        var char = special[Math.floor(Math.random() * special.length)]
          console.log(char);
        var char = lower[Math.floor(Math.random() * lower.length)]&& upper[Math.floor(Math.random() * lower.length)]
          console.log(char);
        var char = Math.floor(Math.random() * numeric.length) + 1; 
          console.log(char);
    }



