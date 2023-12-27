// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং (String) যেটি হবে িএকটি ফাইল নেম 


// এটা বুঝিনি 
function isJavaScriptFile(filename) {
    if(typeof filename !== 'string'){
        return 'please provide me a valid file name (string).'
    }else{
        if(filename.endsWith('.js') === true){
            return true
        }else{
            return false
        }

        return filename.toLowerCase() ==
    }
}

console.log(isJavaScriptFile('hello.html'))