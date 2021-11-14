function checkCashRegister(price, cash, cid) {
  let arraychange = [];
  let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = cash - price;
  let restchange = change;
  for (let i = cid.length - 1; i >= 0; i--) {
    if (restchange >= cid[i][1]) {
      restchange = restchange - cid[i][1];
      restchange = restchange.toFixed(2);
      arraychange.unshift([cid[i][0], cid[i][1]]);
      cid[i][1] = 0;
    } else if (restchange != 0) {
      var k = restchange % currency[i];
      var qty = (restchange - k) / currency[i];
      cid[i][1] -= qty * currency[i];
      restchange -= qty * currency[i];
      restchange = restchange.toFixed(2);
      if (qty * currency[i] > 0) {
        arraychange.unshift([cid[i][0], qty * currency[i]]);
      }
    }
  }
  console.log(cid);

  if (restchange > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    var isempty = cid.reduce((a, b) => {
      if (b[1] > 0) {
        return true;
      }
    }, false);
    if (isempty) {
      return { status: 'OPEN', change: arraychange };
    } else {
      return { status: 'CLOSED', change: arraychange };
    }
  }
}
checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]);
