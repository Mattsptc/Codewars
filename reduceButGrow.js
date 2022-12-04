function grow(x){

const arrayreduced = x.reduce( (prevValue, elem) => 
 prevValue * elem, 1)
    return arrayreduced
}

console.log(grow([10, 9, 1]))