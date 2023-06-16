import React, {useEffect, useState} from 'react';
import './MainPage.css';
import FlashCard from "../../shared/FlashCard/FlashCard";
import ky from "../../utils/ky";

interface Card {
    front: string,
    back: string,
    help: string,
    isFront: boolean,
    id: string | null
}
function MainPage(): JSX.Element {
    const [cards, setCards] = useState<Array<Card>>([{
        front: '',
        back: '',
        help: '',
        isFront: true,
        id: null
    }])
    // useEffect(() => {
    //     ky.get('http://localhost:9999/flashCards')
    //         .then((res): Promise<Array<Card>> => res.json())
    //         .then((data: Array<Card>) => {
    //             setCards(data)
    //         }).catch(err => console.log(err));
    // }, [])
    const isOpen = (id: string): void => {
        cards.map((card: Card) => {
            return card.id === id ? card.isFront = !card.isFront : card.isFront
        })
        setCards([...cards])
    }

    return (
        <div className="mainPage">
            {
                cards.length > 1
                    ? cards.map(card => {
                        return <FlashCard card={card} isOpen={isOpen}/>
                    })

                    : 'Подожди немного'
            }
            <button onClick={() => {
                ky.post('http://localhost:9999/api/registration', {
                    json: {
                        email: 'emai1l',
                        password: 'password'
                    }
                })
            }}>sendtoserver</button>
        </div>
    );
}

export default MainPage;
