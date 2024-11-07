// callback
// function greeting(name, callback) {
//     console.log("Memproses...");
//     callback(name);
// }

// function displayMessage(name) {
//     console.log("Selamat datang, " + name + "!");
// }

// greeting("Gian", displayMessage);

//time interval
// function setTime() {
//     const header = document.getElementById("header");
//     header.textContent = new Date().toString();
// }
// setInterval(setTime, 1000);
// console.log("Program Finish");

//pembagian 2 angka
function divideNumbers() {
    const num1 = prompt("Masukkan angka pertama:");
    const num2 = prompt("Masukkan angka kedua:");

    // Memeriksa apakah input berupa angka
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Kedua input harus berupa angka.");
        return;
    }

    // Mengubah input menjadi angka
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Memeriksa apakah terjadi pembagian dengan nol
    if (number2 === 0) {
        alert("Error: Tidak bisa membagi dengan nol.");
        return;
    }

    // Melakukan pembagian
    const result = number1 / number2;
    alert("Hasil: " + result);
}

// Panggil fungsi untuk memulai
divideNumbers();