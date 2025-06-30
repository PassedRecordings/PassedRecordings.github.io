s0.initImage("https://i.postimg.cc/rmDMWZCs/Passed-Records-Biege-Single.png")
b = 0
update = () => b += 0.05 * Math.sin(time/30)

osc(16,0.1,0.1).hue(0.5,0.7,()=>b)
  .saturate(()=>b/5)
  .pixelate(16,40).modulateKaleid(src(s0),64).out()
