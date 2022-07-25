import fs from 'fs'
import zlib from 'zlib'

const source = fs.readFileSync("standard-library/zlib/zlib-compress.mjs.txt")
console.info(source.toString())



const result = zlib.unzipSync(source)
console.info(result.toString())

// fs.writeFileSync('standard-library/zlib-decompress.mjs.txt', result)