function isPrime(num) {
	if(num<2){
		return false
	}
	for(let n = num-1; n>1; n--){
		if(num%n===0){
			return false;
		}
	}
	return true
}

// function isPrime(num) {
//   let options = [];
//   let divisors = [];

  
//   for(let i = ; i <= num - 1; i++) {
//     options.push(i);
//   }
  
//   divisors.map( (divisor, num) => {
//     if( num % divisor != 0) {
//       return false;
//     } else {
//       return true;
//     }
//   })
// }

//https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript