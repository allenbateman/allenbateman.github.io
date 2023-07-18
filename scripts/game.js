window.addEventListener('load',function(){
    //canvas setup
    const canvas = document.getElementById('game_canvas');
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Entity{
        constructor(game){
            this.game  = game;
            this.width = 16;
            this.height = 8;
            this.x = 0;
            this.y = 0;
            this.speedY = 0;
            this.speedX = 0;
            this.image = document.getElementById('invader');
            this.frameX = 19;
            this.farmeY = 1;
            this.frameW = 16;
            this.frameH = 8;
        }
        update(){
            this.y += this.speedY;
            this.x += this.speedX;
        }
        draw(context){
            context.drawImage(this.image, this.frameX * this.width , this.farmeY * this.height,this.width,this.height,this.x,this.y,this.width,this.height);
        }
        remove() {
            const index = this.game.entities.indexOf(this);
            if (index !== -1) {
                this.game.entities.splice(index, 1);
            }
        }
    }
    class Game{
        constructor(width,height,entities){
            this.width = width;
            this.height = height;
            this.entities = entities;
            //instantiate new entities
            for (let i = 0; i < 50; i++) {
                const entity = new Entity(this);
                entity.x = Math.random() * this.width;
                entity.y = Math.random() * this.height;
                entity.speedX = Math.random() * 2 - 1; // Random horizontal speed
                entity.speedY = Math.random() * 2 - 1; // Random vertical speed
                this.entities.push(entity);
            }
        }
        
        update(){
            entities.forEach(ent => {
                ent.update();
                // Wrap entities around the screen
                if (ent.x > this.width) {
                    ent.x = 0;
                } else if (ent.x < 0) {
                    ent.x = this.width;
                }
                if (ent.y > this.height) {
                    ent.y = 0;
                } else if (ent.y < 0) {
                    ent.y = this.height;
                }
            });
        }

        draw(context){
            entities.forEach(ent => {
                ent.draw(context);
            });
        }
    }

    canvas.addEventListener('click', function(event) {
        const mouseX = event.clientX - canvasXOffset;
        const mouseY = event.clientY - canvasYOffset;

        for (let i = entities.length - 1; i >= 0; i--) {
            const entity = entities[i];
            if (
                mouseX >= entity.x &&
                mouseX <= entity.x + entity.width &&
                mouseY >= entity.y &&
                mouseY <= entity.y + entity.height
            ) {
                entity.remove();
                break; // Exit the loop after removing one entity
            }
        }
    });

    const entities = [];
    const game = new Game(canvas.width,canvas.height,entities);

    function animate(){
        context.clearRect(0,0, canvas.width,canvas.height);
        game.update();
        game.draw(context);
        requestAnimationFrame(animate);
    }
    animate();
});

