import '../styles/styles.less';

import _ from 'lodash';

function component () {
  let element = document.createElement('h1');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
