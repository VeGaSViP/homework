function helloName(name) {
	return `Hello ${name}`
}

console.log(helloName('Alex'))

console.log('-------------------------------------------------------')

const numbers = [0, 52, 32, 1, 5, 9, 4, 6, 7, 9, 8, 54, 13, 16, 5]

function arrayIterator(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] > 10) {
			console.log(array[i])
		}
	}
}

arrayIterator(numbers)

console.log('-------------------------------------------------------')

function calc(number1, number2, operator) {
	let result
	switch (operator) {
		case 'plus':
			result = number1 + number2
			break;

		case 'minus':
			result = number1 - number2
			break;

		case 'multiplication':
			result = number1 * number2
			break;

		case 'division':
			result = number1 / number2
			break;
	}
	return console.log(result)
}

calc(10, 3, 'plus')