// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

//console.log(globalVar); // Output: "I'm a global variable"
//console.log(globalLet); // Output: "I'm also global, but scoped with let"
//console.log(globalConst); // Output: "I'm a global constant"

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";

    //console.log(blockVar);
    //console.log(blockLet);
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";

    console.log(functionVar);
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError
{
    {
        var testVar = "I'm a var";
        let testlet = "I'm a let";
        const testConst = "I'm const";
        console.log(testVar);
        console.log(testlet);
        console.log(testConst);

        testVar = "new value for var";
        testlet = "new value for let";
        //testConst = "new value for testConst";
        console.log(testVar);
        console.log(testlet);
        console.log(testConst);
    }

    testVar = "new value for var outside ";
    testlet = "new value for let outside";
    testConst = "new value for testConst outside";
    console.log(testVar);
    console.log(testlet);
    console.log(testConst);
}