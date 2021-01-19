let puntos = 0
let x = 2
let y = 2
let objetoX = randint(0, 4)
let objetoY = randint(0, 4)
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A))) {
        basic.clearScreen()
        if (input.rotation(Rotation.Roll) > 5) {
            x += 1
        }
        if (input.rotation(Rotation.Roll) < -5) {
            x += -1
        }
        if (input.rotation(Rotation.Pitch) > 5) {
            y += 1
        }
        if (input.rotation(Rotation.Pitch) < -5) {
            y += -1
        }
        if (x > 4) {
            x = 4
        }
        if (x < 0) {
            x = 0
        }
        if (y > 4) {
            y = 4
        }
        if (y < 0) {
            y = 0
        }
        led.plot(x, y)
        led.plot(objetoX, objetoY)
        music.playTone(75 * y + 75 * x, music.beat(BeatFraction.Half))
    } else {
        if (x == objetoX && y == objetoY) {
            music.playMelody("C5 B A G F E D C ", 496)
            puntos += 1
        } else {
            music.playTone(262, music.beat(BeatFraction.Double))
            puntos += -1
        }
        objetoX = randint(0, 4)
        objetoY = randint(0, 4)
        basic.showNumber(puntos)
        basic.pause(500)
    }
})
