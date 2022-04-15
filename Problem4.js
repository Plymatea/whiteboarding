// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

function checkDupes (s) {
  let flag = true;
  for (let i=0; i<s.length; i++) {
    for (let j=i+1; j<s.length; j++) {
      if (s[i] == s[j]) {
        return false
      } else {
        continue
      }
    }
  }
  return flag
}

let a = "hello"
let b ="copyright"

console.log(checkDupes(a))
console.log(checkDupes(b))

function noDupeSet (s) {
  return (s.length == new Set(s).size) 
}

console.log(noDupeSet(a))
console.log(noDupeSet(b))