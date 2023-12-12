function lemparDadu(sisi = 6){
    return Math.floor(Math.random() * sisi) + 1;
}

function sapa(msg, name = 'vicky'){//default argument sebaiknya diletakkan di belakang
    console.log(`${name} ${msg}`);
}