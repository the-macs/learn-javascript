import fs from "fs/promises";

const buffer = await fs.readFile("standard-library/file-system.mjs")

console.info(buffer.toString())

await fs.writeFile("temp.txt", buffer)