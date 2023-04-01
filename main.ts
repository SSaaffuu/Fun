function quest3 () {
    music.play(music.createSong(assets.song`suspense0`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`mimic`)
    adventure.addToTextlog("Hmmmmm, a suspicious looking chest appears in front of you. Might be treasure inside of some sort.")
    adventure.addToTextlog("Press (A) or press (space bar) to take risk and open the chest. The story will be interesting if you do.")
    adventure.addToTextlog("Press (B) to move on. The story will have a boring outcome.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        game.gameOver(true)
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
function quest1 () {
    music.play(music.createSong(assets.song`suspense0`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(img`
        f f 9 9 9 9 f f 9 f f 9 9 9 f f 
        2 f f f f 9 f 9 9 f 9 9 9 f 2 2 
        2 2 2 2 f f f f f f f 9 f 2 2 2 
        2 2 2 2 f f 2 2 2 2 f 9 f 2 2 2 
        f 2 2 2 f 2 7 2 2 2 2 f f 2 2 2 
        9 f 2 f 2 2 2 f f 2 2 2 f 2 2 f 
        9 f 2 f 2 d f 2 f 2 2 2 2 f f 9 
        9 9 f f 4 f 2 f 2 2 2 f 2 2 f 9 
        5 5 5 4 4 f f f 4 2 2 2 f 2 2 f 
        5 4 4 4 5 f f 4 4 4 2 2 2 f 2 f 
        5 5 5 9 f 2 f 4 4 4 4 2 2 f 2 2 
        9 9 9 f 2 2 f 4 4 4 2 2 2 f 2 2 
        5 e 5 e f f f f 4 2 2 2 f e f f 
        e 4 e e e e e f f f f f f f e e 
        5 6 5 e e f 2 2 f e f 2 2 2 f e 
        e 6 e e e e f f e e e f f f e e 
        `)
    adventure.addToTextlog("Oh no! There is a dragon in your path!")
    adventure.addToTextlog("Press (A) or press (space bar) to fight. The story will have a brave outcome if you join.")
    adventure.addToTextlog("Press (B) to turn and run. The story will not have a good outcome if you are a coward.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! You are brave!!!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        info.changeLifeBy(-1)
        quest3()
    }
}
function quest2 () {
    music.play(music.createSong(assets.song`minstrel0`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`lute`)
    adventure.addToTextlog("A traveling bard approaches and asks you to join his adventure.")
    adventure.addToTextlog("Press (A) or press (space bar) to join the fun. The story will have a good outcome if you join.")
    adventure.addToTextlog("Press (B) to turn and run. The story will not have a good outcome if you don't join.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! Enjoy your adventure.")
        game.gameOver(true)
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        game.over(false)
    }
}
info.onLifeZero(function () {
    game.over(false)
})
info.onScore(20, function () {
    game.gameOver(true)
})
info.setLife(5)
quest1()
