function smallestCommons(arr) {
  var min, max;
  if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    max = arr[1];
    min = arr[0];
  }
  var sub = max - min + 1;
  var duplicate_array = [];
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = max; i < 100000000; i++) {
    var check = 0;
    for (let j = min; j <= max; j++) {
      if (i % j == 0) {
        check++;
      }
    }
    if (check == sub) {
      console.log(i);
      return i;
      break;
    }
  }
}

smallestCommons([5, 1]);
