// আমি এখানে চাচ্ছি ৫০ এর বড় যত সংখ্যা আছে তা না দেখতে । এজন্য continue ব্যবহার করা হলো । continue মানে ৫০ এর বড় কোনো সংখ্যা পেলে ওটা আউটপুটে না এসে পরের ধাপে চলে যাও । 
var numbers = [45, 87, 89, 56, 32, 51, 100, 120, 25, 44, 55 ];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}