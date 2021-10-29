input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P3, 1)
    pins.digitalWritePin(DigitalPin.P3, 0)
})
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
