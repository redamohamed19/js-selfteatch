var empty = videoData1.map(function(x) {
  var temp = x.rooms.reduce(function(pre, after) {
    console.log(after);
    Object.keys(after).forEach(function(prop) {
      if (after[prop] == false) {
        pre.push(prop);
      }
    });

    return pre;
  }, []);
  return temp;
});
const filteredArray = empty.filter(value => array2.includes(value));
