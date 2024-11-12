input.onButtonPressed(Button.A, function () {
    Score_A += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Score_A += 1
    Score_B += 1
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Score_B += 1
    basic.showLeds(`
        # # # . .
        # . . # .
        # . # . .
        # . . # .
        # # # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
let Score_A = 0
let Score_B = 0
