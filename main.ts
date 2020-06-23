function doSomething(){
    for (var i = 0; i< 5; i++) {
        console.log(i);
    }
    console.log('Finally ' + i);
}
doSomething();

/*OUTPUT
0
1
2
3
4
Finally: 5*/