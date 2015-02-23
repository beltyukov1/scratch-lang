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

module.exports = Scratch;
