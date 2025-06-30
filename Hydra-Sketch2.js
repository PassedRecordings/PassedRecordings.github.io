noise(100,0.1).add(noise(100,0.9))
	.blend(osc()
		.modulate(noise(99,0.6)), () => Math.cos(((time / 10) + 1) / 2))
.modulateKaleid(osc(20).modulate(noise(3)))
	.colorama(() => Math.sin(((time / 25) + 1) / 2)*0.25)
.contrast(()=>((Math.sin(time/4)+1.4)*0.25))
.add(gradient().rotate(()=>time/10),0.5)

	.out(o0)
