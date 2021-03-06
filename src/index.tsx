import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import DashboardPage from "./components/pages/dashboard-page/dashboardPage";
import SideMenuLayout from "./components/layout/side-menu-layout/sideMenuLayout";
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux";
import {Provider} from 'react-redux';
import { rootReducer } from "./reducers/mainReducer/mainReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { StylesProvider } from '@material-ui/core';
import './css-utils/css-utils.scss';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(reduxThunk)
));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <StylesProvider injectFirst>
                <div className='d-flex'>
                    <SideMenuLayout/>
                    <div className='flex-grow-1'>
                        <DashboardPage/>
                    </div>
                </div>
            </StylesProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
