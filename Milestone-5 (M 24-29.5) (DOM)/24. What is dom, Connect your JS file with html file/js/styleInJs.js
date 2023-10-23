// এখানে সবগুলো সেকশন দেখা যাবে । 
const sections = document.querySelectorAll('section');
// console.log(sections);

// এই লুপটার কারনে আমরা সেকশনগুলো পেতে পারি 
for(const section of sections){
    // console.log(section);

    // এখানে পুরো সেকশনে স্টাইল দেয়া হবে 
    section.style.border = '2px solid steelblue'
    section.style.marginBottom = '10px'
    section.style.borderRadius = '10px'
    section.style.paddingLeft = '10px'
    section.style.backgroundColor = 'lightgray';
}


// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'


const placesContainer = document.getElementById('places-container');
const parentContainer = document.getElementById('parent')
// console.log(parentContainer.firstElementChild);


// চাইলে একটা আলাদা ইলিমেন্ট বানাতেও পারি আমরা । 
const create = document.createElement('div')
// console.log(create)