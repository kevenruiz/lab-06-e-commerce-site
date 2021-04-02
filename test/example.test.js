// IMPORT MODULES under test here:
import { calcItemTotal, calcOrderTotal } from '../utils.js';
import { cart } from '../Cart/cart-data.js';





const test = QUnit.test;

test('Calculate items subtotal', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 60;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(10, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Calculate total items', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 189;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
