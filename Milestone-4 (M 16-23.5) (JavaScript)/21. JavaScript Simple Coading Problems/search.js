const lyrics = 'Allah tumi dayar sagor rahmanu rohim. tomar doyay purno amar sarano sidin';

// উপরে দয়ায় শব্দটা লাইনে আছে কিনা তা বের করার জন্য যদি থাকে সত্য দেখাবে ।
const doesExist = lyrics.includes('doyay');
//  একটু খেয়াল করি উপরের দয়ায় শব্দটা doyay এরকমের আছে যদি Doyay এরকমের লেখি তাহলে false(মিথ্যা রেজাল্ট দেখাবে)
// const doesExist = lyrics.includes('Doyay');

console.log(doesExist);


