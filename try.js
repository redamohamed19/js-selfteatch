var obj = {};
obj.each = function(list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list, i, list[i]);
    }
  } else {
    for (let key in list) {
      callback(list, key, list[key]);
    }
  }
};
var a = [1, 2, 3];
var b = { 0: 1, 1: 20, 2: 5 };
obj.each(a, function(list, i, num) {
  if (num > 10) {
    console.log(num, 'at indice', i, 'is grater then 10');
  } else {
    console.log(num, 'at indice', i, 'is lower then 10');
  }
});
