var scratch = require('./scratch');
var terp = new scratch.Scratch();

// Check print words
terp.addWords(scratch.PrintingWords);
console.log('---PRINT---');
terp.run("10 pstack");
terp.run("1 2 3 print print print");

// Check math words
terp.addWords(scratch.MathWords);
console.log('---MATH---');
terp.run('2 2 + print');
terp.run('3 3 * 4 4 * + sqrt print');
