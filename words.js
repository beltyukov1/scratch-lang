module.exports = {
    // Recognize print-related words
    PrintingWords: {
        // Log and discard top of stack
        "PRINT": function(terp) {
            if (terp.stack.length < 1) {
                throw 'Not enough items on stack';
            }
            var tos = terp.stack.pop();
            console.log("top of stack", tos);
        },
        // Log out contents of stack
        "PSTACK": function(terp) {
            console.log("terp stack", terp.stack)
        }
    },
    // Recognize certain math operations
    MathWords: {
        "+": function (terp) {
            if (terp.stack.length < 2) throw "Not enough items on stack";
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os + tos);
        },
        "-": function (terp) {
            if (terp.stack.length < 2) throw "Not enough items on stack";
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os - tos);
        },
        "*": function (terp) {
            if (terp.stack.length < 2) throw "Not enough items on stack";
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os * tos);
        },
        "/": function (terp) {
            if (terp.stack.length < 2) throw "Not enough items on stack";
            var tos = terp.stack.pop();
            var _2os = terp.stack.pop();
            terp.stack.push(_2os / tos);
        },
        "SQRT": function (terp) {
            if (terp.stack.length < 1) throw "Not enough items on stack";
            var tos = terp.stack.pop();
            terp.stack.push(Math.sqrt(tos));
        }
    }
};