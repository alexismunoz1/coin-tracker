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

    searchInput.addEventListener("input", (e) => {
      if (!e.target.value) {
        resultadoCont.style.display = `none`;
      }
    });

    const symbolCoin = await getSymbol(texto).then((data) => {
      return data[0];
    });

    await getPrecio(symbolCoin.symbol).then((precioActual) => {
      resultadoSiglaMoneda.textContent = `${symbolCoin.displaySymbol}`;
      resultadoPrecioMoneda.textContent = `${precioActual}`;
      resultadoCont.style.display = `flex`;
    });

    resultadoBotonTrack.addEventListener("click", (e) => {
      state.setState(symbolCoin.symbol, symbolCoin.displaySymbol);
    });
  });

  function getSymbol(moneda) {
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

  function getPrecio(moneda) {
    return fetch(`https://finnhub.io/api/v1/quote?symbol=${moneda}&token=c48733aad3icsciftov0`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.c;
      });
  }
}

function addTrackCard() {
  const resultadoBotonTrack = document.querySelector(".section-search__resultado-button");
  const sectionCards = document.querySelector(".section-cards");
  const espacioVasio = document.querySelector(".section-cards__espacio-vasio");

  resultadoBotonTrack.addEventListener("click", (e) => {
    const currentState = state.getState();
    const card = document.createElement("card-comp");

    // sectionCards.replaceChild(card, espacioVasio);
  });
}

function main() {
  devolverResultado();
  addTrackCard();
}
main();
