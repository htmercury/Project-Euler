/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000. */

// Brute force way
function mult_35(int) {
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
mult_35(1000);


