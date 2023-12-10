const examScore = [80,89,70,90,93,77];

// let total = 0;
// for (let score of examScore) {
//     total += score;
// }

const total = examScore.reduce((total,score) => {
    return total + score;
});