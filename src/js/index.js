import _ from 'lodash';
import '../scss/style.scss';
import gif from '../media/mind_blown.gif';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let newElement = document.createElement('h1');
  newElement.innerHTML = 'Jason was here';
  newElement.classList.add('jason');

  let myGif = new Image();
  myGif.src = gif;

  let btn = document.createElement('button');
  btn.innerHTML = 'Click Me';
  btn.onclick = printMe;

  element.appendChild(newElement);
  element.appendChild(myGif);
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
