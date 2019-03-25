import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import 'semantic-ui-css/semantic.min.css'
import MainRoutes from "Routes/Main-Routes";
import * as serviceWorker from './serviceWorker';
import 'Assets/styles/index.css';

ReactDOM.render(
    <ToastProvider
        autoDismissTimeout={6000}
        placement="bottom-center"
    >
        <MainRoutes />
    </ToastProvider>,
    document.getElementById('root'));

serviceWorker.unregister();
