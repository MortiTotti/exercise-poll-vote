import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import MainRoutes from "Routes/Main-Routes";
import * as serviceWorker from './serviceWorker';
import 'Assets/styles/index.css';

ReactDOM.render(<MainRoutes />, document.getElementById('root'));

serviceWorker.unregister();
