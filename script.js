// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//function to ask the user for password criteria..
function getPasswordCriteria() {
  // Get the password length from the user
  var length = parseInt(prompt("How long do you want your password to be? (8-128 characters)"));
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }
  // Get the desired character types from the user?
  var characterTypes = [];
  var includeLowercase = confirm("Do you want to include lowercase letters?");
  var includeUppercase = confirm("Do you want to include uppercase letters?");
  var includeNumeric = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  // validates the character type?
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type.");
    return null;
  }
}