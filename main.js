function steamrollArray(arr) {
  let flattened = []; //Array to hold flattened values
  function nestedArr(item) {
    for (let i = 0; i < item.length; i++) {
      if (Array.isArray(item[i])) {
        //check if elements is an array
        nestedArr(item[i]); //use recursion to get elements at any nested depth
      } else {
        flattened.push(item[i]);
      } //add non-arrays to flattened
    }
    return flattened; //flattened array output
  }
  return nestedArr(arr); //call function on arr argument
}

console.log(steamrollArray([1, [], [3, [[4]]]]));
