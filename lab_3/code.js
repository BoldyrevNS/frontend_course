function degree_of_two() {
    var i = 9;
    if (!(i & (i - 1))) {
        console.log('Это степень двойки');
    }
    else {
        console.log('Это не степень двойки');
    }
}
degree_of_two();
