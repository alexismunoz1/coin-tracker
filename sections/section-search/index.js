import { state } from "../../state";

// state.getState()

function searchSection(el) {
  const div = document.createElement("div");

  div.innerHTML = `
      <div class="section-search__cont">
          <h2 class="section-search__title">Buscá tus favoritas</h2>
          <form class="section-search__form">
              <input
              class="section-search__form-input"
              type="text"
              name="search"
              placeholder="Ej. btc, eth, ltc..."
              />
              <button class="section-search__form-button">
                  <img class="section-search__form-button-lupa" src="../../assets/lupa.svg"/>
              </button>
          </form>
      </div>
  
      <div class="section-search__resultado">
          <span class="section-search__resultado-moneda">AAA</span>
          <span class="section-search__resultado-precio">USD $
              <span class="section-search__resultado-precio-numero">00.000,00</span>
          </span>
          <button class="section-search__resultado-button">
              Track
              <img
              class="section-search__resultado-button-vector"
              src="../../assets/vector-positivo.svg"/>
          </button>
      </div>
    `;

  el.appendChild(div);
}

function devolverResultado() {
  const searchForm = document.querySelector(".section-search__form");
  const searchInput = document.querySelector(".section-search__form-input");
  const resultadoCont = document.querySelector(".section-search__resultado");
  const resultadoSiglaMoneda = document.querySelector(".section-search__resultado-moneda");
  const resultadoPrecioMoneda = document.querySelector(".section-search__resultado-precio-numero");
  const resultadoBotonTrack = document.querySelector(".section-search__resultado-button");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const texto = e.target.search.value;

    const symbolCoin = await buscarSymbol(texto).then((data) => {
      return data[0];
    });

    await buscarPrecio(symbolCoin.symbol).then((precioActual) => {
      resultadoSiglaMoneda.textContent = `${symbolCoin.displaySymbol}`;
      resultadoPrecioMoneda.textContent = `${precioActual}`;
      resultadoCont.style.display = `flex`;
    });

    resultadoBotonTrack.addEventListener("click", (e) => {});
  });

  searchInput.addEventListener("input", (e) => {
    if (!e.target.value) {
      resultadoCont.style.display = `none`;
    }
  });

  function buscarSymbol(moneda) {
    return fetch(
      `https://finnhub.io/api/v1/search?q=BINANCE:${moneda}USDT&token=c48733aad3icsciftov0`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.result;
      });
  }

  function buscarPrecio(moneda) {
    return fetch(`https://finnhub.io/api/v1/quote?symbol=${moneda}&token=c48733aad3icsciftov0`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.c;
      });
  }
}
