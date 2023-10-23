function isLeapYear(year){
       const remainder = year % 4;
       if(remainder === 0){
        //   console.log('Your year is leap year', year);
          return true;
       }else{
          //   console.log('Your year is not a leap year')
          return false;
       }
}

// isLeapYear(1933);
// isLeapYear(2020);

const isMyYearIsLeapYear = isLeapYear(1933);
console.log('my year: ', isMyYearIsLeapYear);

const isArianYearIsLeapYear = isLeapYear(2020);
console.log('Arian year: ', isArianYearIsLeapYear);