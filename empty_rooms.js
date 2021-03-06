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

function checkCashRegister(price, cash, cid) {
  let arraychange = [];
  let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = cash - price + 0.001;
  let restchange = change;
  for (let i = cid.length - 1; i >= 0; i--) {
    if (restchange >= cid[i][1]) {
      restchange = restchange - cid[i][1];
      arraychange.unshift([cid[i][0], cid[i][1]]);
      cid[i][1] = 0;
    } else if (restchange != 0) {
      var k = restchange % currency[i];
      var qty = (restchange - k) / currency[i];
      cid[i][1] -= qty * currency[i];
      restchange -= qty * currency[i];
      if (qty * currency[i] > 0) {
        arraychange.unshift([cid[i][0], qty * currency[i]]);
      }
    }
  }

  if (restchange > 0.01) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    var isempty = cid.reduce((a, b) => {
      if (b[1] > 0) {
        return false;
      }
    }, true);
    if (isempty) {
      return { status: 'CLOSED', change: arraychange };
    } else {
      return { status: 'OPEN', change: arraychange };
    }
  }
}

checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
]);
