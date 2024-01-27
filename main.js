class animate {
  constructor(logo) {
    this.logo = logo
    this.currentRotation = 0;
    this.init();
  }

  init = () => {
    this.logo.addEventListener('click', this.spin)
  }

  spin = () => {
    this.currentRotation += 360;
    this.logo.style.transform = `rotate(${this.currentRotation}deg)`;
  }
}

const action = new animate(document.querySelector('#logo'));