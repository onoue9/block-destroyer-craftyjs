const background = Crafty.asset('background', 'assets/background1.jpg');

const blocks = [
    { x: 30, y: 10, w: 100, h: 10, hits: 1 },
    { x: 140, y: 10, w: 100, h: 10, hits: 1 },
    { x: 250, y: 10, w: 100, h: 10, hits: 1 },
    { x: 360, y: 10, w: 100, h: 10, hits: 1 },
    { x: 470, y: 10, w: 100, h: 10, hits: 1 },
    { x: 30, y: 30, w: 100, h: 10, hits: 2},
    { x: 140, y: 30, w: 100, h: 10, hits: 2 },
    { x: 250, y: 30, w: 100, h: 10, hits: 1 },
    { x: 360, y: 30, w: 100, h: 10, hits: 2 },
    { x: 470, y: 30, w: 100, h: 10, hits: 2 },
    { x: 30, y: 50, w: 100, h: 10, hits: 3 },
    { x: 140, y: 50, w: 100, h: 10, hits: 2 },
    { x: 250, y: 50, w: 100, h: 10, hits: 2 },
    { x: 360, y: 50, w: 100, h: 10, hits: 2 },
    { x: 470, y: 50, w: 100, h: 10, hits: 3 },
    { x: 30, y: 70, w: 100, h: 10, hits: 3 },
    { x: 140, y: 70, w: 100, h: 10, hits: 3 },
    { x: 250, y: 70, w: 100, h: 10, hits: 2 },
    { x: 360, y: 70, w: 100, h: 10, hits: 3 },
    { x: 470, y: 70, w: 100, h: 10, hits: 3 },
    { x: 30, y: 90, w: 100, h: 10, hits: 3 },
    { x: 140, y: 90, w: 100, h: 10, hits: 3 },
    { x: 250, y: 90, w: 100, h: 10, hits: 3 },
    { x: 360, y: 90, w: 100, h: 10, hits: 3 },
    { x: 470, y: 90, w: 100, h: 10, hits: 3 }
]

Crafty.init(600, 400);

Crafty.defineScene("StartMenu", function() {
    Crafty.background('#FFFFFF url(assets/background1.jpg)');
    Crafty.e("2D, DOM, Text")
    .attr({ w:200, h:20, x: 200, y: 120 })
    .text("Block Destroyer")
    .textAlign("center")
    .textFont({
        size: '20px',
    })
    .textColor('rgb(255, 255, 255)');
    
    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:200, h:20, x: 200, y: 220 })
    .text("Press Space to Start")
    .textAlign("center")
    .textFont({
        size: '15px',
    })
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.SPACE) {
            Crafty.enterScene("Game");
        }
    })
    .textColor('rgb(255, 255, 255)');

    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:250, h:20, x: 180, y: 260 })
    .text("Use A and D keys do move the paddle")
    .textAlign("center")
    .textFont({
        size: '13px',
    })
    .textColor('rgb(255, 255, 255)');
})

Crafty.defineScene("GameOver", function() {
    Crafty.background('#FFFFFF url(assets/background1.jpg)');
    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:200, h:20, x: 200, y: 120 })
    .text("Game Over")
    .textAlign("center")
    .textFont({
        size: '20px',
    })
    .textColor('rgb(255, 255, 255)')
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.SPACE) {
            Crafty.enterScene("Game");
        }
        if (e.key == Crafty.keys.ESC) {
            Crafty.enterScene("StartMenu");
        }
    });;

    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:250, h:20, x: 180, y: 260 })
    .text("Press Space to Restart")
    .textAlign("center")
    .textFont({
        size: '13px',
    })
    .textColor('rgb(255, 255, 255)');

    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:250, h:20, x: 180, y: 280 })
    .text("Or ESC to go to Start Menu")
    .textAlign("center")
    .textFont({
        size: '13px',
    })
    .textColor('rgb(255, 255, 255)');
})

