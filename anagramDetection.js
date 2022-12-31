
var isAnagram = function(test, original) {
    return cleanString(test) === cleanString(original);
}
    function cleanString(str) {
        return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
    }   




    console.log(isAnagram("Buckethead", "DeathCubeK")) //, true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
    console.log(isAnagram("Twoo", "WooT")) //, true, 'The word "Twoo" is an anagram of "WooT"')

    console.log(isAnagram("dumble", "bumble")) //, false, 'Characters do not match for test case "dumble", "bumble"')
    console.log(isAnagram("ound", "round")) //, false, 'Missing characters for test case "ound", "round"')