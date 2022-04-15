// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

function noDupes (array) {
  let newArray = [];
  array.forEach(element => {
    if (!newArray.includes(element)) {
      newArray.push(element)
    }
  });
  return newArray
}

let  array = [7, 9, "hi", 12, 12, "hi", 7, 53, NaN, 7]
console.log(noDupes(array))

let unique = [...new Set(array)]
console.log(new Set(array))



let uniqueFilter = array.filter((element, index) => {
  return array.indexOf(element) === index;
});

console.log(uniqueFilter)

function recurseWrapper(array) {
  let newArr = [];
  function recurse (arr) {
    if (!newArr.includes(arr[0])) {
      newArr.push(arr[0]);
    };
    if (arr.length != 1) {
      return recurse(arr.slice(1));
    };
  };
  recurse(array);
  return newArr
};


console.log(recurseWrapper(array))