import data from '../../../tsconfig.json'
import fs from "fs";
const writeFile = (content) => {
    try {
        const data = fs.writeFileSync('./tsconfig.json', content)
        //file written successfully
    } catch (err) {
        console.error(err)
    }
}

data.compilerOptions.strict = false

writeFile(JSON.stringify(data))