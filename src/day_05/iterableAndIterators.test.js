
describe('DAY 5: Iterable/Iterator', () => {

    it(`get the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorFunction;
        theIteratorFunction=string[Symbol.iterator];
        expect(theIteratorFunction).toBeInstanceOf(Object);
        expect(theIteratorFunction).toBeInstanceOf(Function);

    });

    it(`get the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorObject;
        theIteratorObject=string[Symbol.iterator]();
        expect(theIteratorObject).toBeInstanceOf(Object);

    });

    it(`get the string representation
        of the iterator object returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorObjectCoercedToString=string[Symbol.iterator]().toString();

        expect(theIteratorObjectCoercedToString).toBe('[object String Iterator]');

    });

    it(`get the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethod;

        theIteratorNextMethod=string[Symbol.iterator]().next;
        expect(theIteratorNextMethod).toBeInstanceOf(Object);
        expect(theIteratorNextMethod).toBeInstanceOf(Function);

    });

    it(`get at least 1 value returned by the next method returned by the iterator function of a String`, () => {
        let string = 'hello';
        let theIteratorNextMethodValue;

        theIteratorNextMethodValue=string[Symbol.iterator]().next().value;

        expect(theIteratorNextMethodValue).toBe('h');

    });

    it(`make your own test to get all values from a String using the iterable protocol`, () => {
        // I'm throwing and error to make it fail, remove it and add your code
        let string={
            value:"Oklahoma",
            [Symbol.iterator]:function () {
                let value=Object.values(this.value);
                let currentIndex=0;
                let hasValue=function (idx) {
                    return value[idx]?true:false
                }
                return{
                    next(){
                        if(hasValue(currentIndex)){
                            currentIndex++
                            return{
                                done:false,
                                value:value[currentIndex-1]
                            }
                        }
                        else{
                            return{
                                done:true,
                                value:undefined
                            }
                        }
                    }            
                }
            }
        };
        //Let's create our own. iterator
        let array=[...string]
        let expected=['O','k','l','a','h','o','m','a']
        let result= (array.length === expected.length) && array.every(
            (val,idx,arr)=>(
                array[idx]===expected[idx]
            )
        )

        expect(result).toBe(true);
    });
});
