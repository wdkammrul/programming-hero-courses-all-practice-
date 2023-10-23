const lyrics = 'Allah tumi dayar sagor rahmanu rohim. tomar doyay purno amar sarano sidin';

// উপরের লাইন থেকে কোনো একটা স্ট্রিং বের করার সিস্টেম কত নম্বর ইনডেক্স এ আছে 
console.log(lyrics.indexOf('sagor'));

// একটা স্ট্রিং লাইনের মধ্যে আছে কিনা তার জন্য একটা কন্ডিশন 
if(lyrics.indexOf('purno') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('connot fint it');
}