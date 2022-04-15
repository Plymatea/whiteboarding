// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function replaceSpaces (s) {
  let url = "";
  for (let i=0; i<s.length; i++) {
    if (s[i] === " ") {
      url += "%20";
    } else {
      url += s[i];
    };
  };
  return url;
}

let s = "Jasmine Ann Jones"
console.log(replaceSpaces(s));


function recursive(s) {
  let url = "";
  console.log(s)
  if (s[0] === " ") {
    url += "%20"
  } else {
    url += s[0] 
  }
  if (s.length != 1) {
  url += recursive(s.slice(1))
  }
  return url
}

let recurse = recursive(s)
console.log(recurse)
