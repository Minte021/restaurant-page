export default function loadeHome() {
    const content = document.querySelector("#content");

    const homePage = document.createElement("section");
    homePage.classList.add("home");

    const label = document.createElement("p");
    label.classList.add("home-label");
    label.textContent = "FRESH • LOCAL • MADE WITH LOVE";

    const heading = document.createElement("h1");
    heading.classList.add("home-heading");
    heading.textContent = "Good Food. Good Company.";

    const description = document.createElement("p");
    description.classList.add("home-description");
    description.textContent = "Welcome to our table, where fresh ingredients, " +
    "delicious meals, and warm hospitality come together.";

    const highlight = document.createElement("div");
    highlight.classList.add("home-highlight");

    const highlightHeading = document.createElement("h2");
   highlightHeading.textContent = "Made fresh, served with love";

   const highlightText = document.createElement("p");
  highlightText.textContent =
    "From relaxed lunches to memorable dinners, " +
    "we make every visit special.";

    highlight.append(highlightHeading, highlightText);
    homePage.append(label, heading, description, highlight);
    content.appendChild(homePage);
}