//Array Exercise
let secretMessage = ['Learning', 'is', 'not', 'about', 
'what', 'you', 'get', 'easily', 'the', 'first', 'time,',
'it', 'is', 'about', 'what', 'you', 'can', 'figure',
'out.', '-2015', 'Chris', 'Pine,', 'Learn', 
'JavaScript'];
secretMessage.pop();
//console.log (secretMessage.length) //23
secretMessage.splice (7,1,'right ')
secretMessage.shift();
secretMessage.unshift('Programming')
secretMessage.splice(6,5,'know,')
console.log(secretMessage.join(' '));
