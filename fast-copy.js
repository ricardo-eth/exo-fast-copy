const fs = require('fs-extra');



const myCopyFast = async (sourceFile) => {

let copyFile = (sourceFile + '_copied')
  try {
    const folder = await fs.copy(sourceFile, copyFile);
    
    console.log('Files copied successfully!')
  } catch (e) {
    console.log(e.message)
  }
}
myCopyFast(process.argv[2])
