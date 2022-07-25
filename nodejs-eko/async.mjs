function samplePromise() {
    return Promise.resolve("Esa")
}


const name = await samplePromise()
console.info(name)