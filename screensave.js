input.onGesture(Gesture.ThreeG, function () {
    savetype = "RAIN"
})
input.onGesture(Gesture.TiltLeft, function () {
    savetype = "DOTS"
})
input.onGesture(Gesture.TiltRight, function () {
    savetype = "SPED"
})
input.onButtonPressed(Button.A, function () {
    screensave = true
})
input.onButtonPressed(Button.B, function () {
    screensave = false
})
input.onGesture(Gesture.Shake, function () {
    savetype = "SPIN"
})
let Rain3: game.LedSprite = null
let Rain2: game.LedSprite = null
let Rain1: game.LedSprite = null
let screensave = false
let savetype = ""
savetype = "!"
basic.forever(function () {
    if (screensave == true) {
        if (savetype == "!") {
            basic.showString("MOVE")
        }
        if (savetype == "DOTS") {
            led.plot(Math.randomRange(0, 2), 0)
            basic.pause(200)
            led.plot(Math.randomRange(0, 4), 1)
            basic.pause(200)
            led.plot(Math.randomRange(0, 2), 2)
            basic.pause(200)
            led.plot(Math.randomRange(0, 4), 3)
            basic.pause(200)
            led.plot(Math.randomRange(0, 2), 4)
            basic.pause(200)
            led.plot(Math.randomRange(2, 4), 0)
            basic.pause(200)
            led.plot(Math.randomRange(2, 4), 2)
            basic.pause(200)
            led.plot(Math.randomRange(2, 4), 4)
            basic.pause(500)
            basic.clearScreen()
        }
        if (savetype == "SPIN") {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . #
                `)
            basic.pause(Math.randomRange(10, 200))
        }
        if (savetype == "SPED") {
        	
        }
        if (savetype == "RAIN") {
            Rain1 = game.createSprite(Math.randomRange(0, 2), 0)
            Rain2 = game.createSprite(Math.randomRange(2, 3), 0)
            Rain3 = game.createSprite(Math.randomRange(3, 4), 0)
            Rain1.turn(Direction.Right, 90)
            Rain2.turn(Direction.Right, 90)
            Rain3.turn(Direction.Right, 90)
            for (let i = 0; i < 4; i++) {
                Rain1.move(1)
                basic.pause(Math.randomRange(10, 300))
                Rain3.move(1)
                basic.pause(Math.randomRange(10, 300))
                Rain2.move(1)
                basic.pause(Math.randomRange(10, 300))
            }
        }
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
