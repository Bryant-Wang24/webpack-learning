
import { cube } from './math.js';
import printMe from './print.js';
import './style.css';
function component() {
  const element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // var btn = document.createElement('button');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // btn.innerHTML = '点击这里，然后查看 console！';
  // btn.onclick = printMe;
  // element.appendChild(btn);


  // element.classList.add('hello');

  return element;
}

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

// console.log('哈哈',import.meta.webpackHot.accept());
// 第一种写法
// if (import.meta.webpackHot) {
//   console.log('执行');
//   import.meta.webpackHot.accept('./print.js', function() {
//        console.log('更新后触发的函数');
//        printMe();
//      })
// }
// 第二种写法
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('更新后触发的函数');
    //          模块热替换可能比较难以掌握。为了说明这一点，我们回到刚才的示例中。
    // 如果你继续点击示例页面上的按钮， 你会发现控制台仍在打印旧的 printMe 函数。
    // 这是因为按钮的 onclick 事件处理函数仍然绑定在旧的 printMe 函数上。
    // 为了让 HMR 正常工作，我们需要更新代码，使用 module.hot.accept 将其绑定到新的 printMe 函数上：
    document.body.removeChild(element);
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  })
}