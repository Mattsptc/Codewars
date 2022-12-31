function solve(s){
    var numUpper = (s.match(/[A-Z]/g) || []).length;
    var total = s.length
    return numUpper / total > 0.5 ? s.toUpperCase() : s.toLowerCase()
}


console.log(solve("code")) //,"code");
console.log(solve("CODe")) //,"CODE");
console.log(solve("COde")) //,"code");