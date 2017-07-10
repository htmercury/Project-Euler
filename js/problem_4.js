// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome(int) {
    // input: some integer specifying number digits of desired palindrome
    // output: largest palindrome wit those number of digits
    acc = [];
    var max = Math.pow(10, int)-1; // max digit integer, e.g. for 3 it is 999
    var min = Math.pow(10, int - 1); // min digit integer, e.g. for 3 it is 100
    for (ii = max; ii > min; ii--) {
        for (jj = max; jj > min; jj--) {
            if (isPalindrome2(ii*jj)) {
                acc.push(ii*jj); // Add palindrome value to array
            }
        }
    }
   return Math.max.apply(Math, acc); // Finds the max palindrome in the assembled array
}

console.log(largestPalindrome(3));







// helper function: determine if input is a palindrome
// A palindromic number reads the same both ways. 
function isPalindrome(int) {
    // input: some integer
    // output: boolean specifying whether the integer is a palindrome
    var numstring = int.toString();
    var startIndex = 0
    var endIndex = numstring.length - 1;
    var result = true;
    while (startIndex < endIndex) { //method 1 testing palindrome by indexing
        if (numstring[startIndex] !== numstring[endIndex]) {
            result =false;
        }
        startIndex++
        endIndex--
    }
    return result
}

function isPalindrome2(int) {
    // input: some integer
    // output: boolean specifying whether the integer is a palindrome
    return int.toString() === int.toString().split("").reverse().join(""); //method 2 compares backward string of int
}