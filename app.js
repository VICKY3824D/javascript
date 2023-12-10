const examScore = [80,85,80,90,93,77];
const isGraduate = examScore.every((score) => score >= 75);

const animes = [
    {
        title: 'Attack on Titan',
        rating: 87,
        year: 2008,
    },
    {
        title: 'Kemesraan',
        rating: 85,
        year: 2009,
    }
]

const isAnimeListNew = animes.some((anime) => anime.year > 2010);
