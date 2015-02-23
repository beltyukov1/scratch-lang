var Scratch = function() {
    var dictionary = {};

    this.stack = [];

    this.addWords = function(newDict) {
        for (var word in newDict) {
            dictionary[word.toUpperCase()] = newDict[word];
        }
    };

    this.run = function(text) {
        var lexer = new ScratchLexer(text);
        var word;
        var numVal;

        while (word = lexer.nextWord()) {
            word = word.toUpperCase();
            numVal = parseFloat(word);
            if (dictionary[word]) {
                dictionary[word](this);
            } else if (!isNaN(numVal)) {
                this.stack.push(numVal);
            } else {
                throw 'Unknown word';
            }
        }
    };
};

// Split input into words
var ScratchLexer = function(text) {
    var words = text.split(/\s+/);
    var next = 0;
    this.nextWord = function() {
        if (next >= words.length) {
            return null;
        }
        return words[next++];
    };
};

// Recognize print-related words
var PrintingWords = {
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
};

// Recognize certain math operations
var MathWords = {
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
};

module.exports = {
    Scratch: Scratch,
    PrintingWords: PrintingWords,
    MathWords: MathWords
};
