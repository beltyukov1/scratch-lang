module.exports = {
    // Recognize print-related words
    PrintingWords: {
        // Log and discard top of stack (TOS)
        "PRINT": function(terp) {
            if (terp.stack.length < 1) {
                throw 'Not enough items on stack';
            }
            var tos = terp.stack.pop();
            console.log("Top of stack:", tos);
        },
        // Log contents of stack
        "PSTACK": function(terp) {
            console.log("Stack:", terp.stack, "<- TOS")
        }
    },
    // Recognize certain math operations
    MathWords: {
        "+": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os + tos);
        },
        "-": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os - tos);
        },
        "*": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os * tos);
        },
        "/": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os / tos);
        },
        "SQRT": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            terp.stack.push(Math.sqrt(tos));
        }
    },
    StackWords: {
        //Duplicate TOS
        "DUP": function(terp) {
            if (terp.stack.length < 1) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            terp.stack.push(tos);
            terp.stack.push(tos);
        },
        // Throw away TOS
        "DROP": function(terp) {
            if (terp.stack.length < 1) {
                throw "Not enough items on stack";
            }
            terp.stack.pop();
        },
        // Exchange positions of TOS and second item on stack (2OS)
        "SWAP": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(tos);
            terp.stack.push(_2os);
        },
        // Copy 2OS on TOS
        "OVER": function(terp) {
            if (terp.stack.length < 2) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os);
            terp.stack.push(tos);
            terp.stack.push(_2os);
        },
        // Bring 3rd item on stack (3OS) to top
        "ROT": function(terp) {
            if (terp.stack.length < 3) {
                throw "Not enough items on stack";
            }
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            var _3os = terp.stack.pop();
            terp.stack.push(_2os);
            terp.stack.push(tos);
            terp.stack.push(_3os);
        }
    }
};