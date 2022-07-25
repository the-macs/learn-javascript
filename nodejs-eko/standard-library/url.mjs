import { URL } from 'url'

const ehd = new URL("https://www.esahadistra.com/belajar?kelas=nodejs")

ehd.host = "www.hadistra.com"
ehd.searchParams.append('status', 'premium')

console.info(ehd.toString())
console.info(ehd.href)
console.info(ehd.protocol)
console.info(ehd.host)
console.info(ehd.pathname)
console.info(ehd.searchParams)
