factorial = (n) => {
  let answer = 1; 
  
  if(n > 0 && n <= 12) {
    for(let i = n; i > 0; i--) {
      answer = answer * i;
    }
    return answer;
  } else if (n == 0) {
    return answer;
  } else {
    throw RangeError();
  }
}

/* Alternative solution

function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
*/