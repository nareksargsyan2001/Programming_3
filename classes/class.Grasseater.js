var LivingCreature = require("./mayrclass");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;



    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    mul() {

        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newGrasseater = new GrassEater(newCell[0], newCell[1], this.index);
            grasseaterArr.push(newGrasseater);
            matrix[newCell[1]][newCell[0]] = 2;
            this.energy = 8;

        }

    }
    die() {
        for (var i in grasseaterArr) {

            if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                grasseaterArr.splice(i, 1);
                break;
            }
        }

    }
    move() {

        this.getNewCoordinates();
        var newCell = random(this.chooseCell(0));



        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[newCell[1]][newCell[0]] = 2;

        }



        this.energy--;
        if (this.energy <= 0) {
            this.die();

        }

    }
    eat() {

        this.getNewCoordinates();
        var newCell = random(this.chooseCell(1));
        var newCell1 = random(this.chooseCell(5));
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[newCell[1]][newCell[0]] = 2;


            for (var i in grassArr) {

                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                    grassArr.splice(i, 1);
                    break;
                }
            }



            this.energy++;

        }
        else if (newCell1) {
            for (var i in grasseaterArr) {

                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    grasseaterArr.splice(i, 1);
                    for (var i in AkulaArr) {
                        AkulaArr[i].energy += 6;
                        console.log(AkulaArr[i].energy);
                    }
                    break;
                }
            }
        }


        else {
            this.move();
        }
        if (this.energy >= 18) {
            this.mul();

        }


    }




}
