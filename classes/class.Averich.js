var LivingCreature = require("./mayrclass");
module.exports = class Averich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
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

        var newCell = random(this.chooseCell(1));

        if (newCell) {
            var newAverich = new Averich(newCell[0], newCell[1], this.index);
            AverichArr.push(newAverich);
            matrix[newCell[1]][newCell[0]] = 4;

        }
    }

    move() {
        this.getNewCoordinates();
        var newCell = random(this.chooseCell(1));

        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[newCell[1]][newCell[0]] = 4;

        }

        for (var i in grassArr) {

            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                grassArr.splice(i, 1);
                break;
            }
        }

    }


    die() {
        for (var i in AverichArr) {

            if (this.x == AverichArr[i].x && this.y == AverichArr[i].y) {
                matrix[this.y][this.x] = 0;
                AverichArr.splice(i, 1);
                break;
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var newCell1 = random(this.chooseCell(2));
        var newCell2 = random(this.chooseCell(3));
        var newCell = random(this.chooseCell(5));
        if (newCell1) {
            matrix[this.y][this.x] = 0;
            this.x = newCell1[0];
            this.y = newCell1[1];
            matrix[newCell1[1]][newCell1[0]] = 4;


            for (var i in grasseaterArr) {

                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {

                    grasseaterArr.splice(i, 1);
                    break;
                }
            }



            this.energy++;
        }
        else if (newCell2) {
            matrix[this.y][this.x] = 0;
            this.x = newCell2[0];
            this.y = newCell2[1];
            matrix[newCell2[1]][newCell2[0]] = 4;


            for (var i in GishatichArr) {

                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {

                    GishatichArr.splice(i, 1);
                    break;
                }
            }



            this.energy++;
        }
        else if (newCell) {
            for (var i in AkulaArr) {
                if (AkulaArr[i].x == newCell[0] && AkulaArr[i].y == newCell[1]) {
                    if (this.energy > AkulaArr[i].energy) {
                        matrix[this.y][this.x] = 0;
                        this.x = newCell[0];
                        this.y = newCell[1];
                        matrix[newCell[1]][newCell[0]] = 4;
                        AkulaArr.splice(i, 1);
                        break;


                    }
                    else if (this.energy < AkulaArr[i].energy) {
                        this.energy = 0;
                        matrix[this.y][this.x] = 0;
                        this.die();


                    }
                }
                
            }
            
        }

        else {
            this.move();
        }
        if (this.energy >= 200) {
            this.energy = 1;
            this.mul();

        }
    }
}
