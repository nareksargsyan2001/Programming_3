
class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
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

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

                            AkulaArr[i].energy += 0.1;
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
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;


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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
                        AkulaArr[i].energy += 0.3;
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
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 1;
        this.index = index;
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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
            for (var i in grasseaterArr) {

                if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    grasseaterArr.splice(i, 1);
                    for (var i in AkulaArr) {
                        AkulaArr[i].energy += 0.3;
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
class Averich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 15;
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
    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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


    die()
    {
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


                    }
                    else if (this.energy < AkulaArr[i].energy) {
                        this.energy = 0;
                        matrix[this.y][this.x] = 0;
                        this.die();


                    }
                }
                if (this.energy >= 100) {
                    this.energy
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
class Akula {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 0;
    }




}                         