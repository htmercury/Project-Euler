// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var fib= [];
fib[0] = 0
fib[1] = 1
fib[2] = 1
// General fib formula: fib(n) = fib(n-2) + fib(n-1)
function fibEven(int) {
    // input: some integer specifying max fib sequence
    // output: sum of all even-valued terms
    var sum = 0;
    var ii = 3;
    while (true) {
        fib[ii] = fib[ii-2] + fib[ii-1];
        if (fib[ii] > int) {
          break; // exit loop if we have reached the required max fib sequence
        }
        if (fib[ii]%2 === 0) {
            sum += fib[ii]; // Add to sum if recent fib is even
        }
        ii++
    }
    return sum
}

fibEven(4000000);