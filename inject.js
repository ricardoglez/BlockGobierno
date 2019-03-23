console.log('injecting...', $);

var overlay = document.createElement("DIV");  
overlay.appendChild( document.createTextNode('Pinches mierdas!'));

overlay.style.display = 'block';
overlay.style.position = 'absolute';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.color = '#fff';
overlay.style.fontSize = '3em';
overlay.style.top = '35px';
overlay.style.background = 'rgba(0,0,0,.8)';


// document.body.style.width = '100%';
// document.body.style.height = '100%';


document.body.appendChild(overlay);

