// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Password Generation
function generatePassword(){
  let password = "";
  console.log("Button Clicked");

  // I am presented with a series of prompts for password criteria
  // THEN I select which criteria to include in the password
  alert("A new password will be generated based on your answers to the following questions.");
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please enter a number value between 8-128 for the length of your password.");{
    while (passwordLength > 128 || passwordLength < 8){
      passwordLength = prompt("Please enter a valid number between 8-128.");
    }
    console.log(passwordLength);
  }
  
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var upperCase = confirm("Click 'Okay' to include uppercase letters.")
    console.log(upperCase);
    //If else statement to determine inclusion of uppercase


  var lowerCase = confirm("Click 'Okay' to include lowercase letters.")
    console.log(lowerCase);

  //If else statement to determine inclusion of lowercase
  var numbers = confirm("Click 'Okay' to include numbers.")
    console.log(numbers);
  //If else statement to determine inclusion of numbers
  var specialChars = confirm("Click 'Okay' to include special characters.");
    console.log(specialChars);
  //If else statement to determine inclusion of special chars
  
  
  










  
  // THEN my input should be validated and at least one character type should be selected

  // THEN a password is generated that matches the selected criteria

  // THEN the password is either displayed in an alert or written to the page//
  return password;
}