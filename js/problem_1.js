/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

// Brute force method
function mult_35a(int) {
    // input: integer specifying max threshhold
    // output: sum of all multiples of 3 or 5 below some integer
    var sum = 0;
    for (var ii = 3; ii < int; ii++) {
        if (ii%3 === 0) {
            sum += ii;
        } else if (ii%5 === 0) {
            sum += ii;
        }
    }
    return sum;
}
mult_35a(1000);

// Shortened brute force method (less loops)
function mult_35b(int) {
    // input: integer specifying max threshhold
    // output: sum of all multiples of 3 or 5 below some integer
    var sum = 0;
    for (var ii = 1; ii <= Math.floor(int/3); ii++) {
        if (ii*5%3 === 0) { //Avoids double count
            sum+= ii*3;
        }
        else if (ii*5 < int) {
            sum+= ii*5 + ii*3;
        }
        else {
            sum+= ii*3;
        }
    }
    return sum;
}
mult_35b(1000);