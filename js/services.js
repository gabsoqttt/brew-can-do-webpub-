// GET data/services.json -> render cards, with category filter + search
const grid = document.getElementById("grid"),
  status = document.getElementById("status");
let all = [],
  cat = "All Services",
  q = "";
const peso = (n) =>
  n == null ? "Inquire for estimate" : "₱" + n.toLocaleString();
function render() {
  const list = all.filter(
    (s) =>
      (cat === "All Services" || s.tags.includes(cat)) &&
      (s.name + s.description + s.tags.join(" ")).toLowerCase().includes(q),
  );
  status.textContent = list.length ? "" : "No services match your search.";
  grid.innerHTML = list
    .map(
      (s) => `<article class="card"><div class="ph">${
        s.image
          ? `<span><img src="${s.image}" alt="${s.name} coffee catering setup"></span>`
          : `<span><b>☕</b>Photo placeholder: ${s.name}</span>`
      }</div>
  <h3>${s.name}</h3><p>${s.description}</p><p class="price">${peso(s.price)}</p><p><strong>Guests:</strong> ${s.guestRange}</p>
  <p><strong>Inclusions:</strong> ${s.inclusions.join(", ")}</p><p class="note">${s.availability}</p>
  <a class="btn" href="contact.html?service=${encodeURIComponent(s.name)}">Inquire Now</a></article>`,
    )
    .join("");
}
document.querySelectorAll(".tools button").forEach(
  (b) =>
    (b.onclick = () => {
      cat = b.textContent;
      document
        .querySelectorAll(".tools button")
        .forEach((x) => x.setAttribute("aria-pressed", x === b));
      render();
    }),
);
document.getElementById("search").oninput = (e) => {
  q = e.target.value.toLowerCase().trim();
  render();
};
status.textContent = "Loading services…";
fetch("data/services.json")
  .then((r) => {
    if (!r.ok) throw Error(r.status);
    return r.json();
  })
  .then((d) => {
    all = d;
    render();
  })
  .catch(() => {
    status.textContent =
      'Could not load services. Run the site from a local server (e.g. XAMPP or "python -m http.server"), not by double-clicking the file.';
  });