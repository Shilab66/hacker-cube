kaboom({
  global: true,
  fullscreen: true,
})

let playerType = '1front';
let infoNext = false;
let keyDoor1 = false;
let level = "level1";

loadSprite("background1", "background1.png");
loadSprite("background2", "background2.jpg");
loadSprite("background3", "background3.png");

loadSprite("spike", "spike.png");
loadSprite("block", "block.png");
loadSprite("key", "keyBlock.png");
loadSprite("portal", "portal.png");
loadSprite("cube", "transparentCube.png");

loadSprite("1front", "1front.png");
loadSprite("2front", "2front.png");
loadSprite("3front", "3front.png");
loadSprite("4front", "4front.png");


scene("splash", () => {
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
    ]);

    const title = add([
        pos(12, 12),
        text("HackerCube", 32),
        pos(width()/2,height()/ 2),
        origin("center")
    ]);
    add([
        pos(12, 12),
        text("Press 'c' to continue", 17),
        pos(width()/2,height()/ 2 + (title.height+ 20)),
        origin("center")
    ]);
    keyPress("c", () => {
        go("controls");
    });
})

scene("controls", () => {
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
    ]);

    const title = add([
        pos(0, 50),
        text("Controls", 32),
        pos(width()/2,75),
        origin("center")
    ]);
    add([
        pos(12, 12),
        text("Press 'c' to continue", 17),
        pos(width()/2,150),
        origin("center")
    ]);
    add([
        pos(12, 12),
        text("Press space or up to jump", 17),
        pos(width()/2,225),
        origin("center")
    ]); 
    add([
        pos(12, 12),
        text("Press left and right to move", 17),
        pos(width()/2,300),
        origin("center")
    ]); 
    add([
        pos(12, 12),
        text("Press left and right to move", 17),
        pos(width()/2,300),
        origin("center")
    ]); 
    add([
        pos(12, 12),
        text("To move on, get to the portal.", 17),
        pos(width()/2,375),
        origin("center")
    ]); 

    keyPress("c", () => {
        go("choose");
    });
})

scene("choose", async() => {
    //Key Presses
    keyPress("c", () => {
        go("information");
    });
    keyPress("1", () => {
        playerType = "1front"
        add([
            pos(20, 20),
            text("Player picked!", 15),
        ]);
    });
    keyPress("2", () => {
        playerType = "2front"
        add([
            pos(20, 20),
            text("Player picked!", 15),
        ]);
    });
    keyPress("3", () => {
        playerType = "3front"
        add([
            pos(20, 20),
            text("Player picked!", 15),
        ]);
    });
    keyPress("4", () => {
        playerType = "4front"
        add([
            pos(20, 20),
            text("Player picked!", 15),
        ]);
    });
    //Background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
    ]);
    //Blue Sprites
    add([
        rect(width()/2-20, height()/2-20),
        pos(10, 10),
        color(0, 0.40, 0.45),
    ]);
    add([
        pos((width()/2-20)/2-20,30),
        origin('center'),
        text("Nia", 20),
    ]);
    add([
        pos((width()/2-20)/2-20,55),
        origin('center'),
        text("female", 15),
    ]);
    add([
        pos((width()/2-20)/2-20,255),
        origin('center'),
        text("Press '1' to choose", 15),
    ]);

    //Red Sprites
    add([
        rect(width()/2-20, height()/2-20),
        pos(width()/2+10, 10),
        color(0, 0.40, 0.45),
    ]);
    add([
        pos(width()-width()/4-20,30),
        origin('center'),
        text("Axle", 20),
    ]);
    add([
        pos(width()-width()/4-20,55),
        origin('center'),
        text("male", 15),
    ]);
    add([
        pos(width()-width()/4-20,255),
        origin('center'),
        text("Press '2' to choose", 15),
    ]);
    
    //Yellow Sprites
    add([
        rect(width()/2-20, height()/2-20),
        pos(10, height()/2+10),
        color(0, 0.40, 0.45),
    ]);
    add([
        pos((width()/2-20)/2-20,height()/2+30),
        origin('center'),
        text("Hale", 20),
    ]);
    add([
        pos(((width()/2-20)/2-20),height()/2+55),
        origin('center'),
        text("female", 15),
    ]);
    add([
        pos(((width()/2-20)/2-20),height()/2+255),
        origin('center'),
        text("Press '3' to choose", 15),
    ]);

    //Green Sprites
    add([
        rect(width()/2-20, height()/2-20),
        pos(width()/2+10, height()/2+10),
        color(0, 0.40, 0.45),
    ]);
    add([
        pos(width()-width()/4-20,height()/2+30),
        origin('center'),
        text("Arian", 20),
    ]);
    add([
        pos(width()-width()/4-20,height()/2+55),
        origin('center'),
        text("male", 15),
    ]);
    add([
        pos(width()-width()/4-20,height()/2+255),
        origin('center'),
        text("Press '4' to choose", 15),
    ]);

    await wait(5)
    add([
        pos(20, 50),
        text("psst, press c", 15),
    ]);  
})

