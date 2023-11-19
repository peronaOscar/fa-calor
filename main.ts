input.onButtonPressed(Button.A, function () {
    if (input.temperature() > 22) {
        basic.showString("Fa calor")
    } else {
        basic.showString("Fa fred")
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    }
})
