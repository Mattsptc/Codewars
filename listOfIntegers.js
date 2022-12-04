

let numeros = [1, 'uhu', 3, 4, 5, 6, 7, 8, 9, 10, 'str', 'jrv'];
function filter_list (l) {
    if (typeof l == 'number') 
    return l;
}
var somenteNumeros = numeros.filter(filter_list);
console.log(filter_list([1, 'uhu', 3, 4, 5, 6, 7, 8, 9, 10, 'str', 'jrv']))
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((elm) => typeof elm === "number");
}