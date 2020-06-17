var reverseWords = function(s) {
  let trimmed = s.trim(); // removed front and back 

  let splitBySpace = s.split(' ');
  let nwReversedStr = ''
  for (let i = splitBySpace.length - 1; i >= 0; i--){
    if (splitBySpace[i].length > 0){
      nwReversedStr += splitBySpace[i] + ' ';
    }
  }
let trimAgain = nwReversedStr.trim();

return trimAgain;
};

const wrd = '   petter   pepper pecked a bunch of pickled peppers    '

reverseWords(wrd);

// solve as a human
// look at the words. start at the end of the sentence, take each word one by one and bring it to the front of the new sentence. 

// do this until you have gone through the entire sentence 

// solve as a dev 
// remove excess space in between words 
// take the last word and place it in front 
// continue to move words until you have rn through the sentence 

// Given an input string, reverse the string word by word.



// Example 1:

// Input: "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: "  hello world!  "
// Output: "world! hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.