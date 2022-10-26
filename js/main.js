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

var countAndSay = function (n) {
  var str = '1';
  var tmp = '';
  var last = '';
  var count = 0;
  var len = 0;

  for (var i = 1; i < n; i++) {
    tmp = '';
    last = '';
    count = 0;
    len = str.length;

    for (var j = 0; j < len; j++) {
      if (last === '') {
        last = str[j];
        count = 1;
        continue;
      }
      if (str[j] === last) {
        count += 1;
      } else {
        tmp += '' + count + last;
        last = str[j];
        count = 1;
      }
    }

    if (last) {
      tmp += '' + count + last;
    }

    str = tmp;
  }

  return str;
};

// Given a positive integer, check whether it has alternating bits: namely,
// if two adjacent bits will always have different values.

var hasAlternatingBits = function (n) {
  let str = (n).toString(2);
  let curr = str[0]

  for (let i = 1; i < str.length; i++) {
    if (curr === str[i]) {
      return false;
    }
    curr = str[i]
  }
  return true

};


// Given a roman numeral, convert it to an integer.
var romanToInt = function (s) {
  let result = 0,
    curr, prev = 0;

  for (const char of s.split("").reverse()) {
    curr = values.get(char);
    if (curr >= prev) {
      result += curr;
    } else {
      result -= curr;
    }
    prev = curr;
  }
  return result;

};
