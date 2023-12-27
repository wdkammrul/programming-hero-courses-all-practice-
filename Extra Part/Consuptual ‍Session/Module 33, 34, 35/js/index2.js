// এটা জাস্ট সেশনের আগে দেখানো হয়েছিল
const handleCategory = async () => {
    console.log("hello first");
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  console.log(data);
  console.log("hello second");
};

handleCategory();
