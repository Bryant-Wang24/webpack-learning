import _ from 'lodash';
import printMe from './print.js';
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);
    // lodash，现在由此脚本导入
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());

  if (module.hot) {
       module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
         printMe();
       })
     }