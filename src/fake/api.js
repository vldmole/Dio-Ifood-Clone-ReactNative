
//---------------------------------------------------------------
async function stall(stallTime = 3000)
{
   await new Promise(resolve => setTimeout(resolve, stallTime));
}

//---------------------------------------------------------------
export async function loadRestaurants(delay = 1000)
{
   await stall(delay);
   return restaurants;
}

//---------------------------------------------------------------
export async function loadCategories(delay = 1000)
{
   await stall(delay);
   return categories;
}

//---------------------------------------------------------------
export async function loadBanners(delay = 1000)
{
   await stall(delay);
   return banners;
}

//---------------------------------------------------------------
export default (
   service = {
      loadRestaurants,
      loadCategories,
      loadBanners
   }
)

//---------------------------------------------------------------
const banners = [
   { id: 1, imgUrl: require("./imgs/banners/banner1.png") },
   { id: 2, imgUrl: require("./imgs/banners/banner2.png") },
   { id: 3, imgUrl: require("./imgs/banners/banner3.png") },
   { id: 4, imgUrl: require("./imgs/banners/banner4.png") },
   { id: 5, imgUrl: require("./imgs/banners/banner5.png") },
]

//---------------------------------------------------------------
const categories = [
   {
      id: 1,
      name: "Brasileira",
      imgUrl: require('./imgs/foods/comidaBrasileira.jpg')
   },
   {
      id: 2,
      name: "Marmita",
      imgUrl: require('./imgs/foods/laMinuta.jpg')
   },
   {
      id: 3,
      name: "Almoço",
      imgUrl: require('./imgs/foods/marmita.jpg')
   },
   {
      id: 4,
      name: "Pizza",
      imgUrl: require('./imgs/foods/pizza.jpg')
   },
   {
      id: 5,
      name: "Lanche",
      imgUrl: require('./imgs/foods/lanche.jpg')
   },
   {
      id: 6,
      name: "Bebidas",
      imgUrl: require('./imgs/foods/bebidas.jpg')
   },
];

//---------------------------------------------------------------
const restaurants = [
   {
      id: 1,
      name: "Restaurant 1",
      rating: 1.0,
      categorie: "cat 1",
      distance: 1,
      freightValue: 1.00,
      timeToDo: "10min",
      imgUrl: require('./imgs/restaurants/rest1.jpg')
   },
   {
      id: 2,
      name: "Restaurant 2",
      rating: 2.0,
      categorie: "cat 2",
      distance: 2,
      freightValue: 2.00,
      timeToDo: "20min",
      imgUrl: require('./imgs/restaurants/rest2.jpg')
   },
   {
      id: 3,
      name: "Restaurant 3",
      rating: 3.0,
      categorie: "cat 3",
      distance: 3,
      freightValue: 3.00,
      timeToDo: "30min",
      imgUrl: require('./imgs/restaurants/rest3.jpg')
   },
   {
      id: 4,
      name: "Restaurant 4",
      rating: 4.0,
      categorie: "cat 4",
      distance: 4,
      freightValue: 4.00,
      timeToDo: "40min",
      imgUrl: require('./imgs/restaurants/rest4.jpg')
   },
   {
      id: 5,
      name: "Restaurant 5",
      rating: 5.0,
      categorie: "cat 5",
      distance: 5,
      freightValue: 5.00,
      timeToDo: "50min",
      imgUrl: require('./imgs/restaurants/rest5.jpg')
   },
];

//---------------------------------------------------------------