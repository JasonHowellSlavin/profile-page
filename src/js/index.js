import _ from 'lodash';
import '../scss/style.scss';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  let newElement = document.createElement('h1');
  newElement.innerHTML = 'Jason was here';
  newElement.classList.add('jason');

  element.appendChild(newElement);

  return element;
}

document.body.appendChild(component());
