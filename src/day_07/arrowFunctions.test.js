
describe('DAY 7: arrow functions', () => {

    it(`complete the function code to pass the test`, () => {

        let myArrowFunction = (a,b) => ({
            first:a,
            second:b
        });

        expect(myArrowFunction(1, 2)).toEqual({ first: 1, second: 2 });

    });

});
