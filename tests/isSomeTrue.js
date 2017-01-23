QUnit.test( "isSomeTrue", function( assert ) {
    var allNumbers = [1, 2, 4, 5, 6, 7, 8],
        someNumbers = [1, 2, 'привет', 4, 5, 'мир', 6, 7, 8],
        noNumbers = ['это', 'массив', 'без', 'чисел'],
        emptyArray=[];

    function isNumber(val) {
        return typeof val === 'number';
    }
    assert.ok(isSomeTrue(allNumbers, isNumber));
    assert.ok(isSomeTrue(someNumbers, isNumber));
    assert.notOk(isSomeTrue(noNumbers, isNumber));
    assert.throws(
        function() {
            isSomeTrue(emptyArray, isNumber);
        },
        new Error("Array is empty"),
        "test passed"
    );

});