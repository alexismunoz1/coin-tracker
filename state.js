const state = {
  data: {
    cards: [{ id: "BTC/USDT", symbolID: "BINANCE:BTCUSDT" }],
  },

  listeners: [],

  init() {
    const localData = localStorage.getItem("coin-tracker");
  },

  getState() {
    return this.data;
  },

  addCard() {
    const currentState = this.getState();
  },

  deleteCard(id) {},

  setState(newState) {
    this.data = newState;
    for (const cd of this.listeners) {
      cd(newState);
    }
    localStorage.setItem("coin-tracker", JSON.stringify(newState));
    console.log("soy el state, he cambiado", this.data);
  },

  suscribe(callback) {
    this.listeners.push(callback);
  },
};

// export { state };
