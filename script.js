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
  // Add the selected character types to the array
if (includeLowercase) {
  characterTypes.push("abcdefghijklmnopqrstuvwxyz");
}
if (includeUppercase) {
  characterTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
if (includeNumeric) {
  characterTypes.push("0123456789");
}
if (includeSpecial) {
  characterTypes.push("!@#$%^&*()_-=+;:,.?");
}

// Return the password criteria
return {
  length: length,
  characterTypes: characterTypes
  };
}
// Function to generate a random password based on the given criteria
function generatePassword(criteria) {
  // Create an empty password
  var password = "";

  // Loop through the desired password length
  for (var i = 0; i < criteria.length; i++) {
    // Get a random character from the selected character types
    var characterType = criteria.characterTypes[Math.floor(Math.random() * criteria.characterTypes.length)];
    var character = characterType[Math.floor(Math.random() * characterType.length)];

    // Add the character to the password
    password += character;
  }

  // Return the password
  return password;
}

// Get the password criteria from the user
var criteria = getPasswordCriteria();

// If the criteria is valid, generate a password
if (criteria) {
  var password = generatePassword(criteria);

  // Display the password to the user
  alert("Your password is: " + password);
}









