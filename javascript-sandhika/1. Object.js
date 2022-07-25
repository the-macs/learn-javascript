// 1. Object Literal
// let mahasiswa = {
//     nama: "Esa Hadistra",
//     energi: 100,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// 2. Function Declaration
// Cara 1
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2
//         console.log(`Halo ${this.nama}, selamat tidur!`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);

//     mahasiswa.nama = nama
//     mahasiswa.energi = energi

//     return mahasiswa
// }

// let esa = Mahasiswa('Esa Hadistra', 100);
// let rizki = Mahasiswa('Rizki Eka Wahyuni', 100);


// Cara 2
// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi
//     return `Halo ${this.nama}, selamat makan!`
// }
// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam
//     return `Halo ${this.nama}, selamat bermain!`
// }
// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2
//     return `Halo ${this.nama}, selamat tidur!`
// }

// let esa = new Mahasiswa('Esa Hadistra', 100)


// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
//     this.main = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain!`)
//     }
// }

// let esa = new Mahasiswa('Esa Hadistra', 100)

// 4. Class function
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama
        this.energi = energi
    }
    makan = function (porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!`
    }
    main = function (jam) {
        this.energi -= jam
        return `Halo ${this.nama}, selamat bermain!`
    }
    tidur = function (jam) {
        this.energi += jam * 2
        return `Halo ${this.nama}, selamat tidur!`
    }
}

let esa = new Mahasiswa('Esa Hadistra', 100)
let rizki = new Mahasiswa('Rizki Eka Wahyuni', 100)