describe('DAY 6: Test closure', () => {

    it(`function a to change variable b through a closure (side effect)`, () => {

        /**
         * 
         * @returns {undefined}
         */
        let b = 5;
        function a () {
            // add the code to operate with the free variable
            b++;
        }
        a();

        expect(b).toBe(6);
    });

    it(`function c to change variable a and b through a closure (side effect)`, () => {

        let a = 9;
        let b = function () {};
        expect(typeof a).toBe('number');
        expect(b).toBeInstanceOf(Function);
        /**
        *          
        * @returns {undefined}
        */
       function c () {
            a = function () {};
            b = [];
        }
        c();
         expect(typeof a).toBe('function');
         expect(b).toBeInstanceOf(Array);
        });

});
