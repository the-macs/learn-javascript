function samplePromise() {
    return Promise.resolve("Esa")
}


// async function run() {
//     const name = await samplePromise()
//     console.info(name)
// }

// run()


const name = await samplePromise()
console.info(name)