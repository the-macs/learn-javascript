import { Console } from 'console'
import fs from 'fs'

const file = fs.createWriteStream("application.log")

const log = new Console({
    stdout: file,
    stderr: file
})

log.info("Hellow World !")
log.error("Hellow Error !")

const person = {
    firstName: ["Esa", "Rizki"],
    lastName: ["Hadistra", "Eka Wahyuni"]
}

log.table(person)