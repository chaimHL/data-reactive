import observe from './observe.js'
export default function defineReactive(data, key, value) {
	// 如果只传了两个参数，则让 value 直接等于 data[key]
	if (arguments.length === 2) value = data[key]
	
	// 注意这里不是传 key 而是传 value，因为 key 只是一个字符串，value 才是 key 指向的对象
	// let childOb = observe(value) 暂时不知道 childOb 有何作用
	observe(value)
	
	// 让 data 的 key 属性变为响应式属性
	Object.defineProperty(data, key, {
    enumerable: true, // 可被枚举(for...in 或 Object.keys 方法)
    configurable: true, // 可被配置，比如删除
    get() {
      console.log('查看了' + key + '属性')
      return value
    },
    set(newValue) {
      console.log('修改了' + key + '属性')
      value = newValue
			// childOb = observe(newValue)
			// 修改的属性也需要被观察，如果是对象需要被侦测
			observe(newValue)
    }
  })
}
