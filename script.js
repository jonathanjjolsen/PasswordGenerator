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
let password = "";
let lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
let upperCaseSet = lowerCaseSet.toUpperCase();
let numberSet = '0123456789';
let specialSet = '?!@#$%&*';

function generatePassword(){
  console.log("Button Clicked"); //For dev visual

  // I am presented with a series of prompts for password criteria
  // THEN I select which criteria to include in the password
  alert("A new password will be generated based on your answers to the following questions.");
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = prompt("Please enter a number value between 8-128 for the length of your password.");{
    while (passwordLength > 128 || passwordLength < 4){
      passwordLength = prompt("Please enter a valid number between 8-128.");
    }
    console.log(passwordLength);
  }
  
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var upperCase = confirm("Click 'Okay' to include uppercase letters.")
    console.log(upperCase); //For dev visual
    //If else statement to determine inclusion of uppercase


  var lowerCase = confirm("Click 'Okay' to include lowercase letters.")
    console.log(lowerCase); //For dev visual
  //If else statement to determine inclusion of lowercase
  
  var numbers = confirm("Click 'Okay' to include numbers.")
    console.log(numbers); //For dev visual
  //If else statement to determine inclusion of numbers
  
  var specialChars = confirm("Click 'Okay' to include special characters.");
    console.log(specialChars); //For dev visual
  //If else statement to determine inclusion of special chars




  
  // THEN my input should be validated and at least one character type should be selected
  // If statements to verify the user's input. If they have chosen to use one of the selected types, that respective character set will be added to the array pool.
    

    let passSet = [];

    if(upperCase) {
      passSet += upperCaseSet;
    }
    if(lowerCase) {
      passSet += lowerCaseSet;
    }

    if(numbers){
      passSet += numberSet;
    }

    if(specialChars){
      passSet += specialSet;
    }
     
    let chosenChars = [];

    
    while (chosenChars.length < passwordLength){
      const character = passSet[Math.floor(Math.random() * passSet.length)];

      chosenChars.push(character);
    }
    console.log(chosenChars);
    let password = chosenChars.join("");

  // THEN the password is either displayed in an alert or written to the page//
  return password;
}