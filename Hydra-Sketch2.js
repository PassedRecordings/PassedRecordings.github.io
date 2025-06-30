s0.initImage("https://i.postimg.cc/rmDMWZCs/Passed-Records-Biege-Single.png")
src(s0).colorama(10).saturate(() => Math.sin(time)*10).rotate(({time})=>(time)/2).modulate(osc(25,0.1,0.5).kaleid(50).scale(({time})=>Math.sin(time*1)*0.5+1).modulate(noise(0.08,0.06)),0.05).out(o0)
