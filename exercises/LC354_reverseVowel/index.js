var reverseVowels = function (s) {
    let vowels = "aeiouAEIOU";
    let vowelOrder=[];

    for(let i=0; i<s.length; i++){
        if(vowels.includes(s[i])){
            vowelOrder.push(s[i]);
        }
    }

    let reverseVowel = ""
    for(let j=0; j<s.length; j++){
        if(vowels.includes(s[j])){
            reverseVowel+=vowelOrder.pop();
        }
        else{
            reverseVowel+=s[j]
        }
    }

    return reverseVowel;
};
console.log('hhh', reverseVowels("leetcode"));
/*

Input: "leetcode"
Output: "leotcede"

saved = eeoe
eoee

*/