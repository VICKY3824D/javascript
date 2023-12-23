// const user = {
//     name: 'Vidky',
//     email: 'pradana23@doe.com',
//     role: 'Admin',
// }

// // const {name, email, phone = '0812381928'} = user;

// const userAndRole = ({name, email}) => {
//     return `${name} - ${email}`;
// }

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

const anime = animes.map(({title, year, rating}) =>{
    return `${title} (${year}) rating: ${rating}`;
})