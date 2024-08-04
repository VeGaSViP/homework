const numbers = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		console.log(numbers[i])
	}
}

console.log('--------------------------------------------------------')

const rainbowColors = ['red', 'orange','yellow', 'green', 'blue', 'indigo', 'violet']

for (let q = rainbowColors.length - 1; q >= 0; q--) {
	console.log(rainbowColors[q])
}