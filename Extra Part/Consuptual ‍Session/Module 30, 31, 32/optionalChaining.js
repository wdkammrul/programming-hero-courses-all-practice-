const actor = {
  name: "Sakib Khan",
  age: 30,
  phone: "01723589654",
  money: "56465465465",
};

// এখানে কন্টাক্ট নাম নেই কিভাবে পাবে এজন্য পাওয়ার জন্য ? চিহ্ন ব্যবহার করতে হবে তাহলে ইরোর দিবে না একেই বলে অপশনাল চেইনিং ।
console.log(actor?.contact)
console.log(actor?.contact?.phone)
