function makeNegative(num) {
  if(num > 0) {
    let result = num - (num * 2);
    return result;
  }
  return num;
}

/* Alternative solutions:

1. 

function makeNegative(num) {
  return -Math.abs(num);
}

2. 

function makeNegative(num) {
  return num < 0 ? num : -num;
}