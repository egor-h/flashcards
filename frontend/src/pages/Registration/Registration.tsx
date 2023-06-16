import React, {useState} from 'react';
import './Registration.css';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {enqueueSnackbar, SnackbarProvider} from "notistack";

interface User {
    email: string,
    password: string,

}
function Registration(): JSX.Element {
    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    })
    return (
        <form className="registrationForm">
            <TextField
                id="userEmail"
                label="Email"
                variant="standard"
                type="text"
                className="userData"
                value={'' || user.email}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setUser({...user, email: e.target.value})
                }}
            />
            <TextField
                id="userPassword"
                label="Password"
                variant="standard"
                type="password"
                className="userData"
                value={'' || user.password}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setUser({...user, password: e.target.value})
                }}
            />
            <Button
                className="loginUserButton"
                variant="outlined"
                style={{
                    margin: "10px 20% 0 60%",
                    width: "20%"
                }}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    if (user.email === '' || user.password === '') {
                        enqueueSnackbar('Заполните поля!', {
                            variant: 'error',
                        })
                    }}
                }
            >
                Create flash card
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

export default Registration;
