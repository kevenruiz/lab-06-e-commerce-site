// IMPORT MODULES under test here:
import { calcItemTotal } from '../utils.js';


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
