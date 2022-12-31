const onlyOddDigPrimes = n => {
    const primes = getPrimes(n);
    return [primes.length, primes.pop(), nextPrime(n)];
  }
  
  const pureOdd = n => !/[02468]/.test(n);
  
  const nextPrime = n => {
    while(n++) if (isPrime(n) && pureOdd(n)) return n;
  }
  
  const getPrimes = n => {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i) && pureOdd(i)) primes.push(i);
    }
    return primes;
  }
  
  const isPrime = n => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n > 1;
  }

console.log(onlyOddDigPrimes(11))
console.log(onlyOddDigPrimes(18))
console.log(onlyOddDigPrimes(30))
console.log(onlyOddDigPrimes(60))
console.log(onlyOddDigPrimes(11))