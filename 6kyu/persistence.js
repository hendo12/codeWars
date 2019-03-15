persistence = (num) => {
	let string = num.toString();
	let digits = string.split('');
	let index = 1;
	let counter = 0;
	let newDigits = [];
	let multiplyDigits = digits.reduce((a,b)=>a*b)

	if(digits.length < 2){
			return 0;
	}
	else {

		while (multiplyDigits >= 10){
			newDigits = multiplyDigits.toString().split('');
			multiplyDigits = newDigits.reduce( (a, b) => a * b);
			index++;
		}
		return index;
	}