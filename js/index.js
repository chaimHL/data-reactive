import observe from './observe.js'
import Watcher from './Watcher.js'

let obj = {
	a: {
		m: {
			n: 1
		}
	},
	b: {
		x: 2
	}
}
observe(obj)
new Watcher(obj, 'a.m.n', (val, oldValue) => {
	console.log('watcher', val, oldValue)
})
new Watcher(obj, 'b.x', (val, oldValue) => {
	console.log('watcher', val, oldValue)
})
obj.a.m.n = 2
obj.b.x = 3





