let Celsius = 0
let farenheit = 0
basic.forever(function () {
    Celsius = input.temperature()
    farenheit = Celsius * 1.8 + 32
    if (farenheit >= -22 && farenheit <= 14) {
        basic.showString("Stay at home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (farenheit >= 15 && farenheit <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (farenheit >= 24 && farenheit <= 32) {
        basic.showString("Warning! You can only ski in the highest parts")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    }
})
