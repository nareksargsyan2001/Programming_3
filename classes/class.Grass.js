var LivingCreature = require("./mayrclass");
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;

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


        this.multiply++;
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(5));
        if (newCell && this.multiply >= 1) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
        else if (newCell1 && this.multiply >= 1) {



            for (var i in grassArr) {

                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {

                    grassArr.splice(i, 1);
                    for (var i in AkulaArr) {
                        if (newCell1[0] == AkulaArr[i].x && newCell1[1] == AkulaArr[i].y) {

                            AkulaArr[i].energy += 1;
                            console.log(AkulaArr[i].energy);
                            break;

                        }
                    }

                }
            }

            this.multiply = 0;
        }
    }


}
