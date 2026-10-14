export default function loadContact() {
    const content = document.querySelector("#content");

    const contactPage = document.createElement("section");
    contactPage.classList.add("contact-page");

    const heading = document.createElement("h1");
    heading.textContent = "Get in Touch";

    const introduction = document.createElement("p");
    introduction.textContent = "Have a question or planning a visit? We'd love to hear from you.";

    const details = document.createElement("div");
    details.classList.add("contact-details");

    const addressHeading = document.createElement("h2");
    addressHeading.textContent = "Visit Us";

    const address = document.createElement("p");
    address.textContent = "123 Main Street (sample address)";

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Opening Hours";

    const hours = document.createElement("p");
    hours.textContent = "Monday – Sunday: 9:00 AM – 9:00 PM";

    const emailHeading = document.createElement("h2");
    emailHeading.textContent = "Email";

    const email = document.createElement("p");
    email.textContent = "hello@goodtable.example";

    details.append(
    addressHeading,
    address,
    hoursHeading,
    hours,
    emailHeading,
    email
  );

    contactPage.append(heading, introduction, details);
    content.appendChild(contactPage);
}