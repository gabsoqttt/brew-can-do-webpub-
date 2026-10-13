// Shared header/footer (written once, injected on every page) + mobile menu
const pages = [
  ["index", "Home"],
  ["features", "Features"],
  ["services", "Services"],
  ["about", "About Us"],
  ["contact", "Contact Us"],
];
const cur = location.pathname.split("/").pop() || "index.html";
document.querySelector("header").innerHTML =
  `<a class="logo" href="index.html">BREW CAN DO</a>
<button id="burger" aria-label="Toggle menu" aria-expanded="false">☰</button>
<nav id="nav">${pages.map(([p, t]) => `<a href="${p}.html"${cur === p + ".html" ? ' aria-current="page"' : ""}>${t}</a>`).join("")}<a class="btn" href="contact.html">Book Your Event</a></nav>`;
document.querySelector("footer").innerHTML =
  `<p><strong>BREW CAN DO</strong> — Make your next gathering extra special.</p>
<p>hello@brewcando.com · <a href="social.html">Social Campaign</a> · <a href="email-marketing.html">Email Mockup</a> · <a href="customers.html">Customer Data</a></p>
<p>Fictional business created for an academic project. Prices, contacts and social links are samples/placeholders.</p>`;
const burger = document.getElementById("burger"),
  nav = document.getElementById("nav");
burger.onclick = () =>
  burger.setAttribute("aria-expanded", nav.classList.toggle("open"));
