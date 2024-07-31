//первое задание

"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {

		return arr;
	} else if (discriminant === 0) {

		const root = -b / (2 * a);
		arr.push(root);
	} else {

		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}


const roots = solveEquation(1, -3, 2);
console.log(roots);


//второе задание 


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = (percent / 100) / 12;
	let principal = amount - contribution;
	if (principal <= 0) {
		return 0;
	}
	let monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	return Math.round(totalAmount * 100) / 100;
}


console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));