exports.capitalize = function(str) {// Function to capitalize string
    return str.toUpperCase();// Convert string to uppercase
};

exports.reverse = function(str) {// Function to reverse string
   
    return str.split('').reverse().join(''); // Split string into characters, reverse them and join again
};

exports.countVowels = function(str) {// Function to count vowels
    let count = 0; // variable to store vowel count
    const vowels = "aeiouAEIOU"; // all vowels

     for (let char of str) {// Loop through each character
        
        if (vowels.includes(char)) {// Check if character is vowel
            count++; // increase count
        }
    }
    return count; // return total vowel count
};
