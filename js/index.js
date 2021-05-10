import observe from './observe.js'
let obj = {
	a: {
		m: {
			n: 1
		}
	},
	b: 2,
	c: [1, 2, { x: 3 }]
}
observe(obj)

obj.c.push({ y: 4})
console.log(obj)
obj.c[3].y = 5

