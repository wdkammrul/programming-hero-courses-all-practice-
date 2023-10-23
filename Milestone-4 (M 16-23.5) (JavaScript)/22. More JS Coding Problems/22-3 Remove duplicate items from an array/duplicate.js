// 1. এখানে একই না ১বারই থাকতে পারবে একই নাম বার বার ব্যবহার করা যাবে না 
const names = ['arman', 'arif', 'limon', 'yousuf', 'arman', 'limon', 'amin', 'oliullah', 'abul', 'arman'];

function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}


const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); 

