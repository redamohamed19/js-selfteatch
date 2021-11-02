function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  var a=Math.PI*2;
  var newArr=[];
  for(let item of arr){
    var b=Math.pow(earthRadius+item.avgAlt,3)
    var c=Math.sqrt(b/GM)
    var d=Math.round(a*c)
    console.log(d)
    newArr.push({"name":item.name,"orbitalPeriod":d})
  }
  return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])