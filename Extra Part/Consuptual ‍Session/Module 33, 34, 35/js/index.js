const handleCategory = async () => {
  const response = await fetch(
    " https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  //  console.log(data.data.news_category);

  const tabContainer = document.getElementById("tab-container");

  //  step-2
  const trimedData = data.data.news_category.slice(0, 8);
  trimedData.forEach((category) => {
    //  console.log(category);

    //  step-3
    const div = document.createElement("div");
    div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
     `;

    //  step-4
    tabContainer.appendChild(div);
  });
};

// step-5 step-3 এর ভিতরে onclick ‍ এর মাধ্যমে handleLoadNews কে ডাকা যাবে এবং breaking news এ ক্লিক করলে braking news এর সব ডিলেইস দেখাবে ।
const handleLoadNews = async (categoryId) => {
  // step-6
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  // console.log(data.data)

  const cardContainer = document.getElementById("card-container");

  // step-10 এখানে পূর্বের কার্ডগুলো খালি করে দিলাম 
  cardContainer.innerHTML = "";

  // step-7
  data.data?.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card w-96 bg-gray-100 shadow-xl font-sans">
            <figure>
              <img
                src=${news?.image_url}
              />
            </figure>
            <div class="card-body font-sans">
              <h2 class="card-title">${news?.title.slice(0, 10)}</h2>
              <h2 class="card-title">${news?.details.slice(0, 38)}</h2>
              <h2 class="card-title">Total Views: ${
                news?.total_view ? news.total_view : "No Views"
              }</h2>
              <div class="card-actions justify-center py-2">
                <button class="btn btn-primary">${news?.rating?.badge}</button>
              </div>
            </div>
          </div>
        `;

    // step-8
    cardContainer.appendChild(div);
  });
};

handleCategory();

// step-9 
handleLoadNews('01'); 
