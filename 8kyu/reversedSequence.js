const reverseSeq = n => {
  let result = [];

  for(let i = n; i > 0; i-- ){
    result.push(i);
  }
  return result;
};

/* Alternative Solutions:

1. 

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

2. 

const reverseSeq = length => Array.from({length}, () => length--)
