// for..in
// for (변수 in 객체) {
//     동작부분
// }

let oshmos = {
    name: 'oshmos',
    bornYear: '1997',
    'is Very Tall': true,
    experience: {
        language1: 'python',
        language2: 'dart',
        language3: 'c#',
        language4: 'JS',
        language5: 'Cpp',
        frameWork: 'Django',
    }
};

for (let key in oshmos) {
    console.log(key);
    console.log(oshmos[key]);
}