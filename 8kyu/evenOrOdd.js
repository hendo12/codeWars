const even_or_odd = (int) => {
  if(int % 2 == 0){
    return 'Even'
  }
  return 'Odd'
  
}

/* Alternative Solutions:

1. 

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

2. 

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}

*/