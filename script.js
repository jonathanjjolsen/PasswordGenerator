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

  // I am presented with a series of prompts for password criteria
  // THEN I select which criteria to include in the password
  alert('We are now going to build your password. Please answer the following questions.');
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please enter a number value between 8-128 for the length of your password.");{
    while (passwordLength > 128 || passwordLength < 8){
      passwordLength = prompt("Please enter a valid number between 8-128.");
    }
  }
  
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var upperCase = confirm("Do you want uppercase letters? Okay for Yes, Cancel for No.");

  var lowerCase = confirm("Do you want lowercase letters? Okay for Yes, Cancel for No.");

  var numbers = confirm("Do you want nubmers? Okay for Yes, Cancel for No.");

  var specialChars = confirm("Do you want special characters? Okay for Yes, Cancel for No.");
  
  // THEN my input should be validated and at least one character type should be selected

  // THEN a password is generated that matches the selected criteria

  // THEN the password is either displayed in an alert or written to the page//
  return password;
}