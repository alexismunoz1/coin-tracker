customElements.define(
  "espacio-vasio",
  class EspacioVacio extends HTMLElement {
    shadow;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.innerHTML = `
          <div class="section-cards__espacio-vasio">
              <div class="section-cards__espacio-vasio__barra-uno"></div>
              <div class="section-cards__espacio-vasio__barra-dos"></div>
          </div>`;

      style.innerHTML = `
          .section-cards__espacio-vasio {
              box-sizing: border-box; 
              width: 156px;
              height: 224px;
              border-radius: 8px;
              border: 5px solid var(--color-dark-gray);
              display: flex;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            @media (min-width: 768px) {
              .section-cards__espacio-vasio {
                width: 305px;
                height: 438px;
              }
            }
            @media (min-width: 1600px) {
              .section-cards__espacio-vasio {
                width: 408px;
                height: 586px;
              }
            }
            
            .section-cards__espacio-vasio__barra-uno {
              width: 50px;
              height: 5px;
              background-color: var(--color-dark-gray);
              transform: rotate(270deg);
              border-radius: 3px;
            }
            @media (min-width: 768px) {
              .section-cards__espacio-vasio__barra-uno {
                width: 70px;
                height: 7px;
              }
            }
            @media (min-width: 1600px) {
              .section-cards__espacio-vasio__barra-uno {
                width: 90px;
                height: 9px;
              }
            }
            
            .section-cards__espacio-vasio__barra-dos {
              width: 50px;
              height: 5px;
              background-color: var(--color-dark-gray);
              transform: translateY(-4px);
              border-radius: 3px;
            }
            @media (min-width: 768px) {
              .section-cards__espacio-vasio__barra-dos {
                width: 70px;
                height: 7px;
                transform: translateY(-6px);
              }
            }
            @media (min-width: 1600px) {
              .section-cards__espacio-vasio__barra-dos {
                width: 90px;
                height: 9px;
                transform: translateY(-9px);
              }
            }`;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
);
