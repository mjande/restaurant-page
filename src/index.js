import loadHomePage from './homepage.js';
import loadMenuPage from './menuPage.js';
import loadContactPage from './contactPage';

(function createLayout() {
  const content = document.querySelector(".content");
  
  const navbar = document.createElement("navbar")
  const homeButton = document.createElement('a');
  homeButton.href = "#";
  homeButton.textContent = "Home";
  homeButton.onclick = loadHomePage;
  navbar.appendChild(homeButton);

  const menuButton = document.createElement("a");
  menuButton.textContent = "Menu";
  menuButton.href = "#";
  menuButton.onclick = loadMenuPage;
  navbar.appendChild(menuButton);
  
  const contactButton = document.createElement("a");
  contactButton.textContent = "Contact";
  contactButton.href = "#";
  contactButton.onclick = loadContactPage;
  navbar.appendChild(contactButton);

  content.appendChild(navbar);

  const card = document.createElement("div");
  card.classList.add("card");
  content.appendChild(card);
})();

loadHomePage();