import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
function component() {
    let element = document.createElement('div');
  
    // lodash，现在由此脚本导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到已经存在的div中
    var myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)
  
    return element;
  }
  
  document.body.appendChild(component());