// 1. VALIDATION 
function add(a,b){

    if(typeof a ===! 'number' || typeof b ===! 'number'){
        return 'please give me two numbers'
    }

    return a+b;
}

console.log(add(3, 4))


