QUnit.test( "reverse", function( assert ) {
    var x1=123;
    var x2=-123;
    assert.equal( 321, reverse(x1), "123 after reverse is 321" );
    assert.equal( -321, reverse(x2), "-123 after reverse is -321" );
});