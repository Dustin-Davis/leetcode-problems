// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.
var checkIfPangram = function (sentence) {
  let regex = /([a-z])(?!.*\1)/gi;
  return (sentence.match(regex)).length === 26;
};

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
  const newarr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let l = i + 1; l < nums.length; l++) {
      if (nums[i] + nums[l] === target) {
        return [i, l]
      }
    }
  }
}


// The count - and - say sequence is a sequence of
// digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n - 1),
// which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings
// such that each substring contains exactly one unique digit.Then for each substring, say
// the number of digits, then say the digit.Finally, concatenate every said digit.
