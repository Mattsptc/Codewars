function cockroachSpeed(s) {
  if (s == 0) {
    return 0;
  } else {
    let cmPsecond = Math.floor(s * 27.7778);
    return cmPsecond;
  }
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));
