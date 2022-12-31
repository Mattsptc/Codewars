function hero(bullets, dragons){
    let result = bullets / 2
    return result >= dragons ? true : false
    } 

    
    console.log(hero(4, 5))//, false);
    console.log(hero(100, 40))//, true);
    console.log(hero(1500, 751))//, false);