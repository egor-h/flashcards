import React, {useState} from 'react';
import './FlashCard.css';
import Card from '@mui/material/Card';
interface Card {
    front: string,
    back: string,
    help: string,
    isFront: boolean,
}

function FlashCard({card, isOpen}: Card | any): JSX.Element {
    return (
        <>
            <div
                className="flashCard"
                style={{
                    transform: card.isFront !== true ? "rotateY(180deg)" : "",
                    backgroundColor: "purple"
                }}
                onClick={(e: React.MouseEvent<HTMLDivElement>): void => {
                    isOpen(card.id)
                }}
            >
                <div style={{
                    transform: card.isFront !== true ? "rotateY(180deg)" : "",
                    color: "white"
                }}>
                    {card.isFront ? card.front : card.back}
                </div>
            </div>
        </>
    );
}

export default FlashCard;
