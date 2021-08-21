/**
 * @param {string} s
 * @return {number}
 */
 const checkString = (s, previousLongest) => {
  let longest = [], temp = [], prev = '', long = previousLongest;
  console.log('STARTING', previousLongest);
  if (previousLongest > s.length) return previousLongest;
  else {
  for (let i = 0; i < s.length; i++) {
      if (!temp.length && prev.length) temp.push(prev);
      
      if (!temp.length) temp.push(s[i])
      else if (prev.length && !temp.includes(prev)) temp.push(prev);
      else if (!temp.includes(s[i])) temp.push(s[i]);
      else {
          console.log('found duplicate', temp, longest)
          if (temp.length > longest.length) longest = temp;
          temp = [];
          prev = s[i]
          console.log(temp)
      }
      if (i === s.length -1) {
          console.log('prev, temp, long', prev, temp, previousLongest)
          if (temp.length > longest.length) longest = temp;
      }
      console.log('LONGEST',longest);
      if (previousLongest < longest.length) previousLongest = longest.length;
      if (previousLongest < temp.length) previousLongest = temp.length;
      console.log('LONG', previousLongest)
  }
      console.log('s', s)
  if (s.substring(1).length) {
      console.log('entering with', s.substring(1).length, previousLongest)
      checkString(s.substring(1), previousLongest);
  }
  console.log('abs lon', previousLongest);
  return previousLongest;
}
  
}

const lengthOfLongestSubstring = (s) => {
  return checkString(s, 0);
};

// test cases
// "dvdf"
// "aaab"
// "taslkjfiennddasaaadsfkelke"