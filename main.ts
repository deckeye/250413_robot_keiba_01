let スピード = 0
function 後退モードに切り替え () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        モーターテスト5秒()
    } else if (receivedNumber == 5) {
        停止モード()
    } else if (receivedNumber == 2) {
        前進モードに切り替え()
    } else if (receivedNumber == 1) {
        左折モードに切り替え()
    } else if (receivedNumber == 3) {
        右折モードに切り替え()
    } else if (receivedNumber == 11) {
        スピード += 100
    } else if (receivedNumber == 8) {
        後退モードに切り替え()
    } else {
    	
    }
    pins.analogWritePin(AnalogPin.P1, スピード)
    pins.analogWritePin(AnalogPin.P2, スピード)
})
input.onGesture(Gesture.TiltRight, function () {
    led.enable(true)
    radio.sendNumber(3)
    basic.showNumber(3)
    led.enable(false)
})
function 左折モードに切り替え () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(8)
})
input.onGesture(Gesture.TiltLeft, function () {
    led.enable(true)
    radio.sendNumber(1)
    basic.showNumber(1)
    led.enable(false)
})
input.onGesture(Gesture.LogoUp, function () {
    led.enable(true)
    radio.sendNumber(2)
    basic.showNumber(2)
    led.enable(false)
})
function 停止モード () {
    pins.digitalWritePin(DigitalPin.P14, 0)
}
input.onGesture(Gesture.Shake, function () {
    led.enable(true)
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(11)
    led.enable(false)
})
function 右折モードに切り替え () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    radio.sendNumber(5)
    basic.showNumber(2)
    led.enable(false)
    停止モード()
})
function モーターテスト5秒 () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P2, 1023)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
function 前進モードに切り替え () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, スピード)
    pins.analogWritePin(AnalogPin.P2, スピード)
    basic.pause(1000)
    if (0 < スピード) {
        スピード += -1
    }
})
basic.forever(function () {
    スピード += -1
})
