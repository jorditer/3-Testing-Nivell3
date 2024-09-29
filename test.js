const students = [
	{
		age: 26,
		name: "whatevs"
	},
	{
		age: 27,
		name: "Jordi"
	}
]

let arr = students.map(student => ({
	...student,
	studies: "Programming"
})
)

console.log(arr);