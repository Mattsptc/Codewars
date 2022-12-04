/* function solution(str, ending) {
    if(ending.length == 0) return true
    return str.substr(-(ending.length)) == ending
}

console.log(solution("josepio", "pio"));
 */
// outra solucao
function solution(str, ending) {
  if (str.endsWith(ending)) return true;
  else return false;
}

console.log(solution("califoas", "as"));
