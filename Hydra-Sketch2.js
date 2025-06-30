noise()
	.blend(osc()
		.modulate(noise()), () => Math.cos(((time / 10) + 1) / 2))
.modulateKaleid(osc(20).modulate(noise(3)))
	.colorama(() => Math.sin(((time / 25) + 1) / 2)*0.25)
.contrast(()=>(Math.sin(time/3+1)/2)*0.4)
.add(gradient().rotate(()=>time/10),0.2)

	.out()
