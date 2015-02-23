var words = require('./words');
var Scratch = require('./scratch');

var terp = new Scratch();

// Check print words
terp.addWords(words.PrintingWords);
//console.log('---PRINT---');
//terp.run("10 pstack");
//terp.run("1 2 3 print print print");

// Check math words
//terp.addWords(words.MathWords);
//console.log('---MATH---');
//terp.run('2 2 + print');
//terp.run('3 3 * 4 4 * + sqrt print');

// Check stack words
terp.addWords(words.StackWords);
console.log('---STACK---');
terp.run('1 2 3 rot pstack');
