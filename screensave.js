// interupt inputs
input.onGesture(Gesture.LogoDown, function () {
    savetype = "Rain"
})
input.onGesture(Gesture.TiltLeft, function () {
    savetype = "Dots"
})
input.onGesture(Gesture.TiltRight, function () {
    savetype = "Sped"
})
input.onButtonPressed(Button.A, function () {
    screensave = true
})
input.onButtonPressed(Button.B, function () {
    screensave = false
})
input.onGesture(Gesture.Shake, function () {
    savetype = "Spin"
})
let Rain3: game.LedSprite = null
let Rain2: game.LedSprite = null
let Rain1: game.LedSprite = null
let screensave = false
let savetype = ""
let oneX = Math.randomRange(0, 4)
let oneY = Math.randomRange(0, 4)
let twoX = Math.randomRange(0, 4)
let twoY = Math.randomRange(0, 4)
let thrX = Math.randomRange(0, 4)
let thrY = Math.randomRange(0, 4)
let forX = Math.randomRange(0, 4)
let forY = Math.randomRange(0, 4)
savetype = "!"
basic.forever(function () {
    if (screensave == true) {
        if (savetype == "!") {
            basic.showString("MOVE")
        }
        if (savetype == "Dots") {
            // plots 8 'dots' at random points on the x range and
            // fixed on the y
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
        if (savetype == "Spin") {
            // spin animation
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
            // randomized interval
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
            // randomized interval
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            // randomized interval
            basic.pause(Math.randomRange(10, 200))
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . #
                `)
            // randomized interval
            basic.pause(Math.randomRange(10, 200))
        }
        if (savetype == "Sped") {
            while (true) {
                led.plot(oneX, oneY)
                led.plot(twoX, twoY)
                led.plot(thrX, thrY)
                led.plot(forX, forY)
                basic.pause(500)
                led.plot(oneX + 1, oneY)
                led.plot(twoX + 1, twoY)
                led.plot(thrX + 1, thrY)
                led.plot(forX + 1, forY)
                basic.pause(500)
                led.plot(oneX + 2, oneY)
                led.plot(twoX + 2, twoY)
                led.plot(thrX + 2, thrY)
                led.plot(forX + 2, forY)
                basic.pause(500)
                led.unplot(oneX, oneY)
                led.unplot(twoX, twoY)
                led.unplot(thrX, thrY)
                led.unplot(forX, forY)
                oneX = Math.randomRange(0, 4)
                oneY = Math.randomRange(0, 4)
                twoX = Math.randomRange(0, 4)
                twoY = Math.randomRange(0, 4)
                thrX = Math.randomRange(0, 4)
                thrY = Math.randomRange(0, 4)
                forX = Math.randomRange(0, 4)
                forY = Math.randomRange(0, 4)
                basic.clearScreen()
            }
        }
        if (savetype == "Rain") {
            // creat Sprites for Rain variables
            Rain1 = game.createSprite(Math.randomRange(0, 2), 0)
            Rain2 = game.createSprite(Math.randomRange(2, 3), 0)
            Rain3 = game.createSprite(Math.randomRange(3, 4), 0)
            // re-oreant the rains direction
            Rain1.turn(Direction.Right, 90)
            Rain2.turn(Direction.Right, 90)
            Rain3.turn(Direction.Right, 90)
            // 4 frame loop for the falling rain
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
        // on button be wake up blank screen
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
