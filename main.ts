basic.forever(function () {
    if (input.temperature() >= 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Fred")
    }
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    } else {
    	
    }
})