scene("information", async() => {
    //Background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
    ]);
    //Continue/Skip
    keyPress("c", () => {
        go("level1")
    });
    //Text 1
    const text1 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("Oh! Ello there player.", 35),
    ]);
    await wait(3);
    destroy(text1);
    //Text 2
    const text2 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("Welcome to The Hacker Verse!", 35),
    ]);
    await wait(3);
    destroy(text2);
    //Text 3 & 4
    const text3 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("The Hacker Verse is a place of peace", 35),
    ]);
    const text4 = add([
        pos(width()/2,height()/2+45),
        origin('center'),
        text("for all virtualers!", 35),
    ]);
    await wait(3);
    destroy(text3);
    destroy(text4);
    //Text 5 & 6
    const text5 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("But slowly, a virus dubbed The Glitch", 35),
    ]);
    const text6 = add([
        pos(width()/2,height()/2+45),
        origin('center'),
        text("has been been taking over", 35),
    ]);
    await wait(3);
    destroy(text5);
    destroy(text6);
    //Text 7 & 8
    const text7 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("It is destroying every game", 35),
    ]);
    const text8 = add([
        pos(width()/2,height()/2+45),
        origin('center'),
        text("one by one", 35),
    ]);
    await wait(3);
    destroy(text7);
    destroy(text8);
    //Text 9
    const text9 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("We need a hero, like you!", 35),
    ]);
    await wait(3);
    destroy(text9);
    //Text 10
    const text10 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("Are you ready to fight The Glitch?", 35),
    ]);
    await wait(3);
    destroy(text10);
    //Text 11 & 12 & 13
    const text11 = add([
        pos(width()/2,height()/2),
        origin('center'),
        text("And take your place on the", 35),
    ]);
    const text12 = add([
        pos(width()/2,height()/2+45),
        origin('center'),
        text("pantheon of legends?", 35),
    ]);
    await wait(3);
    const text13 = add([
        pos(width()/2,height()/2+150),
        origin('center'),
        text("Press 'c' to continue", 15),
    ]);
})

