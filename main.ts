input.onButtonPressed(Button.A, function () {
    Count += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (Count))
})
input.onButtonPressed(Button.B, function () {
    Count += -2
})
input.onGesture(Gesture.Shake, function () {
    Count = 0
})
let Count = 0
Count = 0
basic.forever(function () {
	
})
