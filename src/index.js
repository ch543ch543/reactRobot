import React from 'react'; //this does DOM manipulation for us
import ReactDOM from 'react-dom'; //ReactDOM is used for websites
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 
 
ReactDOM.render( //I want the ReacrDOM package to use the function render
    <App />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
