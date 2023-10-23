/*
fixed: per item wood requirements ( একটার জন্য কাঠ ফিক্সড থাকবে )

1. chair --> 3 cft একটা চেয়ার বানাতে ৩ সিয়েফ্টি কাঠ লাগে 
2. table --> 10 cft একটা টেবিল বানাতে ৫ সিয়েফ্টি কাঠ লাগে 
3. bed   --> 50 cft একটা বেড বানাতে ৫০ সিয়েফ্টি কাঠ লাগে 

very: quantity (যেকয়টা আইটেম লাগবে কাঠ প্রয়োজনে ততো বাড়বে । অর্থ্যৎ ১ টা চেয়ারে ৩ সিয়েফ্টি কাঠ লাগলে ২ টায় লাগবে ৬ সিয়েফ্টি)
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood   = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
    // console.log(chairQuantity, tableQuantity, bedQuantity)
}


const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood)