const fsPromises = require('fs/promises')



const myCopyFast = async () => {

let sourceFile = process.argv[2]
console.log(sourceFile)
let copyFile = (sourceFile + '_copied')
  try {
    const files = await fsPromises.readdir(sourceFile);
    const folder = await fsPromises.mkdir(copyFile);
    const copy = await fsPromises.copyDir(sourceFile, copyFile)
      
    
  } catch (e) {
    console.log(e.message)
  }
}
myCopyFast()
