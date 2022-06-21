const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p');
redText.style.cssText = 'color: red';
redText.textContent = 'I\'m red!';
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.style.cssText = 'color: blue';
blueText.textContent = 'I\'m Blue!';
container.appendChild(blueText);

const div = document.createElement('div');
div.style.cssText = 'border: 10px; border-color: black; background-color: pink'
div.classList.add('weird');


const divHeader = document.createElement('h1');
divHeader.textContent = 'I\'m in a div';
div.appendChild(divHeader);

const divP = document.createElement('p');
divP.textContent = 'ME TOO!';
div.appendChild(divP);

container.appendChild(div);

function alertFunction(){
    alert('STOP RIGHT THERE!');
}

const btn1 = document.querySelector('#btn1');
btn1.onclick = alertFunction;

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });