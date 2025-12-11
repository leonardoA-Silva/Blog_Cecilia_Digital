class GavetaToggle {
  constructor(botaoId, gavetaId) {
    this.botao = document.getElementById(botaoId);
    this.gaveta = document.getElementById(gavetaId);

    if (!this.botao || !this.gaveta) {
      console.error("IDs inválidos para GavetaToggle");
      return;
    }

    this.init();
  }

  init() {
    // Clique no botão abre/fecha a gaveta
    this.botao.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });

    // Fecha a gaveta se clicar fora
    document.addEventListener("click", (e) => {
      if (!this.gaveta.contains(e.target) && e.target !== this.botao) {
        this.close();
      }
    });
  }

  toggle() {
    this.gaveta.style.display =
      this.gaveta.style.display === "block" ? "none" : "block";
  }

  close() {
    this.gaveta.style.display = "none";
  }

  open() {
    this.gaveta.style.display = "block";
  }
}


class Carousel {
  constructor(containerSelector, trackSelector, cardSelector, leftBtnSelector, rightBtnSelector) {
    this.container = document.querySelector(containerSelector);
    this.track = document.querySelector(trackSelector);
    this.cards = Array.from(this.track.querySelectorAll(cardSelector));
    this.btnEsquerda = document.querySelector(leftBtnSelector);
    this.btnDireita = document.querySelector(rightBtnSelector);

    this.cardWidth = this.cards[0].offsetWidth + 20; // largura + gap
    this.currentIndex = 0;

    this.setupInfiniteLoop();
    this.setupEvents();
  }

  setupInfiniteLoop() {
    // duplicar os cards para criar efeito infinito
    const clone = this.track.innerHTML;
    this.track.innerHTML += clone;
    this.cards = Array.from(this.track.querySelectorAll(".carrossel-card, .carrossel-card2"));
  }

  setupEvents() {
    this.btnDireita.addEventListener("click", () => this.move(1));
    this.btnEsquerda.addEventListener("click", () => this.move(-1));
  }

  move(direction) {
    this.currentIndex += direction;
    this.track.style.transition = "transform 0.4s ease";
    this.track.style.transform = `translateX(-${this.cardWidth * this.currentIndex}px)`;

    this.track.addEventListener("transitionend", () => {
      const half = this.cards.length / 2;

      // fim → volta para início
      if (this.currentIndex >= half) {
        this.track.style.transition = "none";
        this.currentIndex = 0;
        this.track.style.transform = `translateX(0px)`;
        requestAnimationFrame(() => {
          this.track.style.transition = "transform 0.4s ease";
        });
      }

      // início → volta para fim
      if (this.currentIndex < 0) {
        this.track.style.transition = "none";
        this.currentIndex = half - 1;
        this.track.style.transform = `translateX(-${this.cardWidth * this.currentIndex}px)`;
        requestAnimationFrame(() => {
          this.track.style.transition = "transform 0.4s ease";
        });
      }
    }, { once: true });
  }
}








// Inicializar carrossel quando o DOM estiver pronto
// Leo isso aqui é para carregar o carrossel quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});
