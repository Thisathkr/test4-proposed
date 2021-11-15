radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    250
    )
})
let light2 = 0
radio.setGroup(1)
basic.forever(function () {
    light2 = input.lightLevel()
    radio.sendNumber(light2)
})
