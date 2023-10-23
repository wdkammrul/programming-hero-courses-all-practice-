// আমরা এখানে place i like to visit নতুন কোনো ইলিমেন্ট অ্যাড করবো 
// ১. কোথায় অ্যাড করবো তার কোড 
const placesList = document.getElementById('places-list');
// console.log(placesList);

// ২. নতুন জায়গা হিসেবে  এই লাইনটা 
const li = document.createElement('li')
li.innerText = 'pahartoli bon';

// ৩. এখন আমরা এখানে অ্যাড করবো 
placesList.appendChild(li);


// system -1 
// এখন আমরা পুরো একটা সেকশনকে অ্যাড করবো ।
// ১. কোথায় অ্যাড করবো তার কোড 
const mainContainer = document.getElementById('main-container')
// প্রথম প্রথম  এরকমের কনসল লগ করে সিওর হতে হবে 
// console.log(mainContainer);

// 2. নতুন সেকশনে লিস্ট ও হেডার অ্যাড হচ্ছে 
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biryani'
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);




// system-2  
// উপরেরটার মতো এখানেও আমরা একটা সেকশন তৈরি করবো অণ্য  সিস্টেমে । 
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Ganji</li>

</ul>
`
mainContainer.appendChild(sectionDress);

