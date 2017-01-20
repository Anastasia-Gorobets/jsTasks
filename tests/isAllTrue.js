QUnit.test( "isAllTrue", function( assert ) {
    var allNumbers = [1, 2, 4, 5, 6, 7, 8],
        someNumbers = [1, 2, 'привет', 4, 5, 'мир', 6, 7, 8],
        noNumbers = ['это', 'массив', 'без', 'чисел'],
        emptyArray=[];

    function isNumber(val) {
        return typeof val === 'number';
    }

    assert.ok(isAllTrue(allNumbers, isNumber));
    assert.notOk(isAllTrue(someNumbers, isNumber));
    assert.notOk(isAllTrue(noNumbers, isNumber));

    assert.throws(
        function() {
            isAllTrue(emptyArray, isNumber);
        },
        function( err ) {
            return err.toString() === 'Array is empty';
        }
    );
});