Crafty.defineScene("Win Game", function() {
    Crafty.background('#FFFFFF url(assets/background2.jpg)');
    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:200, h:20, x: 200, y: 120 })
    .text("You Win")
    .textAlign("center")
    .textFont({
        size: '20px',
    })
    .textColor('rgb(255, 255, 255)')
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.SPACE) {
            Crafty.enterScene("Game");
        }
        if (e.key == Crafty.keys.ESC) {
            Crafty.enterScene("StartMenu");
        }
    });;

    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:250, h:20, x: 180, y: 260 })
    .text("Press Space to Restart")
    .textAlign("center")
    .textFont({
        size: '13px',
    })
    .textColor('rgb(255, 255, 255)');

    Crafty.e("2D, DOM, Text, Keyboard")
    .attr({ w:250, h:20, x: 180, y: 280 })
    .text("Or ESC to go to Start Menu")
    .textAlign("center")
    .textFont({
        size: '13px',
    })
    .textColor('rgb(255, 255, 255)');
})

Crafty.defineScene("Game", function() {
    Crafty.background('#FFFFFF url(assets/background2.jpg)');

    //Paddles
    Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    .color('#4deeea')
    .attr({ x: 250, y: 360, w: 100, h: 10 })
    .multiway(200, { A: -180, D: 0 });

    //Blocks
    blocks.forEach((block) => {
        block.hits = Math.ceil(Math.random() * 3);
        Crafty.e("Block, 2D, DOM, Color, Collision")
        //Crafty.e(`Block, 2D, DOM, Color, Collision`)
        .attr({ x: block.x, y: block.y, w: block.w, h: block.h })
        .bind('UpdateFrame', function () {
            if (block.hits === 3)
                this.color('#f000ff')
            if (block.hits === 2)
                this.color('#001eff')
            if (block.hits === 1)
                this.color('#74ee15')
        })
        .onHit('Ball', function() {
            Crafty("Score").each(function () {
                this.text(`${this.scores += 10} Scores`)
            })
            block.hits -= 1;
            if (block.hits <= 0) {
                this.destroy();
            }
            if (Crafty("Block").get().length <= 0)
                Crafty.enterScene("Win Game");
        })
    })


    //Ball
    Crafty.e("Ball, 2D, DOM, Color, Collision")
    .color('#ffe700')
    .attr({ x: 300, y: 150, w: 15, h: 15,
            dX: 2,
            dY: -2 })
    .bind('UpdateFrame', function () {
        //hit floor or roof
        if (this.y <= 0)
            this.dY *= -1;

        if (this.y >= 390) {
            Crafty("Life").each(function () {
                this.text(--this.lives + " Lives")
                if (this.lives <= 0) {
                    Crafty.scene("GameOver");
                }
            })
            this.x = 300;
            this.y = 300;
            this.dY = -2;
        }

        // hit left or right boundary
        if (this.x >= 590) {
            this.dX = -2
        }
        if (this.x <= 10) {
            this.dX = 2
        }

        this.x += this.dX;
        this.y += this.dY;
    })
    .onHit('Paddle', function () {
        this.dY *= -1.1;
        if (this.dY >= 10) {
            this.dY = 10;
        }
        if (this.dY <= -10) {
            this.dY = -10;
        }
    })
    .onHit('Block', function () {
        this.dY*= -1.1;
    });

    //Score boards
    Crafty.e("Life, DOM, 2D, Text")
    .attr({ x: 20, y: 380, w: 100, h: 10, lives: 3 })
    .text("3 Lives")
    .textFont({
        size: "15px"
    })
    .textColor('rgb(255, 255, 255)');
    Crafty.e("Score, DOM, 2D, Text")
    .attr({ x: 515, y: 380, w: 100, h: 10, scores: 0 })
    .text("0 Score")
    .textFont({
        size: "15px"
    })
    .textColor('rgb(255, 255, 255)');
});

Crafty.enterScene('StartMenu');
 
