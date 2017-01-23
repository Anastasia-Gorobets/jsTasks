QUnit.test( "sumOfNumbers", function( assert ) {
    var x1=123;
    var x2=-57;
    assert.equal( 6, sumOfNumbers(x1), "Sum of numbers in 123 is 6" );
    assert.equal( 2,sumOfNumbers(x2), "Sum of numbers in -57 is 2" );
});