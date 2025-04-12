// Declare variables
let brightness = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="⚡"
namespace customBlocks {
    /**
     * execute code when the correct events are done
     */
    //% block="on start sequence"
    export function onStartSequence(handler: () => void): void {
        basic.forever(function () {
            if (input.magneticForce(Dimension.Strength) > 60) {
                brightness = 0
                for (let index = 0; index < 4; index++) {
                    brightness += 2
                    strip.showColor(neopixel.hsl(0, 0, brightness))
                    basic.pause(200)
                }
                basic.pause(5000)

                if (input.logoIsPressed()) {
                    handler() // Executes the code snapped into the block
                }
                else()=>{
                    strip.showColor(neopixel.hsl(0, 0, 0))
                }

            } else {
                strip.showColor(neopixel.hsl(0, 0, 0))
            }
        })
    }
}