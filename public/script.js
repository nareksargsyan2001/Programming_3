var matrix = [];
var n = 50;
var m = 50;
var side = 10;
var grassArr = [];
var grasseaterArr = [];
var GishatichArr = [];
var AverichArr = [];
var AkulaArr = [];
var l = 0;
var k = 0;
var av = 0;
var akula = 0;
function setup() {
    frameRate(5);
    createCanvas(n * side + 1, m * side + 1);
    background('#acacac');

    
}









function draw() {
    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill(0, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('grey');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
   
}

