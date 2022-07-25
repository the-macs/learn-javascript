const buffer = Buffer.from("Esa")

console.table(buffer)
console.info(buffer.toString())

buffer.reverse()
console.info(buffer.toString())