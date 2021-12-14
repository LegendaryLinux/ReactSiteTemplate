import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from './BaseComponent/components/BaseComponent';
import '../styles/global/body.scss';

window.addEventListener('load', () => {
  ReactDOM.render(<BaseComponent />, document.getElementById('app'));
});
