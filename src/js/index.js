import '../styles/styles.less';

import _ from 'lodash';

const component = () => {



  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  console.log(x);
  console.log(y);
  console.log(z);
  [5, 6].map(n => console.log(n));


  let element = document.createElement('h1');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
