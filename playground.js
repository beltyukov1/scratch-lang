var words = require('./words');
var Scratch = require('./scratch');

var terp = new Scratch();
terp.addWords(words.PrintingWords);
terp.addWords(words.MathWords);
terp.addWords(words.StackWords);
terp.addWords(words.VariableWords);

// Check print words
//console.log('---PRINT---');
//terp.run("10 pstack");
//terp.run("1 2 3 print print print");

// Check math words
//console.log('---MATH---');
//terp.run('2 2 + print');
//terp.run('3 3 * 4 4 * + sqrt print');

// Check stack words
//console.log('---STACK---');
//terp.run('1 2 3 rot pstack');

// Check variable words
console.log('---VARIABLE---');
terp.run('var a');
terp.run('10 a store');
terp.run('a fetch print');