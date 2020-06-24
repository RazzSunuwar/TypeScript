// function doSomething(){
//     for (var i = 0; i< 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally ' + i);
// }
// doSomething();
// /*OUTPUT
// 0
// 1
// 2
// 3
// 4
// Finally: 5*/
var a;
var b;
var c;
var d;
var e;
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
