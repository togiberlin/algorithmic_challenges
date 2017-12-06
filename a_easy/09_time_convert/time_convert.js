function timeConvert(num) {
  if (num >= 60) {
    return Math.floor((num / 60)).toString() + ":" + (num % 60).toString()
  } else {
    return "0:" + num;
  }
}
