// এখান থেকে  সবচেয়ে সস্তা ফোনটি বের করতে হবে এখানে প্রপার্টি প্রাইসকে টার্গেট করে সবচেয়ে কম দামের ফোন বের করা হছে।   

const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 10, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camera: 10, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 10, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'}
];

 
function cheapestPhone(phones){
      let cheapest = phones[0];
    for(i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone)
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
        
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);






















