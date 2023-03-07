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
  var passwordLength = prompt("Please enter a number value between 8-128 for the length of your password.");
  
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var upperCase = confirm("Do you want uppercase letters?");
  var lowerCase = confirm("Do you want lowercase letters?");
  var numbers = confirm("Do you want nubmers?");
  var specialChars = confirm("Do you want special characters?");
  
  // THEN my input should be validated and at least one character type should be selected

  // THEN a password is generated that matches the selected criteria

  // THEN the password is either displayed in an alert or written to the page//
  return password;
}