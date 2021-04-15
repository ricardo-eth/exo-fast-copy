const asyncTask = require('./asyncTask')

const main = async () => {
  let promises = []
  for (let i = 1; i < 10; ++i) {
    promises.push(asyncTask(i, i, true))
  }
  try {
    for await (const result of promises) {
      console.log(`got result: ${result}`)
    }
  } catch (e) {
    console.error(e.message)
  }
}

main()