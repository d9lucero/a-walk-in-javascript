describe('DAY 5: Test Exception Handling', () => {

    it('throw explicitly an error and on catch define a as true', () => {
        let a;
        try{
            throw "error" 
        }
        catch (e){
            a=true;
        }
        expect(a).toBe(true);

    });

    it('throw explicitly an error and assign the error to a, make the verification of the message', () => {
        let a;
        try{
            if (true){
                let e={
                    message:"Error: I'm an error"
                }
                throw e;
            }
        }
        catch(e){
            a=e.message;
        }
        expect(a.toString()).toBe(`Error: I'm an error`);

    });

    it('throw explicitly an error and assign the error to a, make the verification of type', () => {
        let a;
        try{
            if(true){
                throw new Error("I'm an error heyyy");
            }
        }
        catch(e){
            a=e;
        }
        expect(a).toBeInstanceOf(Error);

    });
});
