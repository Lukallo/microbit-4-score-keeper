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
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Score_A)
    basic.pause(2000)
    basic.showNumber(Score_B)
})
let Score_B = 0
let Score_A = 0
Score_A = 0
Score_B = 0
