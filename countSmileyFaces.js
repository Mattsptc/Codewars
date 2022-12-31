function countSmileys(arr) {
 return arr.filter(v=>v.match(/(:|;)(-|~)?(\)|(D))/)).length
}

console.log(countSmileys([':D',':~)',';~D',':)'])) //        ), 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     ))//, 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //, 1);