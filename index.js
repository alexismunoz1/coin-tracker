function addCoinCard(params) {
  const template = document.querySelector("#section-cards__template");
  const contenedor = document.querySelector(".section-cards");

  template.content.querySelector(".section-cards__card-moneda-siglas").textContent = `Hola`;
  template.content.querySelector(".section-cards__card-moneda-nombre").textContent = `Chau`;
  // template.content.querySelector(".section-cards__card-moneda-logo").src = ``;
  template.content.querySelector(".section-cards__precio-moneda-precio").textContent = `1234`;

  const clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function main() {
  searchSection(document.querySelector(".section-search"));
  devolverResultado();
}
main();
