import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import router from './app/router/router';
import Store from "./app/store/store";
import App from "./app/App";

interface State {
    store: Store
}

const store = new Store();

export const Context = createContext<State>({
    store
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{store}}>
        <App/>
    </Context.Provider>
);