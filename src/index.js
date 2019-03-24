import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import AppRoutes from "Routes/App-Routes";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));

serviceWorker.unregister();
