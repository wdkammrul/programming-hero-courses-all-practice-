console.log('second file')

// 1. আমি চাইলে একটা আইটেম অতিরক্ত অ্যাড করতে পারি । 

// support session help 
const addBtn = document.querySelector('#add-item');
addBtn.addEventListener('click', function(){
   const secondList = document.getElementById('second-list')
    const li = document.createElement('li');
    li.innerText = 'My dynamic item'
    secondList.appendChild(li);
})