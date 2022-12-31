function warnTheSheep(queue) {
    let reversed = queue.reverse()
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[0] == "wolf") {
            return "Pls go away and stop eating my sheep"
        } else {
            return "Oi! Sheep number " + reversed.indexOf('wolf') + "! You are about to be eaten by a wolf!"
        }
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"])) // "Oi! Sheep number 2! You are about to be eaten by a wolf!")
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"])) 