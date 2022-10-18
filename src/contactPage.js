import map from './pexels-binyamin-mellish-108942.jpg';

export default function loadContactPage() {
  const card = document.querySelector(".card");
  card.innerHTML = "";

  const mapImg = document.createElement("img");
  mapImg.src = map;

  const header = document.createElement("h1");
  header.textContent = "Contact";

  const contactInfo = document.createElement("div");
  contactInfo.innerHTML = "Please reach out to request our services or let us know how we did. We require reservations for groups over 10 and specials events (come host your birthday or family gathering at the Greasy Spoon!). Our phone number is <b>(123) 456-7890</b> and our email is <b>greasyspoon@fakemail.com</b>.";

  const directionsHeader = document.createElement("h1");
  directionsHeader.textContent = "Directions";

  const directions = document.createElement("div");
  directions.textContent = "We can be found on Madison Street, just off Interstate 35. From the south or north/east, take exit 99 off of I-35, you will see us in a mile on the right. Coming from the west, take exit 3 off of Highway 53, then take a left at the first light. We are down the road on the left.";

  const goodbye = document.createElement("h1");
  goodbye.textContent = "See you soon!";
  
  card.appendChild(mapImg);
  card.appendChild(header);
  card.appendChild(contactInfo);
  card.appendChild(directionsHeader);
  card.appendChild(directions);
  card.appendChild(goodbye);
}