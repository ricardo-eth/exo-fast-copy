const asyncTask = require('./asyncTask')

const main = async () => {
  try {
    let data = await Promise.all([
      asyncTask(1, 10, true),
      asyncTask(2, 5, true),
      asyncTask(3, 0.5, true),
      asyncTask(4, 1, true),
    ])
    console.log(`results: ${data}`) // data is an array
  } catch (e) {
    console.error(e.message)
  }
}

main()