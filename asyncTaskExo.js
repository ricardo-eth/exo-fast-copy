const asyncTask = require('./asyncTask')

const main = async () => {
  try {
    let results = await Promise.all([
      asyncTask(1, 1, true),
      asyncTask(2, 5, true),
      asyncTask(3, 10, true),
    ])
    for(const result of results) {
      console.log(result)
    }
    let res4 = await asyncTask(4, 3, true)
    console.log(res4)
  } catch (e) {
    console.error(e.message)
  }
}

main()