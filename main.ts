let peopleWalked = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        peopleWalked += 1
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("No. of ppl walked in building: ")
        basic.showNumber(peopleWalked)
    }
})
