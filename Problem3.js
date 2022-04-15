// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"


function compress(s) {
  let dupeCounter = 1
  let shortString = ""
  for (let i=0; i<s.length; i++) {
    if (s[i] === s[i+1]) {
      dupeCounter++
    } else {
      if (dupeCounter == 1) {
        shortString += s[i]
      } else {
        shortString += (dupeCounter + s[i])
        dupeCounter = 1
      }
    }
  }
  return shortString;
}

let s = "aaabccdddda"
console.log(compress(s))

console.log(...s)