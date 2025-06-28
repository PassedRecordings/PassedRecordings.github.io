let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas.height = Math.min(window.innerHeight / 2, 720);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

bpm = 42
s0.initImage("https://i.postimg.cc/8kW29KNv/4f09cf863f9b10aca2b2b14b0f3e1a09-500-1911190430.jpg")
s1.initImage("https://i.postimg.cc/MThrtfGV/8a1753b400b5de920d302f05ad7faf34-3055667503.jpg")
src(s0)
.scale(1.3)
  .modulate(
  osc(4))
.color(
  [1,0,0,1],
  [0,1,0,1],
  [0,0,1,1]
  )
  .mult(shape(20,1).modulate(noise(15)).mask(src(s1),0.1))

  .out(o0)
