// Assignment code here

function generatePassword () {


  //First prompt, Length
var length = parseInt(window.prompt("Please choose password length. Must be between 8 and 128 characters long."));
console.log(length)
  if (length < 8 || length > 128) {
    alert("Invalid answer. Please select a valid password length.") }


//Second prompt, Numeric + else - if condition false

else {
var numeric = confirm("Would you like to include numeric characters? Select OK for 'Yes' and Cancel for 'No'");

var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

console.log(numeric);


//Third Uppercase
var uppercase = confirm("Would you like to include uppercase characters? Select OK for 'Yes' and Cancel for 'No'");

var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

console.log(uppercase);


//Fourth lowercase
var lowercase = confirm("Would you like to include lowercase characters? Select OK for 'Yes' and Cancel for 'No'");

var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(lowercase);


//Fifth special
var special = confirm("Would you like to include special characters? Select OK for 'Yes' and Cancel for 'No'");

var specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', ',', '.', ';', ':', '=', '{', '}', '?',
'+', '>', '<', '/', '"', '_', '[', ']', '|', '~', '`', '"',];

console.log(special);

};

// Merge arrays, concat()

var passwordCharArray = []
var passwordArray = []

if(numeric) {
  passwordCharArray = passwordCharArray.concat(numericArray);
}
if(uppercase) {
  passwordCharArray = passwordCharArray.concat(uppercaseArray);
}
if(lowercase) {
  passwordCharArray = passwordCharArray.concat(lowercaseArray);
}
if(special) {
  passwordCharArray = passwordCharArray.concat(specialArray);
}

//for loop Length 
var password = ""
for(var i = 0; i < length; i++) {
  password += (passwordCharArray[Math.floor(Math.random() * passwordCharArray.length)]);
  console.log(passwordArray);
};

return password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
