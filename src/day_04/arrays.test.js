
let hotPeppers = [
    'Madame Jeanette',
    'Scotch Bonnet',
    'White Habanero',
    'Habanero',
    'Fatalii',
    'Devil’s Tongue',
    'Tigerpaw',
    'Chocolate Habanero (aka Congo Black)',
    'Caribbean Red Habanero',
    'Red Savina',
    'Naga Morich (aka Dorset Naga)',
    'Trinidad Scorpion CARDI',
    'Bhut Jolokia Chocolate',
    'Bhut Jolokia (aka Ghost Pepper)',
    '7 Pot Chili ',
    'Gibraltar (aka Spanish Naga)',
    'Infinity Chili',
    'Naga Viper',
    '7 Pod Douglah (aka Chocolate 7 Pot)',
    'Trinidad Scorpion Butch T',
    'Trinidad Moruga Scorpion',
    'Carolina Reaper'
];

describe('DAY 4: Test Arrays', () => {

    it('Array to be instance of Array (literal)', () => {
        // use literal notation
        let array;
        array = [];
        expect(array).toBeInstanceOf(Array);
    });

    it('Array to be instance of Array (constructor)', () => {
        // use constructor
        let array;
        array = new Array(2);
        expect(array).toBeInstanceOf(Array);
    });

    it('Array to be instance of Object and Array', () => {
        // use any of the previous
        let array;
        array = [];
        expect(array).toBeInstanceOf(Array);
        expect(array).toBeInstanceOf(Object);
    });

    it('Initialize Array with length of 4 (literal)', () => {
        // use literal
        let array;
        array = [1, 2, 3, 4];
        expect(array.length).toBe(4);
    });

    it('Initialize Array with length of 4 (constructor)', () => {
        // use constructor
        let array;
        array = new Array(4);
        expect(array.length).toBe(4);
    });

    it('Initialize Array with length of 1 (constructor), and first entry value to be 4', () => {
        // use constructor
        let array;
        array = new Array(1);
        array[0] = 4;
        expect(array.length).toBe(1);
        expect(array[0]).toBe(4);
    });

    it('Mutate Array length to be 4', () => {
        let array = [];
        // use a mutator method to add elements
        array.push(
            1, 2, 3, 4
        );
        expect(array.length).toBe(4);
    });

    it('Mutate Array length to be 5', () => {
        let array = [42, 42, 42, 42, 42, 42];
        // use a mutator method to remove elements
        array.splice(array.length - 2, 1);
        expect(array.length).toBe(5);
    });

    it('Remove the first element of the array', () => {
        let array = ['a', 'b', 'c', 'd'];
        // use a method to remove it
        array.shift();
        expect(array.indexOf('a')).toBe(-1);
    });

    it('Remove the last element of the array', () => {
        let array = ['a', 'b', 'c', 'd'];
        // use a method to remove it
        array.pop();
        expect(array.indexOf('d')).toBe(-1);
    });

    it('Remove an element off from inner boundaries of the array', () => {
        let array = ['a', 'b', 'c', 'd'];
        // use a method to remove it
        array.splice(1, 1);
        expect(array.indexOf('b')).toBe(-1);
    });

    it('Create a new array containing the values of 2 different arrays (method)', () => {
        let array1 = ['a', 'b', 'c', 'd'];
        let array2 = [1, 2, 3, 4, 5];
        // use a method to create it
        let array3;
        // array3 = [...array2, ...array1];
        array3 = [...array2];
        array1.forEach(
            (val, idx, arr) => {
                array3.push(val);
            }
        );
        expect(array3).toEqual([1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']);
    });

    it('Create a new array containing the values of 2 different arrays (operator)', () => {
        let array1 = ['a', 'b', 'c', 'd'];
        let array2 = [1, 2, 3, 4, 5];
        // use an operator to create it
        let array3;
        array3 = [...array1, ...array2];
        expect(array3).toEqual(['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]);
    });

    it('Create a string from an array (method)', () => {
        let array = ['a', 'b', 'c', 'd'];
        // use a method to create it
        let string;
        string = '';
        // array.forEach(
        //     (val, idx, arr) => {
        //         if (string) {
        //             string += '-' + val;
        //         }
        //         else {
        //             string += val;
        //             string += idx;
        //         }
        //     }
        // );
        string = array.join('-');
        expect(string).toBe('a-b-c-d');
    });

    it('Create an array from a string (method)', () => {
        let string = 'a-b-c-d';
        // use a method to create it
        let array;
        array = string.split('-');
        expect(array).toEqual(['a', 'b', 'c', 'd']);
    });

    it('Create an array from a string (operator)', () => {
        let string = 'abcd';
        // use an operator to create it
        let array;
        array = [...string];
        expect(array).toEqual(['a', 'b', 'c', 'd']);
    });

    it('Reverse the a string using the learned techniques', () => {
        let string = 'abcd';
        // use available method for strings an arrays
        let reversed;
        reversed = string.split('').reverse().join('');

        expect(reversed).toEqual('dcba');
    });

    it('Copy the values of array a to array b using an iteration', () => {
        let a = [1, 2, 'a', 'b', 'c', [6, 7]];
        let b = [];

        /**
         * 
         * iterate over a ( you can use an iteration statement or an array method )
         * validate each value has been correctly copied
         * 
         */

        //! add your code here
        a.forEach(
            (val, idx, arr) => {
                b.push(val);
            }
        );
        // ? why a IS NOT b? explain: Because they have different references, they're distinct objects.
        expect(a).not.toBe(b);
        // ? but IS EQUAL to b? explain: because their values _are_ equal
        expect(a).toEqual(b);
        // ? then why a[5] ACTUALLY IS b[5]: Because we're comparing values and thus a[5] has the same value as b[5]
        expect(a[5]).toBe(b[5]);

    });

    it('Find an element by value using an array method', () => {
        let array = hotPeppers;
        let myFavorite = 'Habanero';
        // use an array method
        let found;
        // found = array.filter(
        //     (val, idx, arr) => {
        //         return val === myFavorite;
        //     }
        // )[0];
        found = array[array.indexOf(myFavorite)];
        expect(found).toBe(myFavorite);
    });

});
