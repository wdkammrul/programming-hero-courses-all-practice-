console.log('thire list')

// 1. আমি চাইলে একটা আইটেম অতিরক্ত অ্যাড করতে পারি । 
 const thirdList = document.getElementById('third-list');

 const li = document.createElement('li');
 li.innerText = 'This is list 5'

 thirdList.appendChild(li)


//  2. আমরা একটা সেকশনও তৈরি করতে পারি 

 const main = document.getElementById('main-container');
 const section = document.createElement('section');
 section.innerHTML = `
 <h1> My dynamic  section </h1>
 <p> Extra text added inside paragraph </p>
 <ul> 
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
   <li> first item </li>
 </ul>

 `

 main.appendChild(section)