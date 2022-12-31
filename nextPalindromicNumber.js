function nextPal(val) {
    for (let i = val + 1; true; i++) {
        if ([...String(i)].reverse().join() == [...String(i)]) {
            return Number(String(i))
        }
    }
}



    console.log(nextPal(11) ) //22
    console.log(nextPal(188)) //191)
    console.log(nextPal(191)) // 202)
    console.log(nextPal(2541)) // 2552)