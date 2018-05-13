var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public/index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            matrix[y][x] = Math.round(random(1));
        }
    }
    while (l <= 10) {
        var x = Math.floor(random(n));
        var y = Math.floor(random(m));
        matrix[y][x] = 3;

        l++;
    }
    while (k <= 50) {
        var x = Math.floor(random(n));
        var y = Math.floor(random(m));
        matrix[y][x] = 2;

        k++;
    }
    while (akula <= 3) {
        var x = Math.floor(random(n));
        var y = Math.floor(random(m));
        matrix[y][x] = 5;

        akula++;
    }
    while (av <= 6) {
        var x = Math.floor(random(n));
        var y = Math.floor(random(m));
        matrix[y][x] = 4;

        av++;
    }
    /*matrix = [
        [0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 2, 0, 0],
        [0, 0, 1, 3, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0]
    ];*/



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            fill(255, 255, 255);
            rect(x * side, y * side, side, side);

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2);
                grasseaterArr.push(gre);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                GishatichArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var aver = new Averich(x, y, 4);
                AverichArr.push(aver);
            }
            else if (matrix[y][x] == 5) {
                var akul = new Akula(x, y, 5);
                AkulaArr.push(akul);
            }
        }
    }

    console.log(matrix);
    console.log(grassArr);
    console.log(grasseaterArr);
    console.log(GishatichArr);
     for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var t in grasseaterArr) {

        grasseaterArr[t].eat();
    }
    for (var i in GishatichArr) {

        GishatichArr[i].eat();
    }
    for (var i in AverichArr) {

        AverichArr[i].eat();
    }

