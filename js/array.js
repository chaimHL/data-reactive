import { def } from './utils.js'

// 获取 Array.prototype，因为数组的方法都定义在这上面
const arrayPrototype = Array.prototype

// 让 arrayMethods 的隐式原型(__proto__)指向 Array.prototype
const arrayMethods = Object.create(arrayPrototype) 

// 7 种可以改变数组自身的方法
const methodsCouldChange = [
	'push',
	'pop',
	'unshift',
	'shift',
	'splice',
	'reserve',
	'sort'
]

// 改写上面 7 种数组方法
methodsCouldChange.forEach(item => {
	// 保留数组方法的功能
	const original = arrayPrototype[item]
	def(arrayMethods, item, function() { // 注意这里不能用箭头函数，因为 arguments 和 this 指向的原因
		// 能 console 就说明能侦测到改变了
		console.log('数组被改变了')
		// 给改写的方法添加上功能
		original.apply(this, arguments)
	}, false)
})

export default arrayMethods