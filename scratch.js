var Scratch = function() {
    var dictionary = {};

    this.stack = [];

    this.addWords = function(newDict) {
        for (var word in newDict) {
            dictionary[word.toUpperCase()] = newDict[word];
        }
    };

    this.define = function(word, code) {
        dictionary[word.toUpperCase()] = code;
    };

    this.run = function(text) {
        this.lexer = new ScratchLexer(text);
        var word;
        var numVal;

        while (word = this.lexer.nextWord()) {
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
function ScratchLexer(text) {
    var words = text.split(/\s+/);
    var next = 0;
    this.nextWord = function() {
        if (next >= words.length) {
            return null;
        }
        return words[next++];
    };
}

module.exports = Scratch;
