function capitalize(s){
return [s.split('').map((v, i) => i%2==0 ? v.toUpperCase() : v.toLowerCase() ).join(''), 
s.split('').map((v, i) => i%2==0 ? v.toLowerCase() : v.toUpperCase() ).join('')]

}

console.log(capitalize("abcdef")) //,['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars")) //,['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra")) //,['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors")) //,['CoDeWaRrIoRs', 'cOdEwArRiOrS']);