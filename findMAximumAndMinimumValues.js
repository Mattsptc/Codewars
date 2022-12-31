var min = function(list){
    list.sort((a, b) => {return a - b})
    return list[0];
}

/* var max = function(list){
    list.sort((a, b) => {return a - b})
    let lastElement = list[list.length - 1]
    return lastElement
}  */
// outra solucao para o MAX
var max = function(list){
    list.sort((a, b) => {return b - a})
    return list[0];
}
console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))