var capitals = function (word) {
    let capitals = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()){
            capitals.push(i)
        }
    } return capitals
};


console.log(capitals('CodEWaRs'))//, [0,3,4,6] );
