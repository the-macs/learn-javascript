import util from 'util'

const firstName = "Esa"
const lastName = "Hadistra"


console.info(`Hello ${firstName} ${lastName}`)
console.info(util.format('Hello %s %s', firstName, lastName))

const person = {
    firstName: "Esa",
    lastName: "Hadistra"
}

console.info(`Person : ${JSON.stringify(person)}`)
console.info(util.format('Person : %j', person))