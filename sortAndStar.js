function twoSort(s) {
    let sorted = s.sort()
    return sorted[0].split('').join('***')
}


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //, 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) //, 'a***r***e');
console.log(twoSort(["BTC","Bitcoin","Bitcoin","Bitcoin","Classic","Dash","Lisk","LiteCoin","MadeSafeCoin","Monero","Monero","ProofOfStake","ProofOfStake","Ripple","Ripple","Steem"]))