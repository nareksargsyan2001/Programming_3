
var LivingCreature = require("./mayrclass");
class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 1;

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
            var newGrasseater = new Gishatich(newCell[0], newCell[1], this.index);
            GishatichArr.push(newGrasseater);
            matrix[newCell[1]][newCell[0]] = 3;

        }
    }
    die() {
        for (var i in GishatichArr) {

            if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                matrix[this.y][this.x] = 0;
                GishatichArr.splice(i, 1);
                break;
            }
        }

    }

    move() {
        this.getNewCoordinates();
        var newCell = random(this.chooseCell(1));

        if (newCell) {
            matrix[this.y][this.x] = 1;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[newCell[1]][newCell[0]] = 3;

        }

        for (var i in grassArr) {

            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                grassArr.splice(i, 1);
                break;
            }
        }


        if (this.energy <= 0) {
            this.die();

        }
    }
    eat() {
        this.getNewCoordinates();
        var newCell = random(this.chooseCell(2));
        var newCell1 = random(this.chooseCell(5));
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[newCell[1]][newCell[0]] = 3;


            for (var i in grasseaterArr) {

                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {

                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
            this.energy++;
        }
        else if (newCell1) {
            for (var i in GishatichArr) {

                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    GishatichArr.splice(i, 1);
                    for (var i in AkulaArr) {
                        AkulaArr[i].energy += 15;
                        
                        console.log(AkulaArr[i].energy);

                    }
                    break;
                }
            }
        }

        else {
            this.move();
        }
        if (this.energy >= 60) {
            this.energy = 1;
            this.mul();

        }
    }
}
