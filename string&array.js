// Langkah 1: Membuat array awal untuk antrian pembeli
let antrian = ["ray", "fiki", "fadhilla", "farah"];

// Langkah 2: Menambahkan pembeli baru 'nabila' ke antrian
antrian.push("nabila");  // antrian: ["ray", "fiki", "fadhilla", "farah", "nabila"]

// Langkah 3: Menambahkan dua pembeli baru 'maza' dan 'elsi' ke antrian
antrian.push("maza", "elsi");  // antrian: ["ray", "fiki", "fadhilla", "farah", "nabila", "maza", "elsi"]

// Langkah 4: Pembeli terakhir tidak jadi antri, jadi kita keluarkan dari antrian
antrian.pop();  // antrian: ["ray", "fiki", "fadhilla", "farah", "nabila", "maza"]

// Langkah 5: Pembeli pertama sudah mendapatkan belanjaannya, keluarkan dari antrian
antrian.shift();  // antrian: ["fiki", "fadhilla", "farah", "nabila", "maza"]

// Langkah 6: Pembeli kedua juga sudah mendapatkan belanjaannya, keluarkan dari antrian
antrian.shift();  // antrian: ["fadhilla", "farah", "nabila", "maza"]

// Langkah 7: Pembeli baru bernama 'tomi' nyerobot antrian di depan
antrian.unshift("tomi");  // antrian: ["tomi", "fadhilla", "farah", "nabila", "maza"]

// Hasil akhir
console.log(antrian);  // Output: ["tomi", "fadhilla", "farah", "nabila", "maza"]