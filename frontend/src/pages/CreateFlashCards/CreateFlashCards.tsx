import React, {useState} from 'react';
import './CreateFlashCards.css';
import ky from "../../utils/ky";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

import { SnackbarProvider, enqueueSnackbar } from 'notistack';
function CreateFlashCards(): JSX.Element {
    const initialState = {
        front: '',
        back: '',
        help: ''
    }
    interface FlashCard {
        front: string,
        back: string,
        help: string
    }
    const [card, setCard] = useState(initialState);
    const sendFlashCardToServer = async (event: React.MouseEvent<HTMLButtonElement>, card: FlashCard) => {
        event.preventDefault();
        if (card.back !== '' && card.front !== '') {
            await ky.post('http://localhost:9999/createFlashCard',{json: {...card}}).then(res => {
                console.log(res)
                if (res.status === 200) {
                    enqueueSnackbar('Карточка успешно добавлена в базу данных!', {
                        variant: 'success',
                    })
                    setCard(initialState)
                }
            }).catch((err) => {
                console.log(err)
                enqueueSnackbar('Произошла ошибка при добавлении карточки в базу данных.', {
                    variant: 'error',
                })
            })
        }
    };
    return (
        <>
            <div className="createFlashCards">
                <div className="frontFlashCards">
                    <TextField
                        id="frontFlashCardsField"
                        label="Термин"
                        variant="standard"
                        type="text"
                        className="frontFlashCardsField"
                        value={'' || card.front}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setCard({...card, front: e.target.value})
                        }}
                    />
                </div>
                <div className="backFlashCards">
                    <TextField
                        id="backFlashCardsField"
                        label="Определение"
                        variant="standard"
                        type="text"
                        className="backFlashCardsField"
                        value={'' || card.back}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setCard({...card, back: e.target.value})
                        }}
                    />
                </div>
                <div className="helpFlashCards">
                    <TextField
                        id="helpFlashCardsField"
                        label="Подсказка"
                        variant="standard"
                        type="text"
                        className="helpFlashCardsField"
                        value={'' || card.help}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                            setCard({...card, help: e.target.value})
                        }}
                    />
                </div>
                <div>
                    <Button
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                            if (card.back === '' || card.front === '') {
                                enqueueSnackbar('Заполните поля!', {
                                    variant: 'error',
                                })
                            } else {
                                sendFlashCardToServer(event, card)
                            }
                        }}
                        className="createFlashCardsButton"
                        variant="outlined"
                        style={{
                            margin: "10px 20% 0 60%",
                            width: "20%"
                        }}
                    >
                        Create flash card
                    </Button>
                </div>
                <SnackbarProvider
                    maxSnack={4}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    autoHideDuration={3000}
                />
            </div>
        </>
    );
}

export default CreateFlashCards;
