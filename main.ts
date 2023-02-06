input.onButtonPressed(Button.A, function () {
    contador = contador + 1
    if (sprite.get(LedSpriteProperty.X) == 2) {
        basic.showNumber(contador)
        basic.pause(1000)
        contador = 0
    }
})
let sprite: game.LedSprite = null
let contador = 0
contador = 0
sprite = game.createSprite(2, 2)
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    basic.pause(100)
})
