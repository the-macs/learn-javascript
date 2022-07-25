import timers from 'timers/promises'

// timer settimeout
console.info(new Date())
const name = await timers.setTimeout(3000, "Esa")
console.info(new Date())
console.info(name)

// timer setinterval
for await (const startTime of timers.setInterval(1000)) {
    console.info(`Start time at ${new Date()}`)
}