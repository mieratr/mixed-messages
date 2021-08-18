const fortuneTeller = {
    subject: ['Your friend', 'Your parents', 'Your colleague', 'Your relatives', 'You', 'The person you love', 'The person you think about the most', 'Your best friend', 'Your idol', 'Your neighbor', 'Your cousin', 'Your sibling', 'The person you care about', 'Your partner'],

    action: ['travel the world', 'read a lot of books', 'come visit you', 'learn a new language', 'take up a dancing class', 'get fit through exercise and a healthy diet', 'go volunteer', 'learn to play a new instrument', 'take up a summer internship', 'start a blog', 'become a professional chef', 'write you a letter', 'grow an herb garden', 'go skydiving', 'go on a road trip'],

    time: ['tomorrow', 'next week', 'next year', 'next summer', 'next Monday', 'next weekend', 'in 2 years', 'during free time', 'in 3 days', 'next holiday', 'this Christmas', 'during school year']
}


const randomIndex = n => Math.floor(Math.random() * n);

for (let pieceOfData in fortuneTeller) {
    let i = randomIndex(fortuneTeller[pieceOfData].length);
    switch(pieceOfData) {
        case 'subject':
            process.stdout.write(`${fortuneTeller.subject[i]} will `);
            break;
        case 'action':
            process.stdout.write(`${fortuneTeller.action[i]} `);
            break;
        case 'time':
            process.stdout.write(`${fortuneTeller.time[i]}.`);
             break;
    }
}