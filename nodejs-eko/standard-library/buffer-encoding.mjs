const buffer = Buffer.from("Esa Hadistra", "utf8")

console.table(buffer)
console.info(buffer.toString("hex"))
console.info(buffer.toString("base64url"))