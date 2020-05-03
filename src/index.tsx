import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import DashboardPage from "./components/pages/dashboard-page/dashboardPage";
import SideMenuLayout from "./components/layout/side-menu-layout/sideMenuLayout";

ReactDOM.render(
    <React.StrictMode>
        <div className='d-flex'>
            <SideMenuLayout/>
            <div className='flex-grow-1'>
                <DashboardPage/>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
