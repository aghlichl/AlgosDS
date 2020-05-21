// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

//sliding window approach
function lengthOfLongestSubstring(s) {
     if (s === "") {
       return 0;
     }
     let hashMap = {};
     let startWindow = 0;
     let endWindow = 0;
     let maxLength = 1;
     while (startWindow < s.length && endWindow < s.length) {
       if (s[endWindow] in hashMap && hashMap[s[endWindow]] >= startWindow) {
         startWindow = hashMap[s[endWindow]] + 1;
         hashMap[s[endWindow]] = endWindow;
         endWindow++;
       } else {
         hashMap[s[endWindow]] = endWindow;
         maxLength = Math.max(maxLength, endWindow - startWindow + 1);
         endWindow++;
       }
     }
     return maxLength;
}

module.exports = lengthOfLongestSubstring;
