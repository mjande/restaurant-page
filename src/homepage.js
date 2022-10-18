import './style.css';
import img from './pexels-atahan-demir-3633990.jpg'

export function createLayout() {



};

export default function loadHomePage() {
  const card = document.querySelector(".card");
  card.innerHTML = "";

  const image = document.createElement("img");
  image.src = img;
  card.appendChild(image);
  
  const header = document.createElement("h1");
  header.textContent = "Greasy Spoon Diner";
  card.appendChild(header);

  const address = document.createElement("div");
  address.innerHTML = "417 Madison St, Duluth, MN"
  card.appendChild(address);

  const welcomeMessage = document.createElement("div");
  welcomeMessage.textContent = "Come by for breakfast or lunch or quick cup of coffee. We serve a full diner-style menu and some specialities like our Famous Apple Pie, Damn Fine Cup of Coffee, and Hippie Hash with a variety of mixins. The perfect place to relax, celebrate, or catch up."
  card.appendChild(welcomeMessage);

  const hoursContainer = document.createElement("div");
  const hoursHeader = document.createElement("h2");
  hoursHeader.textContent = "Hours";
  hoursContainer.appendChild(hoursHeader);
  const hours = document.createElement("div");
  hours.innerHTML = "Mon 6am-2pm<br>Tue 6am-2pm<br>Wed 6am-12pm<br>Thur 6am-2pm<br>Fri 6am-2am<br>Sat 6am-2am<br>Sun 12pm-9pm"
  hoursContainer.appendChild(hours);
  card.appendChild(hoursContainer);
}