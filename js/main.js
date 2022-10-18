// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.
var checkIfPangram = function (sentence) {
  let regex = /([a-z])(?!.*\1)/gi;
  return (sentence.match(regex)).length === 26;
};
