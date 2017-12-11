function movingMedian(arr) {
  let windowSize = arr.shift();
  let array = [];
  let result = [];

  for (i=0; i < arr.length; i++) {
    array.push(arr[i]);

    let currentWindow = array.slice(0, arr.length);

    if (array.length >= windowSize) { array.shift(); }

    result.push(currentWindow);
  }

  return result.map(function(elem){
    if (elem.length !== windowSize) {
      return elem.reduce((a, b) => a + b, 0) / elem.length;
    } else {
      elem.sort((a, b) => a - b);

      let lowMiddle = Math.floor((elem.length - 1) / 2);
      let highMiddle = Math.ceil((elem.length - 1) / 2);
      let median = (elem[lowMiddle] + elem[highMiddle]) / 2;

      return median;
    }
  }).join(",");
}
