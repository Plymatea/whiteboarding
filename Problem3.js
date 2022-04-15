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

  
// function recurse (s) {
//   let newString = "";
//   if (s.length === 1) {
//     newString += s;
//   } else {
//     if (newString[newString.length - 1] == s[0]) {

//     }
//     newString += s[0] + recurse(s.slice(1));
//   };
//   return newString;
// };



// WIP to make it correct. 
function recurse (s) {
  let newString = "";
  let dupeCounter = 1;
  console.log("start" +dupeCounter)
  if (s.length == 1) {
    newString += s;
    dupeCounter = 1;
  } else {
    console.log(dupeCounter)
    if (s[0] == s[1]) {
      dupeCounter++
      recurse(s.slice(1))
    }
  }
  return newString
}

console.log(recurse(s))