scene("level1", async() => {
    layers([
        "background",
        "game",
    ], "game");

    //Background
    add([
        sprite("background1"),
        scale(width()/1200, height()/671),
        layer("bg"),
    ]);
    //player
    const player = add([
        sprite(playerType),
        pos(80, 80),
        origin("center"),
        scale(0.7),
        body(),
    ]);
    //map
    const map = addLevel([
        "                                                          ",
        "                                                          ",
        "                                                          ",
        "                                                          ",
        "                                               = =======  ",
        "                                                 =        ",
        "                                        =        =        ",
        "                                       =         =        ",
        "                                      x=         =        ",
        "                                     =           =        ",
        "                                    =            =        ",
        "                                   =             =        ",
        "                                  =              =        ",
        "                                                 =        ",
        "                                        x        =        ",
        "                               ===================        ",
        "                              =       -                   ",
        "                    =====     =       -            y      ",
        "             =====            =       -           ===     ",
        "                      x       =       -                   ",
        "               x    =====     =       -                   ",
        "             =====            =       -                   ",
        "                              =       -                   ",
        "                              =   !   -    x              ",
        "==========================================================",
    ], {
        width: 35,
        height: 35,

        '=': [
            scale(0.13),
            sprite('block'),
            solid()
        ],
        '-': [
            scale(0.13),
            sprite('block'),
            solid(),
            "door1"
        ],
        'x': [
            sprite("spike"),
            origin("center"),
            scale(0.7),
            body(),
            "enemy"
        ],
        'y': [
            sprite("key"),
            origin("center"),
            scale(0.7),
            body(),
            "key1"
        ],
        '!': [
            sprite("portal"),
            origin("center"),
            scale(0.7),
            body(),
            "exit"
        ]
    })

    keyPress('space', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyPress('up', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyDown('left', () => {player.move(-200, 0)})
    keyDown('right', () => {player.move(200, 0)})

    player.collides('enemy', (p, e) => {
        go('gameover')
    })
    collides('player', 'enemy', (p, e) => {
        go('gameover')
    })

    player.collides('key1', (p, k) => {
        debug.objCount();
        keyDoor1 = true;
        destroyAll('key1');
        destroyAll("door1")
    })

    player.collides('exit', (p, e) => {
        go('level2')
    })
})

scene("level2", async() => {
    level = "level2";

    layers([
        "background",
        "game",
    ], "game");

    //Background
    add([
        sprite("background2"),
        scale(width()/1280, height()/720),
        layer("background"),
    ]);
    //player
    const player = add([
        sprite(playerType),
        pos(80, 80),
        origin("center"),
        scale(0.7),
        body(),
    ]);
    //map
    const map = addLevel([
        " =========================================================",
        "                                                          ",
        "                                                          ",
        "                                                          ",
        " ======  ==   ==   =   ==   ==                            ",
        "       xx  xxx  xxx xxx  xxx xxxx                         ",
        " ================================                         ",
        "                                                          ",
        "                                                          ",
        "                                                          ",
        "                       ==============                     ",
        "                                                          ",
        "                                                          ",
        "                                                          ",
        "                   ==                                     ",
        "                    y              ========               ",
        "                   ==              -      =               ",
        "                                   -  !   =               ",
        "                                   ========               ",
        "                                  =                       ",
        "                                 =                        ",
        "                                                          ",
        "                                                          ",
        "                         x                                ",
        "==========================================================",
    ], {
        width: 35,
        height: 35,

        '=': [
            scale(0.13),
            sprite('block'),
            solid()
        ],
        '-': [
            scale(0.13),
            sprite('block'),
            solid(),
            "door1"
        ],
        'x': [
            sprite("spike"),
            origin("center"),
            scale(0.7),
            body(),
            "enemy"
        ],
        'y': [
            sprite("key"),
            origin("center"),
            scale(0.7),
            body(),
            "key1"
        ],
        '!': [
            sprite("portal"),
            origin("center"),
            scale(0.7),
            body(),
            "exit"
        ]
    })

    keyPress('space', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyPress('up', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyDown('left', () => {player.move(-200, 0)})
    keyDown('right', () => {player.move(200, 0)})

    player.collides('enemy', (p, e) => {
        go('gameover')
    })
    collides('player', 'enemy', (p, e) => {
        go('gameover')
    })

    player.collides('key1', (p, k) => {
        debug.objCount();
        keyDoor1 = true;
        destroyAll('key1');
        destroyAll("door1")
    })

    player.collides('exit', (p, e) => {
        go('level3')
    })
})

scene("level3", async() => {
    level = "level3";

    layers([
        "background",
        "game",
    ], "game");

    //Background
    add([
        sprite("background3"),
        scale(width()/923, height()/528),
        layer("background"),
    ]);
    //player
    const player = add([
        sprite(playerType),
        pos(80, 80),
        origin("center"),
        scale(0.7),
        body(),
    ]);
    //map
    const map = addLevel([
        "      =     =                                             ",
        "      =     =                                             ",
        "      =     =                                             ",
        "      =     ====                                          ",
        "      =        =                                          ",
        "      =       ==                                          ",
        "      =   ===                                             ",
        "      =   =                                               ",
        "      =   =                                               ",
        "      =   =                                               ",
        "      =  ==             ==========                        ",
        "      =  =             =        =                         ",
        "         =             =        =      =                  ",
        "         =  =          =        =      =                  ",
        "      ====  =          =      ! =  xxxx=                  ",
        "      =     =         ==------===  =======================",
        "      =        x      =   =                               ",
        "      =        =      =   =                               ",
        "      =              =   ==                               ",
        "      =              =   =       =                        ",
        "               =     =   =       =                        ",
        "                     =  ==       =                        ",
        "        =            =           =                        ",
        "xxxxxxxxxxxxxxxxxxxxx=          y                         ",
        "==========================================================",
    ], {
        width: 35,
        height: 35,

        '=': [
            scale(0.13),
            sprite('block'),
            solid()
        ],
        '-': [
            scale(0.13),
            sprite('block'),
            solid(),
            "door1"
        ],
        'x': [
            sprite("spike"),
            origin("center"),
            scale(0.7),
            body(),
            "enemy"
        ],
        'y': [
            sprite("key"),
            origin("center"),
            scale(0.7),
            body(),
            "key1"
        ],
        '!': [
            sprite("cube"),
            origin("center"),
            scale(0.3),
            body(),
            "exit"
        ]
    })

    keyPress('space', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyPress('up', () => {
        if (player.grounded())
        player.jump(550)
    })
    keyDown('left', () => {player.move(-200, 0)})
    keyDown('right', () => {player.move(200, 0)})

    player.collides('enemy', (p, e) => {
        go('gameover')
    })
    collides('player', 'enemy', (p, e) => {
        go('gameover')
    })

    player.collides('key1', (p, k) => {
        debug.objCount();
        keyDoor1 = true;
        destroyAll('key1');
        destroyAll("door1")
    })

    player.collides('exit', (p, e) => {
        go('finish')
    })
})

scene('gameover', () => {
    //Background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
        "background",
    ]);
    add([
        text("You died!", 32),
        pos(width() / 2, height() / 2 - 20),
        origin('center'),
    ])

    add([
        text("Press space to try again.", 16),
        pos(width() / 2, height() / 2 + 20),
        origin('center'),
    ])

    keyPress('space', () => {
        go(level)
    })
})

scene('finish', () => {
    //Background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0.20, 0.20, 0.20),
        "background",
    ]);
    add([
        text("You won!", 32),
        pos(width() / 2, height() / 2 - 20),
        origin('center'),
    ])

    add([
        text("Thanks for playing my game.", 16),
        pos(width() / 2, height() / 2 + 20),
        origin('center'),
    ])

    keyPress('space', () => {
        go('level1')
    })
})


start("splash");