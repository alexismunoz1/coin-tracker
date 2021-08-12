const logoBitcoin = "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=013";
const logoEthereum = "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=013";
const logoLitlecoin =
  "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=013";
const logoBinanceCoin =
  "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013";
const logoCardano = "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=013";
const logoDogecoin =
  "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=013";
const logoXrp = "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=013";
const logoPolkadot =
  "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=013";
const logoUniswap = "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=013";
const logoNeo = "https://cryptologos.cc/logos/neo-neo-logo.svg?v=013";

function precioEnTiempoReal() {
  const socket = new WebSocket("wss://ws.finnhub.io?token=c48733aad3icsciftov0");

  socket.addEventListener("open", function (event) {
    socket.send(
      JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" })
    );
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ETHUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:LTCUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BNBUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:ADAUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:DOGEUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:XRPUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:DOTUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:UNIUSDT" }));
    // socket.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:NEOUSDT" }));
  });

  const precioCard = document.querySelector(".section-cards__precio-moneda-precio");

  socket.addEventListener("message", function (event) {
    const arr = [];
    arr.push(JSON.parse(event.data));
    const dataCoin = arr[0].data;
    for (const d of dataCoin) {
      console.log(d.p);
      precioCard.textContent = `${d.p}`;
    }
  });

  // Unsubscribe
  var unsubscribe = function (symbol) {
    socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
  };
}
// precioEnTiempoReal();


function activarResultado() {
  const searchForm = document.querySelector(".section-search__form");
  const searchInput = document.querySelector(".section-search__form-input");
  const resultadoCont = document.querySelector(".section-search__resultado");
  const resultadoSiglaMoneda = document.querySelector(".section-search__resultado-moneda");
  const resultadoNombreMoneda = document.querySelector(".section-search__resultado-moneda-nombre");
  const resultadoPrecioMoneda = document.querySelector(".section-search__resultado-precio-numero");
  const resultadoBoton = document.querySelector(".section-search__resultado-button");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const texto = e.target.search.value;

    const symbolCoin = await buscarSymbol(texto).then((data) => {
      return data[0];
    });

    await buscarPrecio(symbolCoin.symbol).then((precioActual) => {
      resultadoSiglaMoneda.textContent = `${symbolCoin.displaySymbol}`;
      // resultadoNombreMoneda.textContent = `(${symbolCoin.symbol})`;
      resultadoPrecioMoneda.textContent = `${precioActual}`;
      resultadoCont.style.display = `flex`;
    });
  });

  searchInput.addEventListener("input", (e) => {
    if (!e.target.value) {
      resultadoCont.style.display = `none`;
    }
  });

  resultadoBoton.addEventListener("click", (e) => {
    // addCoinCard("123");
  });
}

function buscarSymbol(moneda) {
  let url = `https://finnhub.io/api/v1/search?q=BINANCE:${moneda}USDT&token=c48733aad3icsciftov0`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.result;
    });
}

function buscarPrecio(moneda) {
  let url = `https://finnhub.io/api/v1/quote?symbol=${moneda}&token=c48733aad3icsciftov0`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.c;
    });
}