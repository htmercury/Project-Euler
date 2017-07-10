// What is the largest prime factor of the number 600851475143 ?
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
var primedb = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]; // store prime values up to 100
function findPrimeFactor(int) {
    var factor = 0;
    var ii = 0;
    var acc = int;
    while (factor === 0) {
        if (acc%primedb[ii] === 0) {
            acc /= primedb[ii];
        }
        else {
            ii++
        }
        if (acc === primedb[ii]) {
            factor = acc;
        }
    }
    return factor;
}
console.log(findPrimeFactor(13195));
// function above only works well for numbers less than 6 digits

// To accomodate for possible prime factors pass 99, new function will just increment by a set amount for all possibilites
function findPrimeFactor2(int) {
    var factor = 2;
    var acc = int;
    while (factor !== acc){
        if (acc%factor === 0) {
            acc /= factor;
        }
        else {
            factor++
        }
    }
    return factor
}
console.log(findPrimeFactor2(600851475143));