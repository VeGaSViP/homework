const user = {
	name: 'Василий',
	age: 29,
	sayHello(name){
		console.log(`Hello ${name}`)
	}
}

console.log(user)
user.sayHello('Alex')

console.log('----------------------------------------------------')

const users = [
	{
		name: 'alex',
		age:23,
		isAdmin: false
	},
	{
		name: 'john',
		age:30,
		isAdmin: true
	},
	{
		name: 'ivan',
		age:25,
		isAdmin: false
	},
	{
		name: 'vladimir',
		age:28,
		isAdmin: false
	},
]

let simpleUsersCount = 0

for (let i = 0; i < users.length; i++) {
	if (users[i].isAdmin == false) {
		simpleUsersCount++
	}
}

console.log(`Количество простых пользователей ${simpleUsersCount}]`)