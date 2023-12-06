// const angka = [1,2,3,4,5,6,7,8,9,10];

// const angkaGanjil = angka.filter((n) => {
//     return n % 2 === 1;
// });

// const angkaGenap = angka.filter((n) =>{
//     return n % 2 === 0;
// });

const animes = [
    {
        Judul: 'Naruto',
        rating: 86,
        tahun: 2022,
    },
    {
        Judul: 'Baruto',
        rating: 85,
        tahun: 2012,
    },
    {
        Judul: 'Nuroto',
        rating: 90,
        tahun: 2021,
    }
];

// const good = animes.filter((anime) => anime.rating > 86);
// const JudulAnimeBagus = good.map((anime) => anime.Judul);
const TahunBagus = good.map((anime) => anime.tahun);

//penggabungan baris 29 dan 30
const GOOD = animes.filter((anime) => anime.rating > 86).map((anime) => anime.Judul);

// const mainstream = animes.filter((anime) => anime.rating > 80 && anime.rating <= 86);
// const JudulAnimeBiasa = mainstream.map((anime) => anime.Judul);

//Penggabungan baris 36 dan 37
const MAINSTREAM = animes.filter((anime) => anime.rating > 80 && anime.rating <= 86).map((anime) => anime.Judul)

