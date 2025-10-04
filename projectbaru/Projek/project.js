/*
    Program Kalkulator Sederhana
    Req : 
        -Menggunakan Variable ES6
        -Menggunakan Arrow Function
        -Menggunakan Operator
    */

    // Fahry Akbar Ibnu Khusaini //
    // XI PPLG 3//
// variable es6
let a = 20;
let b = 10;

// arrow functionnya
let tambah  = (a, b) => a + b;
let kurang  = (a, b) => a - b;
let kali    = (a, b) => a * b;
let bagi    = (a, b) => a / b;
let modulus = (a, b) => a % b;

// manggil hasil
console.log("a =", a, "b =", b);
console.log("tambah(a, b) =", tambah(a, b));
console.log("kurang(a, b) =", kurang(a, b));
console.log("kali(a, b) =", kali(a, b));
console.log("bagi(a, b) =", bagi(a, b));
console.log("sisa(a, b) =", modulus(a, b));