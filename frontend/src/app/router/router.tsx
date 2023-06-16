import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import CreateFlashCards from "../../pages/CreateFlashCards/CreateFlashCards";
import Header from "../../widgets/Header/Header";
import Registration from "../../pages/Registration/Registration";
import LoginForm from "../../pages/Login/LoginForm";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: "/",
        element:
        <>
            <App />
        </>,
    },
    {
        path: "/registration",
        element:
            <>
                <Header />
                <Registration/>
            </>,
    },
    {
        path: "/experts",
        element: <MainPage/>,
    },
    {
        path: "/main",
        element: <MainPage/>,
    },
    {
        path: "/library",
        element: <MainPage/>,
    },
    {
        path: "/createFlashCards",
        element: <CreateFlashCards/>,
    },
    {
        path: '/login',
        element: <LoginForm />
    }
]);

export default routes;

