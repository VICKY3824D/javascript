const examScore = [80,89,70,90,93,77];

// let total = 0;
// for (let score of examScore) {
//     total += score;
// }

const total = examScore.reduce((total,score) => {
    return total + score;
});

const animes = [
    {
        title: 'Attack on titan',
        rating: 94,
        year: 2022,
    },
    {
        title: 'Naruto',
        rating: 91,
        year: 2002,
    }
];

const bestAnime = animes.reduce((bestAnime, currAnime) => {
    if (currAnime.rating > bestAnime.rating) {
        return currAnime;
    }
    return bestAnime;
});