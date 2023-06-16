import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import MainPage from "../pages/MainPage/MainPage";
import LoginForm from "../pages/Login/LoginForm";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {IUser} from "../models/IUser";
import UserService from '../services/UserService';
function App(): JSX.Element {
    const {store} = useContext(Context)
    const [users, setUsers] = useState<IUser[]>([]);

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers()
            setUsers(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {}
         store.checkAuth()
    }, [])

    if (store.isLoading) {
        return <div>Loading</div>
    }

    if (!store.isAuth) {
        return (
            <LoginForm/>
        )
    }
    return (
        <div className="App">
            <MainPage />
            <h1>{(store.user.isActivated) ? 'Пользователь активирован' : 'Подтвердите аккаунт'}</h1>
            <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}`: 'Авторизуйтесь'}</h1>
            <button onClick={() => {getUsers()}}>ПОЛУЧИТЬ ЮЗЕРОВ</button>
            <button onClick={() => {
                store.logout();
            }}>Выйти</button>
            <div>
                {users.map((user: IUser) => {
                    return <div key={user.email}>{user.email}</div>
                })}
            </div>
        </div>
    );
}

export default observer(App);
