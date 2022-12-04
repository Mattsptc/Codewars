/* 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
*/

const nbDig = (n, d) => {
    let result = ''
    for (let index = 0; index <= n; index++) {
        result += index**2
    } return result.split(d).length  -1
}
console.log(nbDig(25, 1))