var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Event listener for generate button
generateBtn.addEventListener("click", writePassword);


//Password Generation
let lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseSet = lowerCaseSet.toUpperCase();
let numberSet = '0123456789';
let specialSet = '?!@#$%&*';

function generatePassword(){
  let password = "";
  console.log("Button Clicked"); //For dev visual

  //Informs user of process
  alert("A new password will be generated based on your answers to the following questions.");
  
  // Conditional for obtaining length of password
  var passwordLength = prompt("Please enter a number value between 8-128 for the length of your password.");{
    while (passwordLength > 128 || passwordLength < 8){
      passwordLength = prompt("Please enter a valid number between 8-128.");
    }
    console.log(passwordLength);
  }
  
  //Confirmation of desired character types
  var upperCase = confirm("Click 'Okay' to include uppercase letters.")
    console.log(upperCase); //For dev visual

  var lowerCase = confirm("Click 'Okay' to include lowercase letters.")
    console.log(lowerCase); //For dev visual
  
  var numbers = confirm("Click 'Okay' to include numbers.")
    console.log(numbers); //For dev visual
  
  var specialChars = confirm("Click 'Okay' to include special characters.");
    console.log(specialChars); //For dev visual

  //Function for obtaining random value from a string
  function getCharacter(str) {
    const randomValue = Math.floor(Math.random() * str.length);
    return str[randomValue];
  }
  
  //Conditionals for verifying requested character types are included
  if(upperCase){
    password = password + getCharacter(upperCaseSet);
  }
  if(lowerCase){
    password = password + getCharacter(lowerCaseSet);
  }
  if(numbers){
    password = password + getCharacter(numberSet);
  }
  if(specialChars){
    password = password + getCharacter(specialSet);
  }

  //Conditionals for completing the remaining spots in the password
  let passSet = "";

  if(upperCase) {
    passSet = passSet + upperCaseSet;
  }
  if(lowerCase) {
    passSet = passSet + lowerCaseSet;
  }

  if(numbers){
    passSet = passSet + numberSet;
  }

  if(specialChars){
    passSet = passSet + specialSet;
  }
     
  while(password.length < passwordLength) {
    password = password + getCharacter(passSet);
  }

  //Returns password for display
  return password;
}