import fs from 'fs'
import zlib from 'zlib'

const source = fs.readFileSync("standard-library/zlib/zlib-compress.mjs")
const result = zlib.gzipSync(source)


fs.writeFileSync('standard-library/zlib/zlib-compress.mjs.txt', result)