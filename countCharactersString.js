// create string with letters ''
// create object
// count strings
// if happens 2 times implement a += count
// return the count

function count (string) {  
    const histogram = {}
    for (let i = 0; i < string.length; i++) {
       const ch = string[i]
       if (!histogram[ch]) {
        histogram[ch] = 0
       }
       histogram [ch]++
 
    } return histogram
}


  console.log(count("aba")),// { a: 2, b: 1 }); 
  console.log(count("")) //, {});   