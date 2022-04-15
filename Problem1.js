// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

function replaceSpaces (s) {
  let url = "";
  for (i=0; i<s.length; i++) {
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
  if (s.length == 1) {
    if (s === " ") {
      return "%20"
    } else {
      return s 
    }
  } else {
  url += recursive(s.slice(1))
  }
}

let recurse = recursive(s)
console.log(recurse)
