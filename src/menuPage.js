import omeletteImage from './pexels-cottonbro-5961362.jpg';
import applePieImage from './pexels-mali-maeder-103888.jpg';
import coffeeImage from './pexels-andrew-neel-4264049.jpg';

export default function loadMenuPage() {
  const card = document.querySelector(".card");
  card.innerHTML = "";

  const header = document.createElement("h1");
  header.textContent = "Menu";

  const omeletteImg = document.createElement("img");
  omeletteImg.src = omeletteImage;
  const omelette = document.createElement("div");
  omelette.innerHTML = "<h2>Farmer's Omelette</h2> A delicious three-egg omelette filled with your choice of bacon, sausauge, cheeses, fruit, and/or peppers. <b>$9.99</b>";

  const applePieImg = document.createElement("img");
  applePieImg.src = applePieImage;
  const applePie = document.createElement("div");
  applePie.innerHTML = "<h2>World Famous Apple Pie</h2> Baked from the freshest apples from the local orchard, our World Famous Apple is a treat to die for and the best in county, if not the world! Whipped cream available upon request. <b>$4.99</b>"

  const coffeeImg = document.createElement("img");
  coffeeImg.src = coffeeImage;
  const coffee = document.createElement("div");
  coffee.innerHTML = "<h2>Damn Fine Cup of Coffee</h2> This isn't your ordinary cup of joe. We brew our coffee daily from the finest beans in a variety of blends (Columbian, French Roast, Seasonal). Grab a cup a la carte, or receive one free cup with food purchase. <b>$2.99</b>";

  card.appendChild(header);
  card.appendChild(omeletteImg);
  card.appendChild(omelette);
  card.appendChild(applePieImg);
  card.appendChild(applePie);
  card.appendChild(coffeeImg);
  card.appendChild(coffee);
}