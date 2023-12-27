// একটা ফাংশনের মধ্যে  যদি আরেকটা ফাংশন পাঠাই সেটাই কলব্যাক 
const function1 = (a,b,callback) => {
    // console.log(typeof callback)   
    callback(a, b)
}

const callback = (x, y) => {
    console.log('sum = ', x+y)
}

function1(10,4, callback)


