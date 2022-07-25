// Function Expression

// const tampilNama = function (nama) {
//     return `Halo ${nama}`
// }


// Arrow Function 1
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`
// }

// Arrow Function 2
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`
// }

// Arrow Function 3
// const tampilNama = nama => `Halo ${nama}`

// Arrow Function 4
// const tampilNama = () => `Hello World !`

// Arrow Function 5
let mahasiswa = ['Esa Hadistra', 'Rizki Eka Wahyuni', 'Elsa Yorika Hadistya']

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }))
console.table(jumlahHuruf)

// Arrow Function 6
// Konsep this pada arrow function 
// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Esa Hadistra'
//     this.umur = 27
//     this.sayHello = function () {
//         console.log(`Halo saya ${this.nama}, umur saya ${this.umur}`)
//     }
// }

// let esa = new Mahasiswa()

// Arrow Function

const Mahasiswa = function () {
    this.nama = 'Esa Hadistra'
    this.umur = 27
    this.sayHello = function () {
        console.log(`Halo saya ${this.nama}, umur saya ${this.umur}`)
    }
}

let esa = new Mahasiswa()
