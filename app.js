// const sumAll = (...nums) => {
//     return nums.reduce((total,el) => total + el);
// };

const nama = ['Andi','Budi','Caca','Donny', 'Eko', 'Farhan','Gandi', 'Heru'];

// rest parameter (...other)
const pemenang = (gold, silver , bronze, ...other) => {
    console.log(`Medali emas diraih: ${gold}`);
    console.log(`Medali perak diraih: ${silver}`);
    console.log(`Medali perunggu diraih ${bronze}`);
    console.log(`Peserta lainnya: ${other}`);
};

//cara pemanggilan di console => pemenang(...nama)
