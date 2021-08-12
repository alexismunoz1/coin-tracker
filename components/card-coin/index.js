customElements.define(
  "card-comp",
  class Card extends HTMLElement {
    shadow;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");

      this.shadow.innerHTML = `        
          <div class="section-cards__card">
          <div class="section-cards__card-content-x">
            <div class="section-cards__card-circulo">
              <img
                class="section-cards__card-circulo-fire"
                src="../../assets/fire.svg"
                alt=""
              />
            </div>
            <img class="section-cards__card-x" src="../../assets/vector-x.svg" />
          </div>
  
          <div class="section-cards__card-content-moneda">
            <div class="section-cards__card-siglas-nombre-content">
              <span class="section-cards__card-moneda-siglas">AAA</span>
              <span class="section-cards__card-moneda-nombre">(Nombre)</span>
            </div>
            <img
              class="section-cards__card-moneda-logo"
              src="../../assets/money.svg"
            />
          </div>
          <span class="section-cards__precio-moneda"
            >USD $<span class="section-cards__precio-moneda-precio"
              >00.000,00</span
            ></span
          >
          <div class="section-cards__cont-form">
            <form class="section-cards__form-value-max">
              <input
                class="section-cards__form-value-max-input"
                type="text"
                placeholder="Ej.$50000"
              />
              <button class="section-cards__form-value-max-button">
                <img
                  class="section-cards__form-value-max-button-img"
                  src="../../assets/btn-value-max.svg"
                  alt=""
                />
              </button>
            </form>
            <form class="section-cards__form-value-min">
              <input
                class="section-cards__form-value-min-input"
                type="text"
                placeholder="Ej.$30000"
              />
              <button class="section-cards__form-value-min-button">
                <img
                  class="section-cards__form-value-min-button-img"
                  src="../../assets/btn-value-min.svg"
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>`;

      style.innerHTML = `
        .section-cards__card {
          position: relative;
          width: 156px;
          height: 224px;
          padding: 8px;
          border-radius: 8px;
          font-family: var(--font-lato);
          background-color: var(--color-light-black);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          .section-cards__card {
            width: 305px;
            height: 438px;
            padding: 18px 16px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card {
            width: 408px;
            height: 586px;
            padding: 24px;
          }
        }
        .section-cards__card-content-x {
          display: flex;
          justify-content: flex-end;
        }
        .section-cards__card-circulo {
          position: absolute;
          top: -18px;
          left: 12px;
          width: 39px;
          height: 39px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          background-color: var(--color-orange);
        }
        @media (min-width: 768px) {
          .section-cards__card-circulo {
            width: 80px;
            height: 80px;
            top: -39px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-circulo {
            width: 96px;
            height: 96px;
            top: -50px;
            left: 22px;
          }
        }
        .section-cards__card-circulo-fire {
          height: 22px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .section-cards__card-circulo-fire {
            height: 40px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-circulo-fire {
            height: 52px;
          }
        }
        .section-cards__card-x {
          height: 12px;
        }
        @media (min-width: 768px) {
          .section-cards__card-x {
            height: 16px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-x {
            height: 24px;
          }
        }
        .section-cards__card-content-moneda {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          color: var(--color-white);
        }
        .section-cards__card-siglas-nombre-content {
          display: flex;
          flex-direction: column;
        }
        .section-cards__card-moneda-siglas {
          font-weight: bold;
          font-size: 24px;
        }
        @media (min-width: 768px) {
          .section-cards__card-moneda-siglas {
            font-size: 36px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-moneda-siglas {
            font-size: 64px;
          }
        }
        .section-cards__card-moneda-nombre {
          font-size: 14px;
        }
        @media (min-width: 768px) {
          .section-cards__card-moneda-nombre {
            font-size: 24px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-moneda-nombre {
            font-size: 30px;
          }
        }
        .section-cards__card-moneda-logo {
          height: 40px;
        }
        @media (min-width: 768px) {
          .section-cards__card-moneda-logo {
            height: 75px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__card-moneda-logo {
            height: 110px;
          }
        }
        .section-cards__precio-moneda {
          font-weight: 900;
          font-size: 18px;
          color: var(--color-green);
        }
        @media (min-width: 768px) {
          .section-cards__precio-moneda {
            font-size: 36px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__precio-moneda {
            font-size: 48px;
          }
        }
        .section-cards__cont-form {
        }
        .section-cards__form-value-max,
        .section-cards__form-value-min {
          width: 140px;
          height: 32px;
          margin-bottom: 8px;
          border-radius: 4px;
          display: flex;
          flex-direction: row;
          background-color: var(--color-dark-gray);
        }
        @media (min-width: 768px) {
          .section-cards__form-value-max,
          .section-cards__form-value-min {
            width: 273px;
            height: 48px;
            margin-bottom: 16px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__form-value-max,
          .section-cards__form-value-min {
            width: 361px;
            height: 56px;
            margin-bottom: 26px;
          }
        }
        .section-cards__form-value-max-input,
        .section-cards__form-value-min-input {
          flex: 1;
          width: 100%;
          border: none;
          outline: none;
          margin: 0 7px 0 7px;
          color: var(--color-gray);
          background-color: transparent;
        }
        @media (min-width: 768px) {
          .section-cards__form-value-max-input,
          .section-cards__form-value-min-input {
            margin: 0 15px;
            font-size: 18px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__form-value-max-input,
          .section-cards__form-value-min-input {
            margin: 0 24px;
            font-size: 30px;
          }
        }
        .section-cards__form-value-max-button,
        .section-cards__form-value-min-button {
          background-color: transparent;
          border: none;
        }
        @media (min-width: 768px) {
          .section-cards__form-value-max-button,
          .section-cards__form-value-min-button {
            margin-right: 10px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__form-value-max-button,
          .section-cards__form-value-min-button {
            margin-right: 16px;
          }
        }
        .section-cards__form-value-max-button-img,
        .section-cards__form-value-min-button-img {
          height: 14px;
        }
        @media (min-width: 768px) {
          .section-cards__form-value-max-button-img,
          .section-cards__form-value-min-button-img {
            height: 19px;
          }
        }
        @media (min-width: 1600px) {
          .section-cards__form-value-max-button-img,
          .section-cards__form-value-min-button-img {
            height: 24px;
          }
        }`;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
