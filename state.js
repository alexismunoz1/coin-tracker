const state = {
  data: {
    cards: [],
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

  setState(idCard, symbolCoin) {
    const currentState = this.data;
    // for (const card of currentState.cards) {
    //   if (card.id == idCard) {
    //     return false;
    //   }
    // }

    currentState.cards.push({
      idCard: idCard,
      symbolCoin: symbolCoin,
      precioMayor: 1000000,
      precio: 1,
    });
    console.log("soy el state, he cambiado", this.data);
  },

  saveLocalStorage() {
    // localStorage.setItem("coin-tracker", JSON.stringify(newState));
  },

  suscribe(callback) {
    this.listeners.push(callback);
  },
};
