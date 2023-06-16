import React, {useState, useContext} from 'react';
import {Context} from "../../index";
import './LoginForm.css';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {enqueueSnackbar, SnackbarProvider} from "notistack";
import {observer} from "mobx-react-lite";
import codingCat from '../../assets/img/coding.png';

function LoginForm() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context);
    return (
        <form className="registrationForm">
            <img src={codingCat} alt="" style={{
                width: "96px",
                margin: "1% 0 1% 0"
            }}/>
            <div className="signInToFlashCards">
                <h2 className="signInToFlashCardsText">SIGN IN TO FLASH-CARDS</h2>
            </div>
            <div className="userDataContainer">
                <div className="userData">
                    <label className="labelUserData">Email address</label>
                    <input
                        id="userEmail"
                        type="text"
                        className="inputUserData"
                        value={email}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className="userData">
                    <label className="labelUserData">Password</label>
                    <input
                        id="userPassword"
                        type="password"
                        className="inputUserData"
                        value={password}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="signInButton"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                            store.login(email, password)
                        }}
                    >
                        Sign in
                    </button>
                </div>
            </div>
            <div className="createNewAccountContainer">
                <h4 className="createNewAccountText">New to Flash Cards?
                    <a href="/" className="createNewAccountLink"> Create an account.</a>
                </h4>
            </div>
            <ul style={{margin: "4% 0 0 0", width: "100%", display: "flex", justifyContent: "center"}}>
                <li className="textInList">
                    <a href="/" className="textLink">
                        Terms
                    </a>
                </li>
                <li className="textInList">
                    <a href="/" className="textLink">
                        Privacy
                    </a>
                </li>
                <li className="textInList">
                    <a href="/" className="textLink">
                        Security
                    </a>
                </li>
                <li className="textInList">
                    <a href="/" className="contactWithUs">
                        Сontact with us
                    </a>
                </li>
            </ul>
            <SnackbarProvider
                maxSnack={4}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                autoHideDuration={3000}
            />
        </form>
    );
}

export default observer(LoginForm);
