let numero = 0
input.onButtonPressed(Button.A, function () {
    numero = randint(1, 4)
    if (numero == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (numero == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (numero == 3) {
        basic.showIcon(IconNames.Scissors)
    } else if (numero == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    basic.pause(2000)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 E A B D F G C ", 120)
    music.playMelody("C5 E A B D F G C ", 120)
    music.playMelody("C5 E A B D F G C ", 120)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 A E G C B F D ", 120)
    music.playMelody("C5 A E G C B F D ", 120)
    music.playMelody("C5 A E G C B F D ", 120)
    basic.showIcon(IconNames.Sad)
    music.playMelody("C5 F G A B E D C ", 120)
    music.playMelody("C5 F G A B E D C ", 120)
    music.playMelody("C5 F G A B E D C ", 120)
    basic.showIcon(IconNames.Angry)
    music.playMelody("F D G B E C A C5 ", 120)
    music.playMelody("F D G B E C A C5 ", 120)
    music.playMelody("F D G B E C A C5 ", 120)
})
basic.forever(function () {
	
})
