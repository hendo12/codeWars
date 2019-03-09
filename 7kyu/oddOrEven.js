oddOrEven = (array) => {
  getSum = (total, num) => total + num;
  let arraySum = array.reduce(getSum, 0); 
  if (arraySum % 2 === 0) {
    return 'even'
  } 
  return 'odd'
}

/* Alternative Solutions: 

1. 

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}

2. 

const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";
