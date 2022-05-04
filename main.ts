enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const Three = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Three, function (sprite, otherSprite) {
    game.showLongText("¿Aprender habilidad física: CORRER? ", DialogLayout.Top)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e . b f b 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f b 4 4 e e 4 4 2 f . f 4 f 
        . f 2 2 2 2 2 2 b b f f 4 f 
        . f b 4 4 4 4 4 4 b b 4 b f 
        . f 4 4 4 4 4 b 4 4 f f f . 
        . f 4 f f f 4 f f 4 f . . . 
        . f f . . f f . . f f . . . 
        `)
    animation.runImageAnimation(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e . b f b 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f b 4 4 e e 4 4 2 f . f 4 f 
        . f 2 2 2 2 2 2 b b f f 4 f 
        . f b 4 4 4 4 4 4 b b 4 b f 
        . f 4 4 4 4 4 b 4 4 f f f . 
        . f 4 f f f 4 f f 4 f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e b f b . 
        f 4 4 f 4 4 f 4 4 f f 4 f . 
        f b 4 4 e e 4 4 2 b f 4 f . 
        . f 2 2 2 2 2 2 4 b 4 b f . 
        . f 4 4 4 4 4 4 4 f f f . . 
        . f 4 b 4 f f f 4 f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e . b f b 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f b 4 4 b e 4 4 2 b f f 4 f 
        . f 2 2 2 2 2 2 4 b b 4 b f 
        . f 4 4 4 4 4 4 4 f f f f . 
        . . f 4 b d f 4 f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        b f b . e 4 f 4 4 4 4 f 4 e 
        f 4 f . f 4 4 f 4 4 f 4 4 f 
        f 4 f . f 2 4 4 e e 4 4 b f 
        f 4 f f b b 2 2 2 2 2 2 f . 
        f b 4 b b 4 4 4 4 4 4 b f . 
        . f f f 4 4 b 4 4 4 4 4 f . 
        . . . f 4 f f 4 f f f 4 f . 
        . . . f f . . f f . . f f . 
        `],
    100,
    false
    )
    mySprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        b f b . e 4 f 4 4 4 4 f 4 e 
        f 4 f . f 4 4 f 4 4 f 4 4 f 
        f 4 f . f 2 4 4 e e 4 4 b f 
        f 4 f f b b 2 2 2 2 2 2 f . 
        f b 4 b b 4 4 4 4 4 4 b f . 
        . f f f 4 4 b 4 4 4 4 4 f . 
        . . . f 4 f f 4 f f f 4 f . 
        . . . f f . . f f . . f f . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e . b f b 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f b 4 4 e e 4 4 2 f . f 4 f 
        . f 2 2 2 2 2 2 b b f f 4 f 
        . f b 4 4 4 4 4 4 b b 4 b f 
        . f 4 4 4 4 4 b 4 4 f f f . 
        . f 4 f f f 4 f f 4 f . . . 
        . f f . . f f . . f f . . . 
        `],
    100,
    false
    )
    mySprite.setImage(img`
        e e e . . . . e e e . . . . 
        c 4 4 c . . c 4 4 c . . . . 
        c b 4 4 f f 4 4 b c . . . . 
        c 3 b 4 4 b 4 b 3 c . . . . 
        f b 3 4 4 4 4 3 b f . . . . 
        e 4 4 4 4 4 4 4 4 e . . . . 
        e 4 f 4 4 4 4 f 4 e . b f b 
        f 4 4 f 4 4 f 4 4 f . f 4 f 
        f b 4 4 e e 4 4 2 f . f 4 f 
        . f 2 2 2 2 2 2 b b f f 4 f 
        . f b 4 4 4 4 4 4 b b 4 b f 
        . f 4 4 4 4 4 b 4 4 f f f . 
        . f 4 f f f 4 f f 4 f . . . 
        . f f . . f f . . f f . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        b f b . e 4 f 4 4 4 4 f 4 e 
        f 4 f . f 4 4 f 4 4 f 4 4 f 
        f 4 f . f 2 4 4 e e 4 4 b f 
        f 4 f f b b 2 2 2 2 2 2 f . 
        f b 4 b b 4 4 4 4 4 4 b f . 
        . f f f 4 4 b 4 4 4 4 4 f . 
        . . . f 4 f f 4 f f f 4 f . 
        . . . f f . . f f . . f f . 
        `)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        b f b . e 4 f 4 4 4 4 f 4 e 
        f 4 f . f 4 4 f 4 4 f 4 4 f 
        f 4 f . f 2 4 4 e e 4 4 b f 
        f 4 f f b b 2 2 2 2 2 2 f . 
        f b 4 b b 4 4 4 4 4 4 b f . 
        . f f f 4 4 b 4 4 4 4 4 f . 
        . . . f 4 f f 4 f f f 4 f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        . b f b e 4 f 4 4 4 4 f 4 e 
        . f 4 f f 4 4 f 4 4 f 4 4 f 
        . f 4 f b 2 4 4 e e 4 4 b f 
        . f b 4 b 4 2 2 2 2 2 2 f . 
        . . f f f 4 4 4 4 4 4 4 f . 
        . . . . f 4 f f f 4 b 4 f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c 4 4 c . . c 4 4 c 
        . . . . c b 4 4 f f 4 4 b c 
        . . . . c 3 b 4 b 4 4 b 3 c 
        . . . . f b 3 4 4 4 4 3 b f 
        . . . . e 4 4 4 4 4 4 4 4 e 
        b f b . e 4 f 4 4 4 4 f 4 e 
        f 4 f . f 4 4 f 4 4 f 4 4 f 
        f 4 f f b 2 4 4 e b 4 4 b f 
        f b 4 b b 4 2 2 2 2 2 2 f . 
        . f f f f 4 4 4 4 4 4 4 f . 
        . . . . . f 4 f d b 4 f . . 
        . . . . . f f f f f f . . . 
        `],
    100,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999996699999999999999999999999999999999999999999966999999999999999999999999999999999999999996669999999999999999999999999999999999999999
    9999999999999999999999999999996699999999999999999999999999999999999999999966999999999999999999999999999999999999999996669999999999999999999999999999999999999999
    9999999999999999999999999999996769999999999999999999999999999999999999999967699999999999999999999999999999999999999996676999999999999999999999999999999999999999
    9966999999999999999999999999996769999999999996699999999999999999999999999967699999999999966999999999999999999999999996676999999999999669999999999999999999999999
    9967699999999999999999999966996769999999999996766999999999999999999996669967699999999999967699999999999999999999966996676999999999999676999999999999999999999669
    9996769999966699999999669967696769999699666999677699999669999999996696776967699969996669996769999996699999999966967696676999699666699967699999966999999999669676
    9996776999676696699996769967696769966699967699677769996769666999967696776967699669999676996776999967696699999676967696676996699967769967769999676966999966769676
    6699676999676666769967769967766776677699996769966769996766677699677696777667766769999967699676999967666769996776967766677667699996676996769999676667699677769677
    7769677696776666776967669966766776677666999676966776967766677769676696667667766766669996769677669677666776696766966766677667666999967696776966776667769677669667
    7776667696766666676677666666776776777676999677666676967666666766776666667767767767669996776667669676666676667766666776677677676999967766676966766666766777666667
    7776667696766666676677666666776776777676999677666676967666666766776666667767767767669996776667669676666676667766666776677677676999967766676966766666766777666667
    6667767667766666677676666666776776766677699666777676677666666776766666667767767667776996667767666776666677767666666776677676677699966677676677766666776766666667
    6677667667667776667676677766676777766667696667766676676677666676766776666767777666776966677667666766776667767667766676677776667696666776676677667766676766677666
    7776667777666677667776776666677777766667766677666677776667766677767766666777777666777666776667777766677667777677666677777776667766667766677777666776677766776666
    7776767777666667667766766667677777666666766677677677776666766677667666776777776666667666776767777766667667776676667677777766666766667767677777666676677666766676
    7766777776677767767767766677667777666766776776677777766776777677677667776677776676667767766777777667767767776776677667777766766776677667777766677677677677766776
    7766777776776666767767766676667777666776776776677777767766677677677667666677776677667767766777777677666767776776676667777766776776677667777766776667677677766766
    66667776767666667b776776bb766677b7666676776766677776767666677b776776b7666677b766676677676667776676766667b7776776b7666777b766676776676667776766766667b7767776b766
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eebbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbeebbbbbb
    bbbbbbbbbbebbbbeeeebbbbbbbbbebbbbbbbbeeeeebbbbbbbbbbbbebbbeeeeebbbbbbbbbebbbbbbbeeeeeebbbbbbbbbbbbebbbeeeeebbbbbbbbebbbbbbbbeeeeebbbbbbbbbbbbbebbbeeeebbbbbbbbbe
    bbbbbeebbbbbeeeeeeeeebbeeebbbbbebbeeeeebeeeebbbbbeebbbbbeeeeeeeeebbeebbbbbbebbeeeebbeeeebbbbeebbbbbbeeeeeeeeebbeebbbbbbebbeeeebeeeeebbbbeebbbbbbeeeeeeeebbbeebbb
    eebbbeebbbbeeebeeeeeeebeeebbbbbbbeeeeeeeeeeeebbbbeebbbbeebeeeeeeeebeebbbbbbbbeeeeeeeeeeeebbbeebbbbbeebeeeeeeeebeebbbbbbbbeeeeeeeeeeeebbbeebbbbbeebeeeeeeeebeebbb
    eeebbbbbbbeeeeeeeeeeeeebbbbbbbbbeebbbeeeeeeeeebbbbbbbbeeeeeeeeeeeeebbbbbbbbbeebbeeeeeeeeeebbbbbbbbeeeeeeeeeeeeebbbbbbbbbeebbeeeeeeeeeebbbbbbbbeeeeeeeeeeeeebbbbb
    eeeeebbbeeeeeeeeeeebbeeeeebbbbeeeebbbeeeeeeeeeeeebbbeeeeeeeeeeebbeeeebbbbbeeeebbeeeeeeeeeeeebbbbeeeeeeeeeeebbeeeebbbbeeeeebbeeeeeeeeeeeebbbeeeeeeeeeeebbeeeeebbb
    eeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeee
    bbbeeeeeebbeeeeeeeeeeeebeeeeeeebeeeeeeeeeeeebbeeeeeeebbeeeeeeeeeeeebeeeeeeebeeeeeeeeeeeebbeeeeeeebbeeeeeeeeeeeebeeeeeeebeeeeeeeeeeeebbeeeeeebbbeeeeeeeeeeeebeeee
    bbbeeeeeebbeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeebbeeeeeeebbeeeeeeeeeeeeeeebbbeeeeeeeeeeeeeeebbeeeeeeebbeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeebbeeeeeebbbeeeeeeeeeeeeeeebb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeefeeeeeeeeeeeefeeeeeeeeee
    eeefffffeeeeeeeeeeefeeeffffeeeeeeeeeeefeeeeffffeeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeeeeeeefeeeffffeeeeeeeefeeee
    effffeffffeeeeffeeeeeffffffffeeeeffeeeeeefffffffffeeeeffeeeeeffffffffeeffeeeeefeeffffeffffeeeeffeeeeeffffffffeeffeeeeefeeffffefffeeefeffeeeeeffffffffeeffeeeeefe
    fffffffffffeeeffeeeeffffffffffeeeffeeeeeffeffffffffeeeffeeeeffefffffffeffeeeeeeefffffffffffeeeffeeeeffefffffffeffeeeeeeeffffffffffeeeeffeeeeffefffffffeffeeeeeee
    feefffffffffeeeeeeeffffffffffffeeeeeeeefffffffffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffeeeeeeeffffffffffffeeeeeeeeffeeffffffffeeeeeeeeffffffffffffeeeeeeeef
    feefffffffffffeeeffffffffffefffffeeeefffffffffffffffffeeeffffffffffeeffffeeeeffffeefffffffffffeeeffffffffffeeffffeeeeffffeeffffffefffeeeeffffffffffeeffffeeeefff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffffffffeeffffffffffffffffffffffffffffffffefffffeefffffffffff
    ffffffffffeeffffffeeffffffffffeeffffffeeffffffffffeeffffffeefffffffffffeffffffefffffffffffeeffffffeefffffffffffeffffffefffffffffffeefffffefffffffffffffeffffffef
    ffffffffffeeffffffeeffffffffffeeffffffeeffffffffffeeffffffeeffffffffffffffeeffffffffffffffeeffffffeeffffffffffffffeeffffffffffffffeeffeeffffffffffffffffffeeffff
    ffffffffffffffefffffffffffffffffffefffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffeeffffffffffffffffffeeffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c 4 4 c . . c 4 4 c . . . . 
    c b 4 4 f f 4 4 b c . . . . 
    c 3 b 4 4 b 4 b 3 c . . . . 
    f b 3 4 4 4 4 3 b f . . . . 
    e 4 4 4 4 4 4 4 4 e . . . . 
    e 4 f 4 4 4 4 f 4 e . b f b 
    f 4 4 f 4 4 f 4 4 f . f 4 f 
    f b 4 4 e e 4 4 2 f . f 4 f 
    . f 2 2 2 2 2 2 b b f f 4 f 
    . f b 4 4 4 4 4 4 b b 4 b f 
    . f 4 4 4 4 4 b 4 4 f f f . 
    . f 4 f f f 4 f f 4 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(40, 62)
