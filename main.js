const body = document.getElementById("body");
const antennas = document.getElementById("antennas");
const head = document.getElementById("head");
const ball = document.getElementById("ball");

const data = {
  droidX: 0,
  mouseX: 0,
  speed: 0.5,
  accelMod: 0.5,
};

function styleTag() {
  const calculation = data.mouseX - data.droidX;
  body.style.cssText = `transform: translateX(${data.droidX}px);`;
  antennas.style.cssText = `transform: translateX(${calculation / 25}px) rotateZ(${calculation / 80}deg);`;
  head.style.cssText = `transform: translateX(${calculation / 15}px) rotateZ(${calculation / 25}deg);`;
  ball.style.cssText = `transform: rotateZ(${data.droidX / 2}deg);`;
}

function mouse() {
  const distance = data.mouseX - data.droidX;
  const acceleration = Math.abs(distance * data.accelMod) / 100;
  const start = Math.abs(Math.round(data.droidX) - data.mouseX);

  if (start !== 1) {
    if (data.droidX < data.mouseX) {
      data.droidX += data.speed * acceleration;
    } else {
      data.droidX -= data.speed * acceleration;
    }

    styleTag();
    requestAnimationFrame(mouse); // Usar requestAnimationFrame para movimento suave
  }
}

addEventListener("mousemove", (event) => {
  data.mouseX = event.pageX;

  setTimeout(() => {
    mouse();
  }, 1000);
});
