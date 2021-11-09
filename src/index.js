import _ from 'lodash';
import printMe from './print.js';
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);

    
    // element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());
// console.log('哈哈',import.meta.webpackHot.accept());
  if (import.meta.webpackHot) {
    console.log('执行');
    import.meta.webpackHot.accept('./print.js', function() {
         console.log('更新后触发的函数');
         printMe();
       })
     }