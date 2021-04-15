const asyncTask = require('./asyncTask')

console.log('START')
for (let i = 1; i <= 10; ++i) {
  asyncTask(i, i, true)
}
console.log('END')


// Ce n'est pas ce qu'on veut!!
const main = async () => {
  try {
    for (let i = 1; i <= 10; ++i) {
      let res = await asyncTask(i, i, true) // Bloquant
      console.log(`got result: ${res}`)
    }
  } catch (e) {
    console.error(e.message)
  }
}
main()