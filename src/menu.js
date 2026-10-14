export default function loadMenu() {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("section");
    menuPage.classList.add("menu-page");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const introduction = document.createElement("p");
    introduction.classList.add("menu-introduction");
    introduction.textContent = "Fresh ingredients, delicious flavors, and something for everyone.";

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    const menuItems = [
    {
      name: "Classic Burger",
      description: "Juicy beef, fresh lettuce, tomato, and house sauce.",
      price: "$12",
    },
    {
      name: "Garden Salad",
      description: "Crisp greens, seasonal vegetables, and lemon dressing.",
      price: "$9",
    },
    {
      name: "Creamy Pasta",
      description: "Pasta tossed in a creamy sauce with fresh herbs.",
      price: "$14",
    },
    {
      name: "Chocolate Cake",
      description: "Rich chocolate cake served with a smooth chocolate sauce.",
      price: "$7",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("article");
    card.classList.add("menu-card");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.classList.add("menu-price");
    price.textContent = item.price;

    card.append(name, description, price);
    menuGrid.appendChild(card);
  });

  menuPage.append(heading, introduction, menuGrid);
  content.appendChild(menuPage);


}