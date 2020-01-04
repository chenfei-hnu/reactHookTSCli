import React from 'react';
import ReactDOM from 'react-dom';
/* antd全局样式文件 */
import "antd/dist/antd.css";
import './assets/css/index.css';
import App from './components/App';
/* 引入markdown编辑器 */


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