controller.moveSprite(mySprite, 50, 0)
scene.cameraFollowSprite(mySprite)
let Three = sprites.create(img`
    ................................
    ............f...................
    ............8f..8..f.......ff...
    ......f......8..f..f....fff.....
    .....8......f8..f.f....ff.......
    fff..8f.....f8..f.f...ff..ff....
    ...f8f8f....f8f..8....88...f....
    .....ff8f....ff..88..f8....8f...
    .......f88...fff.f8f.8f....ff...
    .......fffff..ff..ff.8f...88fff.
    .........ff8f.fff.ff88f..f8ff...
    ...........fffffff.f8f..ffff....
    ....88888f..ffffffffff.f8f......
    ...f....f8ff88fffff8fffff.......
    ...f......8fff88fffff88f........
    ..............f88fffffff........
    ...............88ffffff.........
    ...............f88ffff..........
    ................88ffff..........
    ................88fff...........
    ................88fff...........
    ................88fff...........
    ................88fff...........
    ................88fff...........
    ................88fff...........
    ...............f8ffff...........
    ...............88ffff...........
    ..............888fffff..........
    .............f8fffffff..........
    .........f88f88f.fffffff........
    ......8ff8f.fff..f8f.ff.ff......
    ....f8f....f......f...fff.ffff..
    `, SpriteKind.Three)
Three.setPosition(10, 42)
Three.changeScale(1, ScaleAnchor.Middle)
tiles.setCurrentTilemap(tilemap`level1`)
