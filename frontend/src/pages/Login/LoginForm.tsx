import React, {useState, useContext} from 'react';
import {Context} from "../../index";
import './LoginForm.css';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {enqueueSnackbar, SnackbarProvider} from "notistack";
import {observer} from "mobx-react-lite";
function LoginForm() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context);
    return (
        <form className="registrationForm">
            <TextField
                id="userEmail"
                label="Email"
                variant="standard"
                type="text"
                className="userData"
                value={email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                }}
            />
            <TextField
                id="userPassword"
                label="Password"
                variant="standard"
                type="password"
                className="userData"
                value={password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
            />
            <Button
                className="createUserButton"
                variant="outlined"
                style={{
                    margin: "10px 20% 0 60%",
                    width: "20%"
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => store.login(email, password)}
            >
                Log In
            </Button>
            <Button
                className="createUserButton"
                variant="outlined"
                style={{
                    margin: "10px 0 0 20%",
                    width: "20%"
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    store.registration(email, password);
                    if (email === '' || password === '') {
                        enqueueSnackbar('Заполните поля!', {
                            variant: 'error',
                        })
                    }}
                }
            >
                Registration
            </Button>
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
