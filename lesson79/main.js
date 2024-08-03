const age = 29

if (age >= 18) {
	console.log('Вы совершеннолетний')
} else {
	console.log('Вам нет 18')
}

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам нет 18')

const browser = 'Chrome'

if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera') {
	console.log('Okay we support these browsers too')
} else if (browser == 'Edge') {
	console.log('You ve got the Edge!')
} else {
	console.log('We hope that this page looks ok!')
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
	case 0:
		console.log('Вы ввели число 0')
		break;
	case 1:
		console.log('Вы ввели число 1')
		break;
	case 2 :
	case 3 :
		console.log('Вы ввели число 2, а может и 3')
		break;
	default:
		console.log('Вы ввели неверное число')
		break;
}