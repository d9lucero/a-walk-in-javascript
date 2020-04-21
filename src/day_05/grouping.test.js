describe('DAY 5: Test Grouping', () => {

    it('change the code to make the second expect throw and error', () => {
        let a;
        let b;

        expect(a).toBe(undefined);
        expect(() => {if (b){
            return b;
        }
        else{
            throw 'b is not defined';
        }
    }).toThrow(`b is not defined`);

    });
});
