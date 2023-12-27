// সাধারন ভাবে একাধিক লাইন লেখা 
const myName = 'Kamrul';
const Age = 23;
const Address = 'Barishal';
const Nationality = 'Bangali'

const sentence = 'Amar name ' + myName +  '\n Amar boyos ' + Age + '\n Amar Bari '+ Address + '. Amar Nationality '+ Nationality;

// console.log(sentence)


// use template or vektic আমরা উপরের কাজকা 
const subjects = ['bangla', 'english', 'math']
const setense1 = `
Amar Name ${myName} 
Amar boyos ${Age} 
Amar book name ${subjects.map(subject => subject).join('/')}
Amar Bari ${Address} 
Amar Nationality ${Nationality}
`

console.log(setense1)