import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./App/App"

// TODO Step 1.
// TODO 1.1. Import App component from src/App/App.js file. Remember that importing in JavaScript always works
// TODO      with relative paths, so pay attention where the file that you're import is located in relation
// TODO      to the file you are importing. React should throw an error now saying that nothing is to be imported
// TODO      from this file, once you complete 1.4 this error will go away.
// TODO 1.2. Render App component inside the element with id of "root".
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
